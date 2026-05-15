// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class Analytics extends APIResource {
  /**
   * Ingest server-side SDK analytics event (page_visit)
   */
  createEvent(
    body: AnalyticsCreateEventParams,
    options?: RequestOptions,
  ): APIPromise<AnalyticsCreateEventResponse> {
    return this._client.post('/api/v1/analytics/events', { body, ...options });
  }
}

export interface AnalyticsCreateEventResponse {
  data: AnalyticsCreateEventResponse.Data;

  ok: true;
}

export namespace AnalyticsCreateEventResponse {
  export interface Data {
    data: Data.Data;

    ok: true;
  }

  export namespace Data {
    export interface Data {
      accepted: true;

      eventId: string;

      receivedAt: string;

      status: 'accepted';
    }
  }
}

export interface AnalyticsCreateEventParams {
  event: 'page_visit';

  page: AnalyticsCreateEventParams.Page;

  anonymousId?: string | null;

  eventId?: string;

  occurredAt?: string;

  properties?: { [key: string]: string | number | boolean | null };

  request?: AnalyticsCreateEventParams.Request;

  sdk?: AnalyticsCreateEventParams.SDK;

  sessionId?: string | null;
}

export namespace AnalyticsCreateEventParams {
  export interface Page {
    href: string;

    canonicalUrl?: string | null;

    domain?: string;

    pathname?: string;

    title?: string | null;
  }

  export interface Request {
    clientIp?: string | null;

    method?: string | null;

    referrer?: string | null;

    userAgent?: string | null;
  }

  export interface SDK {
    name?: string;

    runtime?: string;

    version?: string;
  }
}

export declare namespace Analytics {
  export {
    type AnalyticsCreateEventResponse as AnalyticsCreateEventResponse,
    type AnalyticsCreateEventParams as AnalyticsCreateEventParams,
  };
}
