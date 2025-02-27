/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Polytomic from "../../../../index";

/**
 * @example
 *     {
 *         destination_connection_id: "248df4b7-aa70-47b8-a036-33ac447e668d",
 *         name: "My Bulk Sync",
 *         schedule: {
 *             frequency: Polytomic.ScheduleFrequency.Manual
 *         },
 *         source_connection_id: "248df4b7-aa70-47b8-a036-33ac447e668d"
 *     }
 */
export interface UpdateBulkSyncRequest {
    active?: boolean;
    automatically_add_new_fields?: Polytomic.BulkDiscover;
    automatically_add_new_objects?: Polytomic.BulkDiscover;
    data_cutoff_timestamp?: string;
    destination_configuration?: Record<string, unknown>;
    destination_connection_id: string;
    disable_record_timestamps?: boolean;
    /** DEPRECATED: Use automatically_add_new_objects/automatically_add_new_fields instead */
    discover?: boolean;
    mode?: Polytomic.SyncMode;
    name: string;
    organization_id?: string;
    policies?: string[];
    schedule: Polytomic.BulkSchedule;
    /** List of schemas to sync; if omitted, all schemas will be selected for syncing. */
    schemas?: Polytomic.V2UpdateBulkSyncRequestSchemasItem[];
    source_configuration?: Record<string, unknown>;
    source_connection_id: string;
}
