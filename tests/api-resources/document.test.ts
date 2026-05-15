// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import ThePromptingCompany from '@promptingcompany/sdk';

const client = new ThePromptingCompany({
  apiKey: 'My API Key',
  organizationAPIKey: 'My Organization API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource document', () => {
  // Mock server tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.document.list();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.document.list(
        {
          archivedStatus: 'active',
          domain: 'domain',
          domainId: 'domainId',
          hasContent: true,
          isManual: true,
          orderBy: 'createdAt',
          orderByDirection: 'asc',
          page: 0,
          pageSize: 0,
          pathPrefix: 'pathPrefix',
          productId: 'x',
          productSlug: 'x',
          q: 'q',
          query: 'query',
          status: 'draft',
          type: 'type',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(ThePromptingCompany.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('get', async () => {
    const responsePromise = client.document.get('x');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('getByPath', async () => {
    const responsePromise = client.document.getByPath('x');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
});
