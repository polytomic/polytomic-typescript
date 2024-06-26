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
 *         mode: "create",
 *         name: "Users Sync",
 *         schedule: {},
 *         target: {
 *             connection_id: "248df4b7-aa70-47b8-a036-33ac447e668d",
 *             object: "Users"
 *         }
 *     }
 */
export interface CreateModelSyncRequest {
    active?: boolean;
    enricher?: Polytomic.Enrichment;
    fields: Polytomic.ModelSyncField[];
    filter_logic?: string;
    filters?: Polytomic.Filter[];
    identity?: Polytomic.Identity;
    mode: string;
    name: string;
    organization_id?: string;
    /** Values to set as sync target fields. */
    override_fields?: Polytomic.ModelSyncField[];
    /** Conditional value replacement for field mappings. */
    overrides?: Polytomic.Override[];
    policies?: string[];
    schedule: Polytomic.Schedule;
    sync_all_records?: boolean;
    target: Polytomic.Target;
}
