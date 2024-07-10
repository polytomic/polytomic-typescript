/**
 * This file was auto-generated from our API Definition.
 */

import * as Polytomic from "../../../../../../index";

/**
 * @example
 *     {}
 */
export interface UpdateBulkSchema {
    enabled?: boolean;
    fields?: Polytomic.BulkField[];
    filters?: Polytomic.BulkFilter[];
    partition_key?: string;
}
