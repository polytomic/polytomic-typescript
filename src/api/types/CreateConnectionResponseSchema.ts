/**
 * This file was auto-generated from our API Definition.
 */

import * as Polytomic from "..";

export interface CreateConnectionResponseSchema {
    /** Code to enter in order to complete connection authentication. */
    auth_code?: string;
    /** URL to visit to complete connection authentication. */
    auth_url?: string;
    configuration?: Record<string, unknown>;
    id?: string;
    name?: string;
    organization_id?: string;
    policies?: string[];
    status?: string;
    status_error?: string;
    type?: Polytomic.ConnectionTypeSchema;
}
