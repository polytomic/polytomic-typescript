/**
 * This file was auto-generated from our API Definition.
 */

import * as Polytomic from "../index";

export interface BulkSyncExecutionStatus {
    nextExecutionTime?: string;
    schemas?: Polytomic.BulkSyncSchemaExecutionStatus[];
    status?: Polytomic.BulkExecutionStatus;
    sync_id?: string;
}
