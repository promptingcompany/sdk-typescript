// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import ThePromptingCompany from '@promptingcompany/sdk';

const client = new ThePromptingCompany({
  apiKey: 'My API Key',
  organizationAPIKey: 'My Organization API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource resources', () => {
  // Mock server tests are disabled
  test.skip('update: only required params', async () => {
    const responsePromise = client.v1.apps.resources.update('x', { appId: 'x' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('update: required and optional params', async () => {
    const response = await client.v1.apps.resources.update('x', { appId: 'x', displayName: 'x' });
  });
});
