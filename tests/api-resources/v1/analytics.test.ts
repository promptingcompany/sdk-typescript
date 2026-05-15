// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import ThePromptingCompany from '@promptingcompany/sdk';

const client = new ThePromptingCompany({
  apiKey: 'My API Key',
  organizationAPIKey: 'My Organization API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource analytics', () => {
  // Mock server tests are disabled
  test.skip('createEvent: only required params', async () => {
    const responsePromise = client.v1.analytics.createEvent({
      event: 'page_visit',
      page: { href: 'https://example.com' },
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('createEvent: required and optional params', async () => {
    const response = await client.v1.analytics.createEvent({
      event: 'page_visit',
      page: {
        href: 'https://example.com',
        canonicalUrl: 'https://example.com',
        domain: 'domain',
        pathname: 'pathname',
        title: 'title',
      },
      anonymousId: 'anonymousId',
      eventId: 'x',
      occurredAt: '2019-12-27T18:11:19.117Z',
      properties: { foo: 'string' },
      request: {
        clientIp: 'clientIp',
        method: 'method',
        referrer: 'referrer',
        userAgent: 'userAgent',
      },
      sdk: {
        name: 'name',
        runtime: 'runtime',
        version: 'version',
      },
      sessionId: 'sessionId',
    });
  });
});
