/**
 * This file was auto-generated from our API Definition.
 */

import * as Polytomic from "../index";

export interface BulkSchema {
    data_cutoff_timestamp?: string;
    disable_data_cutoff?: boolean;
    enabled?: boolean;
    fields?: Polytomic.BulkField[];
    filters?: Polytomic.BulkFilter[];
    id?: string;
    output_name?: string;
    partition_key?: string;
    tracking_field?: string;
}
