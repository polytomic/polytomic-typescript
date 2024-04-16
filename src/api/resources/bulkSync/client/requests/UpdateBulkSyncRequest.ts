/**
 * This file was auto-generated from our API Definition.
 */

import * as Polytomic from "../../../..";

/**
 * @example
 *     {
 *         destination_connection_id: "248df4b7-aa70-47b8-a036-33ac447e668d",
 *         mode: "replicate",
 *         name: "My Bulk Sync",
 *         schedule: {
 *             day_of_month: "1",
 *             day_of_week: "monday",
 *             frequency: Polytomic.ScheduleFrequency.Manual,
 *             hour: "0",
 *             minute: "0",
 *             month: "1"
 *         },
 *         source_connection_id: "248df4b7-aa70-47b8-a036-33ac447e668d"
 *     }
 */
export interface UpdateBulkSyncRequest {
    active?: boolean;
    automatically_add_new_fields?: Polytomic.BulkDiscover;
    automatically_add_new_objects?: Polytomic.BulkDiscover;
    destination_configuration?: Record<string, unknown>;
    destination_connection_id: string;
    disable_record_timestamps?: boolean;
    /** DEPRECATED: Use automatically_add_new_objects/automatically_add_new_fields instead */
    discover?: boolean;
    /** */
    mode?: string;
    name: string;
    organization_id?: string;
    policies?: string[];
    schedule: Polytomic.BulkSchedule;
    schemas?: string[];
    source_configuration?: Record<string, unknown>;
    source_connection_id: string;
}