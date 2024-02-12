/**
 * This file was auto-generated from our API Definition.
 */

import * as Polytomic from "../../../..";

/**
 * @example
 *     {
 *         destination_connection_id: "248df4b7-aa70-47b8-a036-33ac447e668d",
 *         mode: "mode",
 *         name: "name",
 *         schedule: {
 *             frequency: "frequency"
 *         },
 *         source_connection_id: "248df4b7-aa70-47b8-a036-33ac447e668d"
 *     }
 */
export interface V2CreateBulkSyncRequest {
    active?: boolean;
    automatically_add_new_fields?: boolean;
    automatically_add_new_objects?: boolean;
    destination_configuration?: Record<string, unknown>;
    destination_connection_id: string;
    disable_record_timestamps?: boolean;
    /** DEPRECATED: Use automatically_add_new_objects/automatically_add_new_fields instead */
    discover?: boolean;
    mode: string;
    name: string;
    organization_id?: string;
    policies?: string[];
    schedule: Polytomic.BulkSchedule;
    schemas?: string[];
    source_configuration?: Record<string, unknown>;
    source_connection_id: string;
}
