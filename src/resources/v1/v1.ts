// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as AnalyticsAPI from './analytics';
import { Analytics, AnalyticsCreateEventParams, AnalyticsCreateEventResponse } from './analytics';
import * as AppsAPI from './apps/apps';
import { Apps } from './apps/apps';

export class V1 extends APIResource {
  analytics: AnalyticsAPI.Analytics = new AnalyticsAPI.Analytics(this._client);
  apps: AppsAPI.Apps = new AppsAPI.Apps(this._client);
}

V1.Analytics = Analytics;
V1.Apps = Apps;

export declare namespace V1 {
  export {
    Analytics as Analytics,
    type AnalyticsCreateEventResponse as AnalyticsCreateEventResponse,
    type AnalyticsCreateEventParams as AnalyticsCreateEventParams,
  };

  export { Apps as Apps };
}
