/**
 * This file was auto-generated from our API Definition.
 */

import * as Polytomic from "..";

export interface V2BulkSyncResponse {
    active?: boolean;
    destination_configuration?: Record<string, unknown>;
    destination_connection_id?: string;
    discover?: boolean;
    id?: string;
    mode?: string;
    name?: string;
    organization_id?: string;
    policies?: string[];
    schedule?: Polytomic.BulkSchedule;
    source_configuration?: Record<string, unknown>;
    source_connection_id?: string;
}
