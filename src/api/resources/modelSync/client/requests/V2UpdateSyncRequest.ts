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
 *             function: "function",
 *             source: {
 *                 field: "id",
 *                 model_id: "248df4b7-aa70-47b8-a036-33ac447e668d"
 *             },
 *             target: "name"
 *         },
 *         mode: Polytomic.V2UpdateSyncRequestMode.Update,
 *         name: "Users Sync",
 *         schedule: {},
 *         target: {
 *             connection_id: "248df4b7-aa70-47b8-a036-33ac447e668d",
 *             object: "Users"
 *         }
 *     }
 */
export interface V2UpdateSyncRequest {
    active?: boolean;
    fields?: Polytomic.V2SyncField[];
    filter_logic?: string;
    filters?: Polytomic.V2Filter[];
    identity?: Polytomic.V2Identity;
    mode: Polytomic.V2UpdateSyncRequestMode;
    name: string;
    organization_id?: string;
    override_fields?: Polytomic.V2SyncField[];
    overrides?: Polytomic.V2Override[];
    policies?: string[];
    schedule: Polytomic.V2Schedule;
    sync_all_records?: boolean;
    target: Polytomic.V2Target;
}
