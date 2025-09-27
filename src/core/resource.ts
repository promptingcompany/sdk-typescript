// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import type { ThePromptingCompany } from '../client';

export abstract class APIResource {
  protected _client: ThePromptingCompany;

  constructor(client: ThePromptingCompany) {
    this._client = client;
  }
}
