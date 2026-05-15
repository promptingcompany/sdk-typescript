// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Document extends APIResource {
  /**
   * Get public markdown content by ID
   */
  get(id: string, options?: RequestOptions): APIPromise<DocumentGetResponse> {
    return this._client.get(path`/api/v1/md/${id}`, options);
  }

  /**
   * Get public markdown content by path
   */
  getByPath(path_: string, options?: RequestOptions): APIPromise<DocumentGetByPathResponse> {
    return this._client.get(path`/api/v1/md/by-path/${path_}`, options);
  }
}

export interface DocumentGetResponse {
  data: DocumentGetResponse.Data;

  ok: true;
}

export namespace DocumentGetResponse {
  export interface Data {
    id: string;

    content: string;

    contentType: 'markdown';

    createdAt: string;

    filePath: string;

    isManual: boolean;

    productId: string;

    sourceUrl: string;

    title: string;

    updatedAt: string;

    deletedAt?: string | null;
  }
}

export interface DocumentGetByPathResponse {
  data: DocumentGetByPathResponse.Data;

  ok: true;
}

export namespace DocumentGetByPathResponse {
  export interface Data {
    id: string;

    content: string;

    contentType: 'markdown';

    createdAt: string;

    filePath: string;

    isManual: boolean;

    productId: string;

    sourceUrl: string;

    title: string;

    updatedAt: string;

    deletedAt?: string | null;
  }
}

export declare namespace Document {
  export {
    type DocumentGetResponse as DocumentGetResponse,
    type DocumentGetByPathResponse as DocumentGetByPathResponse,
  };
}
