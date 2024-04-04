/**
 * This file was auto-generated from our API Definition.
 */

import * as Polytomic from "../../../../../..";

/**
 * @example
 *     {
 *         enabled: true,
 *         partition_key: "email"
 *     }
 */
export interface UpdateBulkSchema {
    enabled?: boolean;
    fields?: Polytomic.BulkField[];
    partition_key?: string;
}
