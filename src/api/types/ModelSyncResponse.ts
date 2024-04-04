/**
 * This file was auto-generated from our API Definition.
 */

import * as Polytomic from "..";

export interface ModelSyncResponse {
    active?: boolean;
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
}
