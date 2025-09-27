// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class V1 extends APIResource {
  /**
   * Retrieves a publicly accessible agentic document by its unique identifier
   *
   * @example
   * ```ts
   * const response =
   *   await client.pub.v1.retrieveAgenticDocument(
   *     '550e8400-e29b-41d4-a716-446655440000',
   *   );
   * ```
   */
  retrieveAgenticDocument(
    id: string,
    options?: RequestOptions,
  ): APIPromise<V1RetrieveAgenticDocumentResponse> {
    return this._client.get(path`/api/pub/v1/md/${id}`, options);
  }
}

export interface V1RetrieveAgenticDocumentResponse {
  /**
   * An agentic document containing processed content
   */
  data?: V1RetrieveAgenticDocumentResponse.Data;

  ok?: boolean;
}

export namespace V1RetrieveAgenticDocumentResponse {
  /**
   * An agentic document containing processed content
   */
  export interface Data {
    /**
     * Unique identifier for the document
     */
    id: string;

    /**
     * ID of the brand this document belongs to
     */
    brandId: string;

    /**
     * Main content of the document
     */
    content: string;

    /**
     * Timestamp when the document was created
     */
    createdAt: string;

    /**
     * File path or slug for the document
     */
    filePath: string;

    /**
     * Original source URL of the document
     */
    sourceUrl: string;

    /**
     * Title of the document
     */
    title: string;

    /**
     * Timestamp when the document was last updated
     */
    updatedAt: string;

    /**
     * Timestamp when the document was soft deleted (null if not deleted)
     */
    deletedAt?: string | null;
  }
}

export declare namespace V1 {
  export { type V1RetrieveAgenticDocumentResponse as V1RetrieveAgenticDocumentResponse };
}
