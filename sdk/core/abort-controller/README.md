# Azure Abort Controller library for JS

The `@azure/abort-controller` package provides `AbortController` and `AbortSignal` classes. These classes are compatible
with the [AbortController](https://developer.mozilla.org/docs/Web/API/AbortController) built into modern browsers
and the `AbortSignal` used by [fetch](https://developer.mozilla.org/docs/Web/API/Fetch_API).
Use the `AbortController` class to create an instance of the `AbortSignal` class that can be used to cancel an operation
in an Azure SDK that accept a parameter of type `AbortSignalLike`.

## Getting started

### Installation

Install this libray using npm as follows

```
npm install @azure/abort-controller
```

## Key Concepts

Use the `AbortController` to create an `AbortSignal` which can then be passed to Azure SDK operations to cancel
pending work. The `AbortSignal` can be accessed via the `signal` property on an instantiated `AbortController`.
An `AbortSignal` can also be returned directly from a static method, e.g. `AbortController.timeout(100)`.
that is cancelled after 100 milliseconds.

Calling `abort()` on the instantiated `AbortController` invokes the regiestered `abort`
event listeners on the associated `AbortSignal`.
Any subsequent calls to `abort()` on the same controller will have no effect.

The `AbortSignal.none` static property returns an `AbortSignal` that can not be aborted.

Multiple instances of an `AbortSignal` can be linked so that calling `abort()` on the parent signal,
aborts all linked signals.
This linkage is one-way, meaning that a parent signal can affect a linked signal, but not the other way around.
To link `AbortSignals` together, pass in the parent signals to the `AbortController` constructor.

## Examples

The below examples assume that `doAsyncWork` is a function that takes a bag of properties, one of which is
of the abort signal.

### Example 1 - basic usage

```js
import { AbortController } from "@azure/abort-controller";

const controller = new AbortController();
doAsyncWork({ abortSignal: controller.signal });

// at some point later
controller.abort();
```

### Example 2 - Aborting with timeout

```js
import { AbortController } from "@azure/abort-controller";

const signal = AbortController.timeout(1000);
doAsyncWork({ abortSignal: signal });
```

### Example 3 - Aborting sub-tasks

```js
import { AbortController } from "@azure/abort-controller";

const allTasksController = new AbortController();

const subTask1 = new AbortController(allTasksController.signal);
const subtask2 = new AbortController(allTasksController.signal);

allTasksController.abort(); // aborts allTasksSignal, subTask1, subTask2
subTask1.abort(); // aborts only subTask1
```

### Example 4 - Aborting with parent signal or timeout

```js
import { AbortController } from "@azure/abort-controller";

const allTasksController = new AbortController();

// create a subtask controller that can be aborted manually,
// or when either the parent task aborts or the timeout is reached.
const subTask = new AbortController(allTasksController.signal, AbortController.timeout(100));

allTasksController.abort(); // aborts allTasksSignal, subTask
subTask.abort(); // aborts only subTask
```

## Contributing

This project welcomes contributions and suggestions. Most contributions require you to agree to a Contributor
License Agreement (CLA) declaring that you have the right to, and actually do, grant us the rights to use your
contribution. For details, visit https://cla.microsoft.com.

When you submit a pull request, a CLA-bot will automatically determine whether you need to provide a CLA and
decorate the PR appropriately (e.g., label, comment). Simply follow the instructions provided by the bot.
You will only need to do this once across all repos using our CLA.

This project has adopted the Microsoft Open Source Code of Conduct.
For more information see the Code of Conduct FAQ or contact opencode@microsoft.com with any additional
questions or comments.
