/**
 * This file was auto-generated from our API Definition.
 */

import * as Polytomic from "../index";

export interface SchemaConfiguration {
    data_cutoff_timestamp?: string;
    /** Whether data cutoff is disabled for this schema. */
    disable_data_cutoff?: boolean;
    /** Whether the schema is enabled for syncing. */
    enabled?: boolean;
    fields?: Polytomic.V2SchemaConfigurationFieldsItem[];
    filters?: Polytomic.BulkFilter[];
    id?: string;
    partition_key?: string;
    tracking_field?: string;
}
