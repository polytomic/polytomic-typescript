/**
 * This file was auto-generated from our API Definition.
 */

import * as Polytomic from "..";

export interface V2ConnectionResponseSchema {
    configuration?: Record<string, unknown>;
    id?: string;
    name?: string;
    organization_id?: string;
    policies?: string[];
    status?: string;
    status_error?: string;
    type?: Polytomic.V2ConnectionTypeSchema;
}
