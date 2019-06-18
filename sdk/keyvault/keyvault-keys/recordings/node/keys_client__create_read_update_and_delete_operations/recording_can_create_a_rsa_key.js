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
  '4a41f8d1-9b19-4f3e-8382-f921acc76e00',
  'P3P',
  'CP="DSP CUR OTPi IND OTRi ONL FIN"',
  'Set-Cookie',
  'fpc=Atm7uFJvAkFIiXLW0icR9Qw_aSJHBgAAAF0VmtQOAAAA; expires=Wed, 17-Jul-2019 23:14:46 GMT; path=/; secure; HttpOnly',
  'Set-Cookie',
  'x-ms-gateway-slice=prod; path=/; secure; HttpOnly',
  'Set-Cookie',
  'stsservicecookie=ests; path=/; secure; HttpOnly',
  'Date',
  'Mon, 17 Jun 2019 23:14:45 GMT',
  'Connection',
  'close',
  'Content-Length',
  '1231' ]);


nock('https://keyvault_name.vault.azure.net:443', {"encodedQueryParams":true})
  .post('/keys/CRUDKeyName/create', {"kty":"RSA"})
  .query(true)
  .reply(200, {"key":{"kid":"https://keyvault_name.vault.azure.net/keys/CRUDKeyName/85a8a8602d9645cda6dff09e1968e156","kty":"RSA","key_ops":["encrypt","decrypt","sign","verify","wrapKey","unwrapKey"],"n":"uFnA_SDT7SlGcMNrrMAcpveQMDmJ7BUyS_W4B0wsImPNt5xR7Vn-4S2_RFZGQmte_lMgrhb8Pm0UuflJnUnQc_ao-UM7ORZcEbI0X55Lo0sW4P7E7tesZc1RL4DPEMw1-wtxhepsa6DCRNl-n2wpODjDm95mr0npWQ-QVk6ghJ1peDkky2o52yb2H58niz3LKw_4FVMJehfpCQuryx6DJ94mSzzH1qggc8O2y0Xm5wM6FgkU4sZX6M6H2ixZPiHSuYQd8YiImps7mYcD5oLh3kEyZhllANtlUhIa3W9PPSTswgmkaLaj_ROMougLVPAwCoYdb_O2kvCXs3txrK9YKQ","e":"AQAB"},"attributes":{"enabled":true,"created":1560813293,"updated":1560813293,"recoveryLevel":"Recoverable+Purgeable"}}, [ 'Cache-Control',
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
  'c9830fb9-0031-4f06-85e6-9634d10cc622',
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
  'Mon, 17 Jun 2019 23:14:53 GMT',
  'Connection',
  'close',
  'Content-Length',
  '657' ]);


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
  'db29be9c-59d5-42d8-be29-026b64300a00',
  'P3P',
  'CP="DSP CUR OTPi IND OTRi ONL FIN"',
  'Set-Cookie',
  'fpc=Atm7uFJvAkFIiXLW0icR9Qw_aSJHBwAAAF0VmtQOAAAA; expires=Wed, 17-Jul-2019 23:14:58 GMT; path=/; secure; HttpOnly',
  'Set-Cookie',
  'x-ms-gateway-slice=prod; path=/; secure; HttpOnly',
  'Set-Cookie',
  'stsservicecookie=ests; path=/; secure; HttpOnly',
  'Date',
  'Mon, 17 Jun 2019 23:14:58 GMT',
  'Connection',
  'close',
  'Content-Length',
  '1231' ]);


nock('https://keyvault_name.vault.azure.net:443', {"encodedQueryParams":true})
  .delete('/keys/CRUDKeyName')
  .query(true)
  .reply(200, {"recoveryId":"https://keyvault_name.vault.azure.net/deletedkeys/CRUDKeyName","deletedDate":1560813306,"scheduledPurgeDate":1568589306,"key":{"kid":"https://keyvault_name.vault.azure.net/keys/CRUDKeyName/85a8a8602d9645cda6dff09e1968e156","kty":"RSA","key_ops":["encrypt","decrypt","sign","verify","wrapKey","unwrapKey"],"n":"uFnA_SDT7SlGcMNrrMAcpveQMDmJ7BUyS_W4B0wsImPNt5xR7Vn-4S2_RFZGQmte_lMgrhb8Pm0UuflJnUnQc_ao-UM7ORZcEbI0X55Lo0sW4P7E7tesZc1RL4DPEMw1-wtxhepsa6DCRNl-n2wpODjDm95mr0npWQ-QVk6ghJ1peDkky2o52yb2H58niz3LKw_4FVMJehfpCQuryx6DJ94mSzzH1qggc8O2y0Xm5wM6FgkU4sZX6M6H2ixZPiHSuYQd8YiImps7mYcD5oLh3kEyZhllANtlUhIa3W9PPSTswgmkaLaj_ROMougLVPAwCoYdb_O2kvCXs3txrK9YKQ","e":"AQAB"},"attributes":{"enabled":true,"created":1560813293,"updated":1560813293,"recoveryLevel":"Recoverable+Purgeable"}}, [ 'Cache-Control',
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
  'e8b62f6d-f70f-4fbc-9a40-f0e2430c4b85',
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
  'Mon, 17 Jun 2019 23:15:06 GMT',
  'Connection',
  'close',
  'Content-Length',
  '789' ]);


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
  'aa052168-d4e4-488e-98dd-184fa1510d00',
  'P3P',
  'CP="DSP CUR OTPi IND OTRi ONL FIN"',
  'Set-Cookie',
  'fpc=Atm7uFJvAkFIiXLW0icR9Qw_aSJHCAAAAF0VmtQOAAAA; expires=Wed, 17-Jul-2019 23:15:41 GMT; path=/; secure; HttpOnly',
  'Set-Cookie',
  'x-ms-gateway-slice=prod; path=/; secure; HttpOnly',
  'Set-Cookie',
  'stsservicecookie=ests; path=/; secure; HttpOnly',
  'Date',
  'Mon, 17 Jun 2019 23:15:41 GMT',
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
  'a168c57a-3ccd-4876-995d-00efb5a5873d',
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
  'Mon, 17 Jun 2019 23:15:50 GMT',
  'Connection',
  'close' ]);

