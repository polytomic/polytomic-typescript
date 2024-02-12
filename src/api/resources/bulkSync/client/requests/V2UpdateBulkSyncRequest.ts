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
export interface V2UpdateBulkSyncRequest {
    active?: boolean;
    destination_configuration?: Record<string, unknown>;
    destination_connection_id: string;
    discover?: boolean;
    mode: string;
    name: string;
    organization_id?: string;
    policies?: string[];
    schedule: Polytomic.BulkSchedule;
    source_configuration?: Record<string, unknown>;
    source_connection_id: string;
}
