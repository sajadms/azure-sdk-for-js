// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import assert from "assert";
import { assertRejects } from "./authTestUtils";
import { MockAuthHttpClient } from "./authTestUtils";
import { AuthenticationError } from "../src/";
import { ClientSecretCredential } from "../src";

function isExpectedError(expectedErrorName: string): (error: any) => boolean {
  return (error: any) => {
    if (!(error instanceof AuthenticationError)) {
      assert.ifError(error)
    }
    return error.errorResponse.error === expectedErrorName
  }
}

describe("IdentityClient", function () {
  it("throws an exception when an authentication request fails", async () => {
    const mockHttp = new MockAuthHttpClient({
      authResponse: {
        status: 400,
        bodyAsText: `{ "error": "test_error", "error_description": "This is a test error" }`
      }
    });

    const credential = new ClientSecretCredential("tenant", "client", "secret", mockHttp.identityClientOptions);
    await assertRejects(
      credential.getToken("https://test/.default"),
      error => {
        assert.strictEqual(error.name, 'AuthenticationError')
        return true;
      }
    );
  });

  it("returns a usable error when the authentication response doesn't contain a body", async () => {
    const mockHttp = new MockAuthHttpClient({
      authResponse: {
        status: 500,
        bodyAsText: ''
      }
    });

    const credential = new ClientSecretCredential("tenant", "client", "secret", mockHttp.identityClientOptions);
    await assertRejects(
      credential.getToken("https://test/.default"),
      isExpectedError("unknown_error")
    );
  });
});
