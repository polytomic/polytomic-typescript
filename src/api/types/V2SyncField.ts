/**
 * This file was auto-generated from our API Definition.
 */

import * as Polytomic from "..";

export interface V2SyncField {
    new?: boolean;
    override_value?: string;
    source: Polytomic.V2Source;
    sync_mode?: string;
    target: string;
}
