/**
 * This file was auto-generated from our API Definition.
 */

import * as Polytomic from "../index";

export interface ModelSyncResponse {
    active?: boolean;
    created_at?: string;
    created_by?: Polytomic.CommonOutputActor;
    fields?: Polytomic.ModelSyncField[];
    filter_logic?: string;
    filters?: Polytomic.Filter[];
    id?: string;
    identity?: Polytomic.Identity;
    mode?: string;
    name?: string;
    organization_id?: string;
    override_fields?: Polytomic.ModelSyncField[];
    overrides?: Polytomic.Override[];
    policies?: string[];
    schedule?: Polytomic.Schedule;
    sync_all_records?: boolean;
    target?: Polytomic.Target;
    updated_at?: string;
    updated_by?: Polytomic.CommonOutputActor;
}
