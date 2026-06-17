// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Resources extends APIResource {
  /**
   * Update App resource
   */
  update(
    resourceID: string,
    params: ResourceUpdateParams,
    options?: RequestOptions,
  ): APIPromise<ResourceUpdateResponse> {
    const { appId, ...body } = params;
    return this._client.patch(path`/api/v1/apps/${appId}/resources/${resourceID}`, { body, ...options });
  }
}

export interface ResourceUpdateResponse {
  data: ResourceUpdateResponse.Data;

  ok: true;
}

export namespace ResourceUpdateResponse {
  export interface Data {
    id: string;

    appId: string;

    createdAt: string;

    resourceId: string;

    resourceType: 'product';

    slug: string;

    updatedAt: string;

    deletedAt?: string | null;

    displayName?: string | null;
  }
}

export interface ResourceUpdateParams {
  /**
   * Path param
   */
  appId: string;

  /**
   * Body param
   */
  displayName?: string;

  /**
   * Body param
   */
  slug?: string;
}

export declare namespace Resources {
  export {
    type ResourceUpdateResponse as ResourceUpdateResponse,
    type ResourceUpdateParams as ResourceUpdateParams,
  };
}
