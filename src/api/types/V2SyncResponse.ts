/**
 * This file was auto-generated from our API Definition.
 */

import * as Polytomic from "..";

export interface V2SyncResponse {
    active?: boolean;
    fields?: Polytomic.V2SyncField[];
    filter_logic?: string;
    filters?: Polytomic.V2Filter[];
    id?: string;
    identity?: Polytomic.V2Identity;
    mode?: string;
    name?: string;
    organization_id?: string;
    override_fields?: Polytomic.V2SyncField[];
    overrides?: Polytomic.V2Override[];
    policies?: string[];
    schedule?: Polytomic.V2Schedule;
    sync_all_records?: boolean;
    target?: Polytomic.V2Target;
}
