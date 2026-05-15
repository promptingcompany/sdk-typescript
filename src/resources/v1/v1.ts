// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as AnalyticsAPI from './analytics';
import { Analytics, AnalyticsCreateEventParams, AnalyticsCreateEventResponse } from './analytics';

export class V1 extends APIResource {
  analytics: AnalyticsAPI.Analytics = new AnalyticsAPI.Analytics(this._client);
}

V1.Analytics = Analytics;

export declare namespace V1 {
  export {
    Analytics as Analytics,
    type AnalyticsCreateEventResponse as AnalyticsCreateEventResponse,
    type AnalyticsCreateEventParams as AnalyticsCreateEventParams,
  };
}
