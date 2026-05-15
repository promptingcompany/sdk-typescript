// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as ResourcesAPI from './resources';
import { ResourceUpdateParams, ResourceUpdateResponse, Resources } from './resources';

export class Apps extends APIResource {
  resources: ResourcesAPI.Resources = new ResourcesAPI.Resources(this._client);
}

Apps.Resources = Resources;

export declare namespace Apps {
  export {
    Resources as Resources,
    type ResourceUpdateResponse as ResourceUpdateResponse,
    type ResourceUpdateParams as ResourceUpdateParams,
  };
}
