/**
 * This file was auto-generated from our API Definition.
 */

import * as Polytomic from "../../../..";

/**
 * @example
 *     {
 *         fields: [{
 *                 source: {
 *                     field: "id",
 *                     model_id: "248df4b7-aa70-47b8-a036-33ac447e668d"
 *                 },
 *                 target: "name"
 *             }],
 *         filter_logic: "A and B or C",
 *         identity: {
 *             function: "Equality",
 *             source: {
 *                 field: "id",
 *                 model_id: "248df4b7-aa70-47b8-a036-33ac447e668d"
 *             },
 *             target: "name"
 *         },
 *         mode: "create",
 *         name: "Users Sync",
 *         schedule: {
 *             connection_id: "248df4b7-aa70-47b8-a036-33ac447e668d",
 *             frequency: "daily"
 *         },
 *         sync_all_records: false,
 *         target: {
 *             connection_id: "248df4b7-aa70-47b8-a036-33ac447e668d",
 *             object: "Users"
 *         }
 *     }
 */
export interface UpdateModelSyncRequest {
    active?: boolean;
    fields?: Polytomic.ModelSyncField[];
    filter_logic?: string;
    filters?: Polytomic.Filter[];
    identity?: Polytomic.Identity;
    mode: string;
    name: string;
    organization_id?: string;
    override_fields?: Polytomic.ModelSyncField[];
    overrides?: Polytomic.Override[];
    policies?: string[];
    schedule: Polytomic.Schedule;
    sync_all_records?: boolean;
    target: Polytomic.Target;
}
