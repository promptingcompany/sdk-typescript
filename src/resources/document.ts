// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Document extends APIResource {
  /**
   * List pages for a product. You must provide exactly one of `productId` or
   * `productSlug` as a query parameter to identify the target product.
   */
  list(
    query: DocumentListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<DocumentListResponse> {
    return this._client.get('/api/v1/site/pages', { query, ...options });
  }

  /**
   * Retrieves public markdown content by ID. Supports standard x-api-key
   * authentication (productId/productSlug via query param or X-Tpc-Product-_ headers
   * as fallback) as well as the legacy X-Tpc-_ header model.
   */
  get(id: string, options?: RequestOptions): APIPromise<DocumentGetResponse> {
    return this._client.get(path`/api/v1/md/${id}`, options);
  }

  /**
   * Retrieves public markdown content by file path. Supports standard x-api-key
   * authentication (productId/productSlug via query param or X-Tpc-Product-_ headers
   * as fallback) as well as the legacy X-Tpc-_ header model.
   */
  getByPath(path_: string, options?: RequestOptions): APIPromise<DocumentGetByPathResponse> {
    return this._client.get(path`/api/v1/md/by-path/${path_}`, options);
  }
}

export interface DocumentListResponse {
  data: DocumentListResponse.Data;

  ok: true;
}

export namespace DocumentListResponse {
  export interface Data {
    archivedStatus: 'active' | 'archived' | 'all';

    domain: string | null;

    domainId: string | null;

    hasContent: boolean | null;

    isManual: boolean | null;

    items: Array<Data.Item>;

    orderBy: 'createdAt' | 'updatedAt' | 'deletedAt';

    orderByDirection: 'asc' | 'desc';

    page: number;

    pageSize: number;

    pathPrefix: string | null;

    query: string | null;

    scope: Data.Scope;

    status: string | null;

    total: number;

    totalPages: number;

    type: string | null;
  }

  export namespace Data {
    export interface Item {
      id: string;

      createdAt: string;

      deletedAt: string | null;

      domains: Array<Item.Domain>;

      filePath: string;

      isManual: boolean;

      metaDescription: string | null;

      metaTitle: string | null;

      publishedAt: string | null;

      sourceUrl: string;

      status: string;

      title: string;

      type: string;

      updatedAt: string;
    }

    export namespace Item {
      export interface Domain {
        id: string;

        domain: string;

        isCanonical: boolean;
      }
    }

    export interface Scope {
      organization: Scope.Organization;

      product: Scope.Product;
    }

    export namespace Scope {
      export interface Organization {
        id: string;

        name: string;

        slug: string;
      }

      export interface Product {
        id: string;

        name: string;

        slug: string | null;
      }
    }
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

export interface DocumentListParams {
  archivedStatus?: 'active' | 'archived' | 'all';

  domain?: string;

  domainId?: string;

  hasContent?: boolean;

  isManual?: boolean;

  orderBy?: 'createdAt' | 'updatedAt' | 'deletedAt';

  orderByDirection?: 'asc' | 'desc';

  page?: number;

  pageSize?: number;

  pathPrefix?: string;

  /**
   * Product ID. Provide exactly one of `productId` or `productSlug` (the server
   * enforces this at runtime).
   */
  productId?: string;

  /**
   * Product slug. Provide exactly one of `productId` or `productSlug` (the server
   * enforces this at runtime).
   */
  productSlug?: string;

  q?: string;

  query?: string;

  status?: 'draft' | 'published';

  type?: string;
}

export declare namespace Document {
  export {
    type DocumentListResponse as DocumentListResponse,
    type DocumentGetResponse as DocumentGetResponse,
    type DocumentGetByPathResponse as DocumentGetByPathResponse,
    type DocumentListParams as DocumentListParams,
  };
}
