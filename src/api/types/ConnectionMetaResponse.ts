/**
 * This file was auto-generated from our API Definition.
 */

import * as Polytomic from "../index";

export interface ConnectionMetaResponse {
    configuration?: Record<string, Polytomic.ConfigurationValue>;
    items?: Record<string, Polytomic.ConnectionMeta | undefined>;
    requires_one_of?: string[];
}
