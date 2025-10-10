// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Document extends APIResource {
  /**
   * Retrieves a publicly accessible agentic document by its unique identifier.
   *
   * **Header Requirements:**
   *
   * - Either `X-Tpc-Organization-Id` OR `X-Tpc-Organization-Slug` must be provided
   * - Either `X-Tpc-Product-Id` OR `X-Tpc-Product-Slug` must be provided
   *
   * Valid combinations:
   *
   * - (X-Tpc-Organization-Id, X-Tpc-Product-Id)
   * - (X-Tpc-Organization-Id, X-Tpc-Product-Slug)
   * - (X-Tpc-Organization-Slug, X-Tpc-Product-Id)
   * - (X-Tpc-Organization-Slug, X-Tpc-Product-Slug)
   *
   * @example
   * ```ts
   * const document = await client.document.get(
   *   '550e8400-e29b-41d4-a716-446655440000',
   * );
   * ```
   */
  get(id: string, options?: RequestOptions): APIPromise<DocumentGetResponse> {
    return this._client.get(path`/api/pub/v1/md/${id}`, options);
  }

  /**
   * Retrieves a publicly accessible agentic document by its file path (slug).
   *
   * **Path Behavior:**
   *
   * - Supports both empty paths and specific file paths
   * - Only uses the first path segment for lookup
   * - Examples: `/api/pub/v1/md/by-path/` or
   *   `/api/pub/v1/md/by-path/getting-started`
   *
   * **Header Requirements:**
   *
   * - Either `X-Tpc-Organization-Id` OR `X-Tpc-Organization-Slug` must be provided
   * - Either `X-Tpc-Product-Id` OR `X-Tpc-Product-Slug` must be provided
   *
   * Valid combinations:
   *
   * - (X-Tpc-Organization-Id, X-Tpc-Product-Id)
   * - (X-Tpc-Organization-Id, X-Tpc-Product-Slug)
   * - (X-Tpc-Organization-Slug, X-Tpc-Product-Id)
   * - (X-Tpc-Organization-Slug, X-Tpc-Product-Slug)
   *
   * @example
   * ```ts
   * const response = await client.document.getByPath(
   *   'getting-started',
   * );
   * ```
   */
  getByPath(path_: string, options?: RequestOptions): APIPromise<DocumentGetByPathResponse> {
    return this._client.get(path`/api/pub/v1/md/by-path/${path_}`, options);
  }
}

export interface DocumentGetResponse {
  data?: DocumentGetResponse.Data;

  ok?: boolean;
}

export namespace DocumentGetResponse {
  export interface Data {
    /**
     * Unique identifier for the agentic document
     */
    id: string;

    /**
     * ID of the brand this document belongs to
     */
    brandId: string;

    /**
     * Main content of the document in markdown format
     */
    content: string;

    /**
     * Timestamp when the document was created
     */
    createdAt: string;

    /**
     * File path alias used as slug for the document
     */
    filePath: string;

    /**
     * Whether this document was manually created or automatically scraped
     */
    isManual: boolean;

    /**
     * Original source URL where the content was scraped from
     */
    sourceUrl: string;

    /**
     * Title of the agentic document
     */
    title: string;

    /**
     * Type classification of the document
     */
    type: 'shadow' | 'manual' | 'scraped';

    /**
     * Timestamp when the document was last updated
     */
    updatedAt: string;

    /**
     * Canonical URL for duplicate content management
     */
    canonicalUrl?: string | null;

    /**
     * CSS selector for elements to exclude during scraping
     */
    cssExcludeSelector?: string | null;

    /**
     * CSS selector used for content extraction during scraping
     */
    cssSelector?: string | null;

    /**
     * Timestamp when the document was soft deleted (null if not deleted)
     */
    deletedAt?: string | null;

    /**
     * Short description or summary of the document
     */
    description?: string | null;

    /**
     * Special description intended for AI agent processing
     */
    descriptionForAgent?: string | null;

    /**
     * URL of the featured image for the document
     */
    image?: string | null;

    /**
     * Timestamp when the document was last indexed for search
     */
    lastIndexedAt?: string | null;

    /**
     * Additional SEO metadata or structured data (schema.org)
     */
    metadata?: unknown | null;

    /**
     * Custom meta description for SEO optimization
     */
    metaDescription?: string | null;

    /**
     * Custom HTML title tag for SEO optimization
     */
    metaTitle?: string | null;

    /**
     * Whether to add noindex meta tag for search engines
     */
    noIndex?: boolean | null;

    /**
     * Open Graph description for social media sharing
     */
    ogDescription?: string | null;

    /**
     * Open Graph image URL for social media sharing
     */
    ogImage?: string | null;

    /**
     * Open Graph title for social media sharing
     */
    ogTitle?: string | null;

    /**
     * Checksum of the source content for change detection
     */
    sourceChecksum?: string | null;

    /**
     * TipTap editor JSON content representation
     */
    tiptapJson?: unknown | null;

    /**
     * Twitter card description for Twitter sharing
     */
    twitterDescription?: string | null;

    /**
     * Twitter card image URL for Twitter sharing
     */
    twitterImage?: string | null;

    /**
     * Twitter card title for Twitter sharing
     */
    twitterTitle?: string | null;
  }
}

export interface DocumentGetByPathResponse {
  data?: DocumentGetByPathResponse.Data;

  ok?: boolean;
}

export namespace DocumentGetByPathResponse {
  export interface Data {
    /**
     * Unique identifier for the agentic document
     */
    id: string;

    /**
     * ID of the brand this document belongs to
     */
    brandId: string;

    /**
     * Main content of the document in markdown format
     */
    content: string;

    /**
     * Timestamp when the document was created
     */
    createdAt: string;

    /**
     * File path alias used as slug for the document
     */
    filePath: string;

    /**
     * Whether this document was manually created or automatically scraped
     */
    isManual: boolean;

    /**
     * Original source URL where the content was scraped from
     */
    sourceUrl: string;

    /**
     * Title of the agentic document
     */
    title: string;

    /**
     * Type classification of the document
     */
    type: 'shadow' | 'manual' | 'scraped';

    /**
     * Timestamp when the document was last updated
     */
    updatedAt: string;

    /**
     * Canonical URL for duplicate content management
     */
    canonicalUrl?: string | null;

    /**
     * CSS selector for elements to exclude during scraping
     */
    cssExcludeSelector?: string | null;

    /**
     * CSS selector used for content extraction during scraping
     */
    cssSelector?: string | null;

    /**
     * Timestamp when the document was soft deleted (null if not deleted)
     */
    deletedAt?: string | null;

    /**
     * Short description or summary of the document
     */
    description?: string | null;

    /**
     * Special description intended for AI agent processing
     */
    descriptionForAgent?: string | null;

    /**
     * URL of the featured image for the document
     */
    image?: string | null;

    /**
     * Timestamp when the document was last indexed for search
     */
    lastIndexedAt?: string | null;

    /**
     * Additional SEO metadata or structured data (schema.org)
     */
    metadata?: unknown | null;

    /**
     * Custom meta description for SEO optimization
     */
    metaDescription?: string | null;

    /**
     * Custom HTML title tag for SEO optimization
     */
    metaTitle?: string | null;

    /**
     * Whether to add noindex meta tag for search engines
     */
    noIndex?: boolean | null;

    /**
     * Open Graph description for social media sharing
     */
    ogDescription?: string | null;

    /**
     * Open Graph image URL for social media sharing
     */
    ogImage?: string | null;

    /**
     * Open Graph title for social media sharing
     */
    ogTitle?: string | null;

    /**
     * Checksum of the source content for change detection
     */
    sourceChecksum?: string | null;

    /**
     * TipTap editor JSON content representation
     */
    tiptapJson?: unknown | null;

    /**
     * Twitter card description for Twitter sharing
     */
    twitterDescription?: string | null;

    /**
     * Twitter card image URL for Twitter sharing
     */
    twitterImage?: string | null;

    /**
     * Twitter card title for Twitter sharing
     */
    twitterTitle?: string | null;
  }
}

export declare namespace Document {
  export {
    type DocumentGetResponse as DocumentGetResponse,
    type DocumentGetByPathResponse as DocumentGetByPathResponse,
  };
}
