/**
 * This file was auto-generated from our API Definition.
 */

import * as Polytomic from "..";

export interface BulkSyncStatusResponse {
    current_execution?: Polytomic.BulkSyncExecution;
    last_execution?: Polytomic.BulkSyncExecution;
    next_execution_time?: string;
}
