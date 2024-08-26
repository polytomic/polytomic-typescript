/**
 * This file was auto-generated from our API Definition.
 */

import * as Polytomic from "../../../../index";

/**
 * @example
 *     {
 *         active: true,
 *         target_connection_id: "0b155265-c537-44c9-9359-a3ceb468a4da"
 *     }
 */
export interface ModelSyncListRequest {
    active?: boolean;
    mode?: Polytomic.SyncMode;
    target_connection_id?: string;
}
