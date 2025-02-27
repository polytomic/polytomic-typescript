/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Polytomic from "../index";

export interface ConnectionResponseSchema {
    /** API calls made to service in the last 24h (supported integrations only). */
    api_calls_last_24_hours?: number;
    configuration?: Record<string, unknown>;
    id?: string;
    name?: string;
    organization_id?: string;
    policies?: string[];
    status?: string;
    status_error?: string;
    type?: Polytomic.ConnectionTypeSchema;
}
