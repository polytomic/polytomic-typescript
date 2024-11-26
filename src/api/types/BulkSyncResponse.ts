/**
 * This file was auto-generated from our API Definition.
 */

import * as Polytomic from "../index";

export interface BulkSyncResponse {
    active?: boolean;
    automatically_add_new_fields?: Polytomic.BulkDiscover;
    automatically_add_new_objects?: Polytomic.BulkDiscover;
    data_cutoff_timestamp?: string;
    /** Destination-specific bulk sync configuration. e.g. output schema name, s3 file format, etc. */
    destination_configuration?: Record<string, unknown>;
    destination_connection_id?: string;
    disable_record_timestamps?: boolean;
    /** DEPRECATED: Use automatically_add_new_objects/automatically_add_new_fields instead */
    discover?: boolean;
    id?: string;
    mode?: string;
    /** Name of the bulk sync */
    name?: string;
    organization_id?: string;
    /** List of permissions policies applied to the bulk sync. */
    policies?: string[];
    schedule?: Polytomic.BulkSchedule;
    /** Source-specific bulk sync configuration. e.g. replication slot name, sync lookback, etc. */
    source_configuration?: Record<string, unknown>;
    source_connection_id?: string;
}
