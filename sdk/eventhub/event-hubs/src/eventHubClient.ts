// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.

import * as log from "./log";
import { WebSocketImpl } from "rhea-promise";
import {
  ApplicationTokenCredentials,
  DeviceTokenCredentials,
  UserTokenCredentials,
  MSITokenCredentials
} from "@azure/ms-rest-nodeauth";
import {
  DataTransformer,
  TokenProvider,
  EventHubConnectionConfig,
  AadTokenProvider,
  SasTokenProvider,
  ConnectionConfig,
  parseConnectionString,
  EventHubConnectionStringModel
} from "@azure/amqp-common";

import { ConnectionContext } from "./connectionContext";
import { PartitionProperties, EventHubProperties } from "./managementClient";
import { EventPosition } from "./eventPosition";

import { IotHubClient } from "./iothub/iothubClient";
import { Aborter } from "./aborter";
import { EventSender } from "./sender";
import { EventReceiver } from "./receiver";

/**
 * Retry policy options for operations on the EventHubClient
 */
export interface RetryOptions {
  /**
   * Total number of times to attempt an operation
   */
  retryCount?: number;
  /**
   * Number of milliseconds to wait between retries
   */
  retryInterval?: number;
  // /**
  //  * The maximum value the `retryInterval` gets incremented exponentially between retries.
  //  * Not applicable, when `isExponential` is set to `false`.
  //  */
  // maxRetryInterval?: number;
  // /**
  //  * Boolean denoting if the `retryInterval` should be incremented exponentially between
  //  * retries or kept the same.
  //  */
  // isExponential?: boolean;
}

/**
 * Options to passed when creating a sender using the EventHubClient
 */
export interface EventSenderOptions {
  /**
   * @property
   * The id of the partition to which the event should be sent. If no id is provided,
   * the service will determine the partition to which the event will be sent.
   */
  partitionId?: string;
  /**
   * @property
   * Retry options for the send operation on the sender. If no value is provided here, the
   * retry options set when creating the `EventHubClient` is used.
   */
  retryOptions?: RetryOptions;
}

/**
 * Options that can be passed when sending a batch of events using the EventHubsClient
 */
export interface EventBatchingOptions {
  /**
   * @property 
   * If specified EventHub will hash this string to map to a partitionId.
   * It guarantees that messages with the same partitionKey end up in the same partition.
   * This will be ignored if the sender was created using a `paritionId`.
   */
  partitionKey?: string | null;
  /**
   * @property
   * Cancel current operation
   */
  cancellationToken?: Aborter;
}

/**
 * Options that can be passed to the receive operations on the EventHubsClient
 * @interface ReceiveOptions
 */
export interface EventReceiverOptions {
  /**
   * @property 
   * The event position in the partition at which to start receiving messages.
   */
  beginReceivingAt?: EventPosition;
  /**
   * @property
   * The consumer group from which the receiver should receive events from.
   * If not provided, then default consumer group by the name "$default" is used.
   */
  consumerGroup?: string;
  /**
   * @property 
   * The priority value that this receiver is currently using for partition ownership.
   * If another receiver is currently active for the same partition with no or lesser
   * priority, then it will get disconnected.
   * If another receiver is currently active with a higher priority, then this receiver
   * will fail to connect.
   */
  exclusiveReceiverPriority?: number;
  /**
   * @property 
   * Retry options for the receive operation on the receiver. If no value is provided here, the
   * retry options set when creating the `EventHubClient` is used.
   */
  retryOptions?: RetryOptions;
}

/**
 * Describes the options that can be provided while creating the EventHub Client.
 * @interface ClientOptions
 */
export interface EventHubClientOptions {
  /**
   * @property 
   * The data transformer that will be used to encode and decode the sent and received messages respectively.
   * If not provided then the `DefaultDataTransformer` is used which has the below `encode` & `decode` features 
   * - `encode`: 
   *    - If event body is a Buffer, then the event is sent without any data transformation
   *    - Else, JSON.stringfy() is run on the body, and then converted to Buffer before sending the event
   *    - If JSON.stringify() fails at this point, the send operation fails too.
   * - `decode`
   *    - The body receivied via the AMQP protocol is always of type Buffer
   *    - UTF-8 encoding is used to convert Buffer to string, and then JSON.parse() is run on it to get the event body
   *    - If the JSON.parse() fails at this point, then the originally received Buffer object is returned in the event body.
   */
  dataTransformer?: DataTransformer;
  /**
   * @property 
   * The user agent that will be appended to the built in user agent string that is passed as a
   * connection property to the Event Hubs service 
   */
  userAgent?: string;
  /**
   * @property 
   * The WebSocket constructor used to create an AMQP connection over a WebSocket.
   * This option should be provided in the below scenarios
   * - The TCP port 5671 which is what is used by the AMQP connection to Event Hubs is blocked in your environment.
   * - Your application needs to be run behind a proxy server
   * - Your application needs to run in the browser and you want to provide your own choice of Websocket implementation
   * instead of the built-in WebSocket in the browser.
   */
  webSocket?: WebSocketImpl;
  /**
   * @property
   * Options to be passed to the WebSocket constructor when the underlying `rhea` library instantiates
   * the WebSocket.
   */
  webSocketConstructorOptions?: any;
  /**
   * @property
   * Retry options for all the operations on the client/sender/receiver.
   * This can be overridden by the retry options set on the sender and receiver.
   */
  retryOptions?: RetryOptions;
}

/**
 * @class EventHubClient
 * Describes the EventHub client.
 */
export class EventHubClient {
  /**
   * Describes the amqp connection context for the eventhub client.
   */
  private _context: ConnectionContext;

  /**
   * The options passed by the user when creating the EventHubClient instance.
   */
  private _clientOptions: EventHubClientOptions;

  /**
   * @property 
   * @readonly
   * The name of the Event Hub instance for which this client is created
   */
  get eventHubName(): string {
    return this._context.config.entityPath;
  }

  /**
   * @constructor
   * @param connectionString - Connection string of the form 'Endpoint=sb://my-servicebus-namespace.servicebus.windows.net/;SharedAccessKeyName=my-SA-name;SharedAccessKey=my-SA-key;EntityPath=my-event-hub-name'
   * @param options - The options that can be provided during client creation.
   */
  constructor(connectionString: string, options?: EventHubClientOptions);
  /**
   * @constructor
   * @param host - Fully qualified domain name for Event Hubs. Most likely,
   * <yournamespace>.servicebus.windows.net
   * @param eventHubPath - EventHub path of the form 'my-event-hub-name'
   * @param tokenProvider - Your token provider that implements the TokenProvider interface.
   * @param options - The options that can be provided during client creation.
   */
  constructor(host: string, eventHubPath: string, tokenProvider: TokenProvider, options?: EventHubClientOptions);
  /**
   * @constructor
   * @param host - Fully qualified domain name for Event Hubs. Most likely,
   * <yournamespace>.servicebus.windows.net
   * @param eventHubPath - EventHub path of the form 'my-event-hub-name'
   * @param credentials - The Token credentials as implemented in the `ms-rest-nodeauth` library. It can be one of the following:
   *  - ApplicationTokenCredentials
   *  - UserTokenCredentials
   *  - DeviceTokenCredentials
   *  - MSITokenCredentials.
   * @param options - The options that can be provided during client creation.
   */
  constructor(
    host: string,
    eventHubPath: string,
    credentials: ApplicationTokenCredentials | UserTokenCredentials | DeviceTokenCredentials | MSITokenCredentials,
    options?: EventHubClientOptions
  );
  constructor(
    hostOrConnectionString: string,
    eventHubPathOrOptions?: string | EventHubClientOptions,
    tokenProviderOrCredentials?:
      | TokenProvider
      | ApplicationTokenCredentials
      | UserTokenCredentials
      | DeviceTokenCredentials
      | MSITokenCredentials,
    options?: EventHubClientOptions
  ) {
    let connectionString;
    let tokenProvider: TokenProvider;
    hostOrConnectionString = String(hostOrConnectionString);

    if (typeof eventHubPathOrOptions !== "string") {
      connectionString = hostOrConnectionString;
      options = eventHubPathOrOptions;
      const parsedCS = parseConnectionString<EventHubConnectionStringModel>(connectionString);
      if (!parsedCS.EntityPath) {
        throw new TypeError(
          `"connectionString": "${connectionString}", ` + `must contain EntityPath="<path-to-the-entity>".`
        );
      }
      tokenProvider = new SasTokenProvider(parsedCS.Endpoint, parsedCS.SharedAccessKeyName, parsedCS.SharedAccessKey);
    } else {
      let host = hostOrConnectionString;
      const eventHubPath = eventHubPathOrOptions;
      let sharedAccessKeyName = "defaultKeyName";
      let sharedAccessKey = "defaultKeyValue";
      if (!host) {
        throw new Error(
          "Please provide a fully qualified domain name of your Event Hub instance for the 'host' parameter."
        );
      }
      if (!eventHubPath) {
        throw new Error("Please provide a value for the 'entityPath' parameter.");
      }
      if (!tokenProviderOrCredentials) {
        throw new Error("Please provide either a token provider or a valid credentials object.");
      }
      if (
        tokenProviderOrCredentials instanceof ApplicationTokenCredentials ||
        tokenProviderOrCredentials instanceof UserTokenCredentials ||
        tokenProviderOrCredentials instanceof DeviceTokenCredentials ||
        tokenProviderOrCredentials instanceof MSITokenCredentials
      ) {
        tokenProvider = new AadTokenProvider(tokenProviderOrCredentials);
      } else {
        tokenProvider = tokenProviderOrCredentials;
        if (tokenProvider instanceof SasTokenProvider) {
          sharedAccessKeyName = tokenProvider.keyName;
          sharedAccessKey = tokenProvider.key;
        }
      }
      if (!host.endsWith("/")) host += "/";
      connectionString = `Endpoint=sb://${host};SharedAccessKeyName=${sharedAccessKeyName};SharedAccessKey=${sharedAccessKey};EntityPath=${eventHubPath}`;
    }

    const config = EventHubConnectionConfig.create(connectionString);
    ConnectionConfig.validate(config);

    this._clientOptions = options || {};
    this._context = ConnectionContext.create(config, tokenProvider, this._clientOptions);
  }

  /**
   * Closes the AMQP connection to the Event Hub for this client,
   * returning a promise that will be resolved when disconnection is completed.
   * @returns {Promise<void>} Promise<void>
   */
  async close(): Promise<void> {
    try {
      if (this._context.connection.isOpen()) {
        // Close all the senders.
        for (const senderName of Object.keys(this._context.senders)) {
          await this._context.senders[senderName].close();
        }
        // Close all the receivers.
        for (const receiverName of Object.keys(this._context.receivers)) {
          await this._context.receivers[receiverName].close();
        }
        // Close the cbs session;
        await this._context.cbsSession.close();
        // Close the management session
        await this._context.managementSession!.close();
        await this._context.connection.close();
        this._context.wasConnectionCloseCalled = true;
        log.client("Closed the amqp connection '%s' on the client.", this._context.connectionId);
      }
    } catch (err) {
      const msg = `An error occurred while closing the connection "${this._context.connectionId}": ${JSON.stringify(err)}`;
      log.error(msg);
      throw new Error(msg);
    }
  }

  /**
   * Creates a Sender that can be used to send events to the Event Hub for which this client 
   * was created.
   *
   * @param options Options to create a Sender where you can specify the id of the partition
   * to which events need to be sent to and retry options. 
   *
   * @return {Promise<void>} Promise<void>
   */
  createSender(options?: EventSenderOptions): EventSender {
    return new EventSender(this._context, options);
  }

  /**
   * Creates a Receiver that can be used to receive events from the Event Hub for which this 
   * client was created.
   * 
   * @param partitionId The id of the partition from which to receive events
   * @param options Options to create the Receiver where you can specify the position from
   * which to start receiving events, the consumer group to receive events from, retry options
   * and more.
   */
  createReceiver(partitionId: string, options?: EventReceiverOptions): EventReceiver {
    return new EventReceiver(this._context, partitionId, options);
  }

  /**
   * Provides the eventhub runtime information.
   * @returns {Promise<EventHubProperties>} A promise that resolves with HubInformation.
   */
  async getProperties(cancellationToken?: Aborter): Promise<EventHubProperties> {
    try {
      return await this._context.managementSession!.getHubRuntimeInformation({
        retryOptions: this._clientOptions.retryOptions,
        cancellationToken
      });
    } catch (err) {
      log.error("An error occurred while getting the hub runtime information: %O", err);
      throw err;
    }
  }

  /**
   * Provides an array of partitionIds.
   * @returns {Promise<Array<string>>} A promise that resolves with an Array of strings.
   */
  async getPartitionIds(cancellationToken?: Aborter): Promise<Array<string>> {
    try {
      const runtimeInfo = await this.getProperties(cancellationToken);
      return runtimeInfo.partitionIds;
    } catch (err) {
      log.error("An error occurred while getting the partition ids: %O", err);
      throw err;
    }
  }

  /**
   * Provides information about the specified partition.
   * @param {(string|number)} partitionId Partition ID for which partition information is required.
   * @returns {Promise<PartitionProperties>} A promise that resoloves with EventHubPartitionRuntimeInformation.
   */
  async getPartitionInformation(partitionId: string, cancellationToken?: Aborter): Promise<PartitionProperties> {
    if (typeof partitionId !== "string" && typeof partitionId !== "number") {
      throw new Error("'partitionId' is a required parameter and must be of type: 'string' | 'number'.");
    }
    try {
      return await this._context.managementSession!.getPartitionInformation(partitionId, {
        retryOptions: this._clientOptions.retryOptions,
        cancellationToken
      });
    } catch (err) {
      log.error("An error occurred while getting the partition information: %O", err);
      throw err;
    }
  }

  /**
   * Creates an EventHubClient from connection string. If the connection string doesnt have
   * the EntityPath set in it, then use the entityPath parameter to pass the event hub name
   * @param {string} connectionString - Connection string of the form 'Endpoint=sb://my-servicebus-namespace.servicebus.windows.net/;SharedAccessKeyName=my-SA-name;SharedAccessKey=my-SA-key'
   * @param {string} [entityPath] - EventHub path of the form 'my-event-hub-name'
   * @param {EventHubClientOptions} [options] Options that can be provided during client creation.
   * @returns {EventHubClient} - An instance of the eventhub client.
   */

  static createFromConnectionString(
    connectionString: string,
    entityPath?: string,
    options?: EventHubClientOptions
  ): EventHubClient {
    if (!connectionString || (connectionString && typeof connectionString !== "string")) {
      throw new Error("'connectionString' is a required parameter and must be of type: 'string'.");
    }
    const config = ConnectionConfig.create(connectionString, entityPath);
    if (!config.entityPath) {
      throw new TypeError(
        `Either provide "path" or the "connectionString": "${connectionString}", ` +
          `must contain EntityPath="<path-to-the-entity>".`
      );
    }
    const tokenProvider = new SasTokenProvider(config.endpoint, config.sharedAccessKeyName, config.sharedAccessKey);
    return new EventHubClient(config.host, config.entityPath, tokenProvider, options);
  }

  /**
   * Creates an EventHub Client from connection string.
   * @param {string} iothubConnectionString - Connection string of the form 'HostName=iot-host-name;SharedAccessKeyName=my-SA-name;SharedAccessKey=my-SA-key'
   * @param {EventHubClientOptions} [options] Options that can be provided during client creation.
   * @returns {Promise<EventHubClient>} - Promise<EventHubClient>.
   */
  static async createFromIotHubConnectionString(
    iothubConnectionString: string,
    options?: EventHubClientOptions
  ): Promise<EventHubClient> {
    if (!iothubConnectionString || (iothubConnectionString && typeof iothubConnectionString !== "string")) {
      throw new Error("'connectionString' is a required parameter and must be of type: 'string'.");
    }
    const connectionString = await new IotHubClient(iothubConnectionString).getEventHubConnectionString();
    return new EventHubClient(connectionString, options);
  }
}
