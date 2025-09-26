// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import type { Tpc } from '../client';

export abstract class APIResource {
  protected _client: Tpc;

  constructor(client: Tpc) {
    this._client = client;
  }
}
