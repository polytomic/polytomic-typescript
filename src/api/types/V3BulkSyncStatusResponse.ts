/**
 * This file was auto-generated from our API Definition.
 */

import * as Polytomic from "..";

export interface V3BulkSyncStatusResponse {
    current_execution?: Polytomic.V3BulkSyncExecution;
    last_execution?: Polytomic.V3BulkSyncExecution;
    next_execution_time?: string;
}
