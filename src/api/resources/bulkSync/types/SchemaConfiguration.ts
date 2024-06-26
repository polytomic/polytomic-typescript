/**
 * This file was auto-generated from our API Definition.
 */

import * as Polytomic from "../../..";

export interface SchemaConfiguration {
    /** Whether the schema is enabled for syncing. */
    enabled?: boolean;
    fields?: Polytomic.V2UpdateBulkSyncRequestSchemasItemEnabledFieldsItem[];
    id?: string;
    partitionKey?: string;
    trackingField?: string;
}
