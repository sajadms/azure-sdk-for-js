// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import * as assert from "assert";
import { getKeyvaultName } from "./utils/utils.common";
import { KeysClient, CreateEcKeyOptions, UpdateKeyOptions, GetKeyOptions } from "../src";
import { RestError } from "@azure/core-http";
import { EnvironmentCredential } from "@azure/identity";
import {
  record,
  setReplaceableVariables,
  retry,
  setReplacements,
  env,
  uniqueString
} from "./utils/recorder";
import TestClient from "./utils/testClient";

describe("Keys client - create, read, update and delete operations", () => {
  let client: KeysClient;
  let testClient: TestClient;
  let recorder: any;

  const keyPrefix = `CRUD${env.KEY_NAME || "KeyName"}`;
  let keySuffix: string;

  before(async function() {
    // NOTE:
    // setReplaceableVariables and setReplacements are reused just to put their ussage in the open,
    // to avoid having them obscured into a generic utility file. Once the recording tool is centralized
    // we can move these somewhere else!
    setReplaceableVariables({
      AZURE_CLIENT_ID: "azure_client_id",
      AZURE_CLIENT_SECRET: "azure_client_secret",
      AZURE_TENANT_ID: "azure_tenant_id",
      KEYVAULT_NAME: "keyvault_name"
    });

    keySuffix = uniqueString();
    setReplacements([
      (recording) => recording.replace(/"access_token":"[^"]*"/g, `"access_token":"access_token"`),
      (recording) =>
        keySuffix === "" ? recording : recording.replace(new RegExp(keySuffix, "g"), "")
    ]);

    recorder = record(this); // eslint-disable-line no-invalid-this
    const credential = await new EnvironmentCredential();
    const keyVaultName = getKeyvaultName();
    const keyVaultUrl = `https://${keyVaultName}.vault.azure.net`;
    client = new KeysClient(keyVaultUrl, credential);
    testClient = new TestClient(client);
  });

  after(async function() {
    recorder.stop();
  });

  // The tests follow

  it("can create a key while giving a manual type", async function() {
    const keyName = testClient.formatName(`${keyPrefix}-${this.test.title}-${keySuffix}`);
    const result = await client.createKey(keyName, "RSA");
    assert.equal(result.name, keyName, "Unexpected key name in result from createKey().");
    await testClient.flushKey(keyName);
  });

  it("cannot create a key with an empty name", async function() {
    const keyName = "";
    let error;
    try {
      await client.createKey(keyName, "RSA");
      throw Error("Expecting an error but not catching one.");
    } catch (e) {
      error = e;
    }
    assert.equal(
      error.message,
      `"keyName" with value "" should satisfy the constraint "Pattern": /^[0-9a-zA-Z-]+$/.`,
      "Unexpected error while running createKey with an empty string as the name."
    );
  });

  it("cannot create a key with a null name", async function() {
    const keyName = null;
    let error;
    try {
      await client.createKey(keyName, "RSA");
      throw Error("Expecting an error but not catching one.");
    } catch (e) {
      error = e;
    }
    assert.equal(
      error.message,
      "keyName cannot be null or undefined.",
      "Unexpected error while running createKey with an empty string as the name."
    );
  });

  it("can create a RSA key", async function() {
    const keyName = testClient.formatName(`${keyPrefix}-${this.test.title}-${keySuffix}`);
    const result = await client.createRsaKey(keyName);
    assert.equal(result.name, keyName, "Unexpected key name in result from createKey().");
    await testClient.flushKey(keyName);
  });

  it("can create a RSA key with size", async function() {
    const keyName = testClient.formatName(`${keyPrefix}-${this.test.title}-${keySuffix}`);
    const options = {
      keySize: 2048
    };
    const result = await client.createRsaKey(keyName, options);
    assert.equal(result.name, keyName, "Unexpected key name in result from createKey().");
    await testClient.flushKey(keyName);
  });

  it("can create an EC key", async function() {
    const keyName = testClient.formatName(`${keyPrefix}-${this.test.title}-${keySuffix}`);
    const result = await client.createEcKey(keyName);
    assert.equal(result.name, keyName, "Unexpected key name in result from createKey().");
    await testClient.flushKey(keyName);
  });

  it("can create an EC key with curve", async function() {
    const keyName = testClient.formatName(`${keyPrefix}-${this.test.title}-${keySuffix}`);
    const options: CreateEcKeyOptions = {
      curve: "P-256"
    };
    const result = await client.createEcKey(keyName, options);
    assert.equal(result.name, keyName, "Unexpected key name in result from createKey().");
    await testClient.flushKey(keyName);
  });

  it("can create a disabled key", async function() {
    const keyName = testClient.formatName(`${keyPrefix}-${this.test.title}-${keySuffix}`);
    const options = {
      enabled: false
    };
    const result = await client.createRsaKey(keyName, options);
    assert.equal(result.enabled, false, "Unexpected enabled value from createKey().");
    assert.equal(result.name, keyName, "Unexpected key name in result from createKey().");
    await testClient.flushKey(keyName);
  });

  it("can create a key with notBefore", async function() {
    const keyName = testClient.formatName(`${keyPrefix}-${this.test.title}-${keySuffix}`);
    const date = new Date("2019-01-01");
    const notBefore = new Date(date.getTime() + 5000); // 5 seconds later
    notBefore.setMilliseconds(0);

    const options = { notBefore };
    const result = await client.createRsaKey(keyName, options);

    assert.equal(
      result.notBefore.getTime(),
      notBefore.getTime(),
      "Unexpected notBefore value from createKey()."
    );
    assert.equal(result.name, keyName, "Unexpected key name in result from createKey().");
    await testClient.flushKey(keyName);
  });

  it("can create a key with expires", async function() {
    const keyName = testClient.formatName(`${keyPrefix}-${this.test.title}-${keySuffix}`);
    const date = new Date("2019-01-01");
    const expires = new Date(date.getTime() + 5000); // 5 seconds later
    expires.setMilliseconds(0);

    const options = { expires };
    const result = await client.createRsaKey(keyName, options);

    assert.equal(
      result.expires.getTime(),
      expires.getTime(),
      "Unexpected expires value from createKey()."
    );
    assert.equal(result.name, keyName, "Unexpected key name in result from createKey().");
    await testClient.flushKey(keyName);
  });

  it("can update key", async function() {
    const keyName = testClient.formatName(`${keyPrefix}-${this.test.title}-${keySuffix}`);
    const { version } = await client.createRsaKey(keyName);
    const options: UpdateKeyOptions = { enabled: false };
    const result = await client.updateKey(keyName, version, options);
    assert.equal(result.enabled, false, "Unexpected enabled value from updateKey().");
    await testClient.flushKey(keyName);
  });

  it("can update a disabled key", async function() {
    const keyName = testClient.formatName(`${keyPrefix}-${this.test.title}-${keySuffix}`);
    const createOptions = {
      enabled: false
    };
    const { version } = await client.createRsaKey(keyName, createOptions);
    const expires = new Date("2019-01-01");
    expires.setMilliseconds(0);
    const updateOptions: UpdateKeyOptions = { expires };
    const result = await client.updateKey(keyName, version, updateOptions);
    assert.equal(
      result.expires.getTime(),
      expires.getTime(),
      "Unexpected expires value after attempting to update a disabled key"
    );
    await testClient.flushKey(keyName);
  });

  it("can delete a key", async function() {
    const keyName = testClient.formatName(`${keyPrefix}-${this.test.title}-${keySuffix}`);
    await client.createKey(keyName, "RSA");
    await client.deleteKey(keyName);

    try {
      await client.getKey(keyName);
      throw Error("Expecting an error but not catching one.");
    } catch (e) {
      if (e instanceof RestError) {
        assert.equal(e.message, `Key not found: ${keyName}`);
      } else {
        throw e;
      }
    }
    await testClient.purgeKey(keyName);
  });

  it("delete nonexisting key", async function() {
    const keyName = testClient.formatName(`${keyPrefix}-${this.test.title}-${keySuffix}`);
    try {
      await client.getKey(keyName);
      throw Error("Expecting an error but not catching one.");
    } catch (e) {
      if (e instanceof RestError) {
        assert.equal(e.message, `Key not found: ${keyName}`);
      } else {
        throw e;
      }
    }
  });

  it("can get a key", async function() {
    const keyName = testClient.formatName(`${keyPrefix}-${this.test.title}-${keySuffix}`);
    await client.createKey(keyName, "RSA");
    const getResult = await client.getKey(keyName);
    assert.equal(getResult.name, keyName, "Unexpected key name in result from getKey().");
    await testClient.flushKey(keyName);
  });

  it("can get a specific version of a key", async function() {
    const keyName = testClient.formatName(`${keyPrefix}-${this.test.title}-${keySuffix}`);
    const { version } = await client.createKey(keyName, "RSA");
    const options: GetKeyOptions = { version };
    const getResult = await client.getKey(keyName, options);
    assert.equal(getResult.version, version, "Unexpected key name in result from getKey().");
    await testClient.flushKey(keyName);
  });

  it("can get a deleted key", async function() {
    const keyName = testClient.formatName(`${keyPrefix}-${this.test.title}-${keySuffix}`);
    await client.createKey(keyName, "RSA");
    await client.deleteKey(keyName);
    const getResult = await retry(async () => client.getDeletedKey(keyName));
    assert.equal(getResult.name, keyName, "Unexpected key name in result from getKey().");
    await testClient.purgeKey(keyName);
  });

  it("can't get a deleted key that doesn't exist", async function() {
    const keyName = testClient.formatName(`${keyPrefix}-${this.test.title}-${keySuffix}`);
    let error;
    try {
      await client.deleteKey(keyName);
      throw Error("Expecting an error but not catching one.");
    } catch (e) {
      error = e;
    }
    assert.equal(
      error.message,
      `Key not found: ${keyName}`,
      "Unexpected key name in result from getKey()."
    );
  });
});
