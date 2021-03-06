let nock = require('nock');

module.exports.testInfo = {}

nock('https://login.microsoftonline.com:443', {"encodedQueryParams":true})
  .post('/azure_tenant_id/oauth2/v2.0/token', "response_type=token&grant_type=client_credentials&client_id=azure_client_id&client_secret=azure_client_secret&scope=https%3A%2F%2Fvault.azure.net%2F.default")
  .reply(200, {"token_type":"Bearer","expires_in":3600,"ext_expires_in":3600,"access_token":"access_token"}, [ 'Cache-Control',
  'no-cache, no-store',
  'Pragma',
  'no-cache',
  'Content-Type',
  'application/json; charset=utf-8',
  'Expires',
  '-1',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'X-Content-Type-Options',
  'nosniff',
  'x-ms-request-id',
  '82774402-cc17-4de1-8ad3-fdf565610d00',
  'P3P',
  'CP="DSP CUR OTPi IND OTRi ONL FIN"',
  'Set-Cookie',
  'fpc=Atm7uFJvAkFIiXLW0icR9Qw_aSJHAQAAALUXmtQOAAAA; expires=Wed, 17-Jul-2019 23:23:07 GMT; path=/; secure; HttpOnly',
  'Set-Cookie',
  'x-ms-gateway-slice=prod; path=/; secure; HttpOnly',
  'Set-Cookie',
  'stsservicecookie=ests; path=/; secure; HttpOnly',
  'Date',
  'Mon, 17 Jun 2019 23:23:06 GMT',
  'Connection',
  'close',
  'Content-Length',
  '1231' ]);


nock('https://keyvault_name.vault.azure.net:443', {"encodedQueryParams":true})
  .post('/keys/CRUDKeyName/create', {"kty":"RSA","attributes":{"nbf":1546300805}})
  .query(true)
  .reply(200, {"key":{"kid":"https://keyvault_name.vault.azure.net/keys/CRUDKeyName/dd01f6e556bd4c0cac7c7b072c373387","kty":"RSA","key_ops":["encrypt","decrypt","sign","verify","wrapKey","unwrapKey"],"n":"tfIYMZ0PO43vqEOjSpVYjchWLt9Y6zNbClH8IBL8drJXhjWDJvfjv1FHGFjrN_B6QuDN7eHQu2I9GjZg-QTCwXu2HO3fx97T5rus5lXPBaY6VqsKt0ZqCIuYcAgvnGDGAQt67y-jzcpGrqjE6lqVBa66UrA0dlRTABnE9Ojh6ggHrWsSRBGXijVZlvocAJ3m1q7JF_8uUrmlBl_kqwE7Pe_6ahXUIH1_OCmUECaZ0HMcxmHqLXn7QSlkh0vkE_rOytSNuwyWnUAIUQ_v1OPQJ1iXTzmhFSASqT2BVaY3l2ZXUn-Cat54wnGh6ZCSbDMKYHzFnfLGjrPvJ232m9KwAQ","e":"AQAB"},"attributes":{"enabled":true,"nbf":1546300805,"created":1560813796,"updated":1560813796,"recoveryLevel":"Recoverable+Purgeable"}}, [ 'Cache-Control',
  'no-cache',
  'Pragma',
  'no-cache',
  'Content-Type',
  'application/json; charset=utf-8',
  'Expires',
  '-1',
  'Server',
  'Microsoft-IIS/10.0',
  'x-ms-keyvault-region',
  'westus',
  'x-ms-request-id',
  'ed9fd455-d9c3-4fb1-a049-a33f9a1cd8ef',
  'x-ms-keyvault-service-version',
  '1.1.0.866',
  'x-ms-keyvault-network-info',
  'addr=108.226.109.105;act_addr_fam=InterNetwork;',
  'X-AspNet-Version',
  '4.0.30319',
  'X-Powered-By',
  'ASP.NET',
  'Strict-Transport-Security',
  'max-age=31536000;includeSubDomains',
  'X-Content-Type-Options',
  'nosniff',
  'Date',
  'Mon, 17 Jun 2019 23:23:15 GMT',
  'Connection',
  'close',
  'Content-Length',
  '674' ]);


nock('https://login.microsoftonline.com:443', {"encodedQueryParams":true})
  .post('/azure_tenant_id/oauth2/v2.0/token', "response_type=token&grant_type=client_credentials&client_id=azure_client_id&client_secret=azure_client_secret&scope=https%3A%2F%2Fvault.azure.net%2F.default")
  .reply(200, {"token_type":"Bearer","expires_in":3599,"ext_expires_in":3599,"access_token":"access_token"}, [ 'Cache-Control',
  'no-cache, no-store',
  'Pragma',
  'no-cache',
  'Content-Type',
  'application/json; charset=utf-8',
  'Expires',
  '-1',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'X-Content-Type-Options',
  'nosniff',
  'x-ms-request-id',
  '0a11764d-ca49-44ec-836f-60b9b0e60b00',
  'P3P',
  'CP="DSP CUR OTPi IND OTRi ONL FIN"',
  'Set-Cookie',
  'fpc=Atm7uFJvAkFIiXLW0icR9Qw_aSJHAgAAALUXmtQOAAAA; expires=Wed, 17-Jul-2019 23:23:21 GMT; path=/; secure; HttpOnly',
  'Set-Cookie',
  'x-ms-gateway-slice=prod; path=/; secure; HttpOnly',
  'Set-Cookie',
  'stsservicecookie=ests; path=/; secure; HttpOnly',
  'Date',
  'Mon, 17 Jun 2019 23:23:21 GMT',
  'Connection',
  'close',
  'Content-Length',
  '1231' ]);


nock('https://keyvault_name.vault.azure.net:443', {"encodedQueryParams":true})
  .delete('/keys/CRUDKeyName')
  .query(true)
  .reply(200, {"recoveryId":"https://keyvault_name.vault.azure.net/deletedkeys/CRUDKeyName","deletedDate":1560813807,"scheduledPurgeDate":1568589807,"key":{"kid":"https://keyvault_name.vault.azure.net/keys/CRUDKeyName/dd01f6e556bd4c0cac7c7b072c373387","kty":"RSA","key_ops":["encrypt","decrypt","sign","verify","wrapKey","unwrapKey"],"n":"tfIYMZ0PO43vqEOjSpVYjchWLt9Y6zNbClH8IBL8drJXhjWDJvfjv1FHGFjrN_B6QuDN7eHQu2I9GjZg-QTCwXu2HO3fx97T5rus5lXPBaY6VqsKt0ZqCIuYcAgvnGDGAQt67y-jzcpGrqjE6lqVBa66UrA0dlRTABnE9Ojh6ggHrWsSRBGXijVZlvocAJ3m1q7JF_8uUrmlBl_kqwE7Pe_6ahXUIH1_OCmUECaZ0HMcxmHqLXn7QSlkh0vkE_rOytSNuwyWnUAIUQ_v1OPQJ1iXTzmhFSASqT2BVaY3l2ZXUn-Cat54wnGh6ZCSbDMKYHzFnfLGjrPvJ232m9KwAQ","e":"AQAB"},"attributes":{"enabled":true,"nbf":1546300805,"created":1560813796,"updated":1560813796,"recoveryLevel":"Recoverable+Purgeable"}}, [ 'Cache-Control',
  'no-cache',
  'Pragma',
  'no-cache',
  'Content-Type',
  'application/json; charset=utf-8',
  'Expires',
  '-1',
  'Server',
  'Microsoft-IIS/10.0',
  'x-ms-keyvault-region',
  'westus',
  'x-ms-request-id',
  '5ac70523-f526-426b-b959-b6066985923c',
  'x-ms-keyvault-service-version',
  '1.1.0.866',
  'x-ms-keyvault-network-info',
  'addr=108.226.109.105;act_addr_fam=InterNetwork;',
  'X-AspNet-Version',
  '4.0.30319',
  'X-Powered-By',
  'ASP.NET',
  'Strict-Transport-Security',
  'max-age=31536000;includeSubDomains',
  'X-Content-Type-Options',
  'nosniff',
  'Date',
  'Mon, 17 Jun 2019 23:23:27 GMT',
  'Connection',
  'close',
  'Content-Length',
  '806' ]);


nock('https://login.microsoftonline.com:443', {"encodedQueryParams":true})
  .post('/azure_tenant_id/oauth2/v2.0/token', "response_type=token&grant_type=client_credentials&client_id=azure_client_id&client_secret=azure_client_secret&scope=https%3A%2F%2Fvault.azure.net%2F.default")
  .reply(200, {"token_type":"Bearer","expires_in":3600,"ext_expires_in":3600,"access_token":"access_token"}, [ 'Cache-Control',
  'no-cache, no-store',
  'Pragma',
  'no-cache',
  'Content-Type',
  'application/json; charset=utf-8',
  'Expires',
  '-1',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'X-Content-Type-Options',
  'nosniff',
  'x-ms-request-id',
  '1d88f06b-a0ca-47bc-afb2-ae9f6beb0d00',
  'P3P',
  'CP="DSP CUR OTPi IND OTRi ONL FIN"',
  'Set-Cookie',
  'fpc=Atm7uFJvAkFIiXLW0icR9Qw_aSJHAwAAALUXmtQOAAAA; expires=Wed, 17-Jul-2019 23:24:03 GMT; path=/; secure; HttpOnly',
  'Set-Cookie',
  'x-ms-gateway-slice=prod; path=/; secure; HttpOnly',
  'Set-Cookie',
  'stsservicecookie=ests; path=/; secure; HttpOnly',
  'Date',
  'Mon, 17 Jun 2019 23:24:02 GMT',
  'Connection',
  'close',
  'Content-Length',
  '1231' ]);


nock('https://keyvault_name.vault.azure.net:443', {"encodedQueryParams":true})
  .delete('/deletedkeys/CRUDKeyName')
  .query(true)
  .reply(204, "", [ 'Cache-Control',
  'no-cache',
  'Pragma',
  'no-cache',
  'Expires',
  '-1',
  'Server',
  'Microsoft-IIS/10.0',
  'x-ms-keyvault-region',
  'westus',
  'x-ms-request-id',
  '40d2e978-9583-4cf7-b6a7-ee84d54ce75c',
  'x-ms-keyvault-service-version',
  '1.1.0.866',
  'x-ms-keyvault-network-info',
  'addr=108.226.109.105;act_addr_fam=InterNetwork;',
  'X-AspNet-Version',
  '4.0.30319',
  'X-Powered-By',
  'ASP.NET',
  'Strict-Transport-Security',
  'max-age=31536000;includeSubDomains',
  'X-Content-Type-Options',
  'nosniff',
  'Date',
  'Mon, 17 Jun 2019 23:24:09 GMT',
  'Connection',
  'close' ]);

