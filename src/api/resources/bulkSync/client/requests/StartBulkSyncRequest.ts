/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Polytomic from "../../../../index";

/**
 * @example
 *     {}
 */
export interface StartBulkSyncRequest {
    fetch_mode?: Polytomic.BulkFetchMode;
    resync?: boolean;
    schemas?: string[];
    test?: boolean;
}
