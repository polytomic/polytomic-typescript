/**
 * This file was auto-generated from our API Definition.
 */

import * as Polytomic from "../index";

export interface ModelSyncField {
    /** New is set to true if the target field should be created by Polytomic. This is not supported by all backends. */
    new?: boolean;
    /** Value to set in the target field; if provided, 'source' is ignored. */
    override_value?: string;
    source?: Polytomic.Source;
    /** Sync mode for the field; defaults to 'updateOrCreate'. If set to 'create', the field will not be synced if it already has a value. This is not supported by all backends. */
    sync_mode?: string;
    /** Target field ID the source field value will be written to. */
    target: string;
}
