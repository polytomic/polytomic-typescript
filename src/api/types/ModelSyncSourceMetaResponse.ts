/**
 * This file was auto-generated from our API Definition.
 */

import * as Polytomic from "../index";

export interface ModelSyncSourceMetaResponse {
    configuration?: Record<string, Polytomic.ConfigurationValue>;
    items?: Record<string, Polytomic.SourceMeta | undefined>;
    requires_one_of?: string[];
}
