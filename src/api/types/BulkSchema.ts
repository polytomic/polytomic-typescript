/**
 * This file was auto-generated from our API Definition.
 */

import * as Polytomic from "..";

export interface BulkSchema {
    enabled?: boolean;
    fields?: Polytomic.BulkField[];
    filters?: Polytomic.BulkFilter[];
    id?: string;
    output_name?: string;
    partition_key?: string;
}
