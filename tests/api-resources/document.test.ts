// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Tpc from '@promptingcompany/tpc';

const client = new Tpc({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource document', () => {
  // Prism tests are disabled
  test.skip('get', async () => {
    const responsePromise = client.document.get('550e8400-e29b-41d4-a716-446655440000');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
});
