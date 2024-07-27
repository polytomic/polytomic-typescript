/**
 * This file was auto-generated from our API Definition.
 */

import * as Polytomic from "../index";

export interface SupportedMode {
    id?: Polytomic.SyncMode;
    /** True if the sync mode requires an identity field mapping. */
    requires_identity?: boolean;
    /** True if the target supports per-field sync modes. */
    supports_per_field_mode?: boolean;
    /** True if the sync mode supports target filters. */
    supports_target_filters?: boolean;
}
