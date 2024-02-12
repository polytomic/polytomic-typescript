/**
 * This file was auto-generated from our API Definition.
 */

import * as Polytomic from "..";

export interface V2ConnectionMetaResponse {
    configuration?: Record<string, Polytomic.V2ConfigurationValue>;
    items?: Record<string, Polytomic.V2ConnectionMeta | undefined>;
    requires_one_of?: string[];
}
