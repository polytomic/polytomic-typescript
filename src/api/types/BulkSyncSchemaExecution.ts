/**
 * This file was auto-generated from our API Definition.
 */

import * as Polytomic from "../index";

export interface BulkSyncSchemaExecution {
    completed_at?: string;
    error_count?: number;
    record_count?: number;
    schema?: string;
    started_at?: string;
    status?: Polytomic.BulkSchemaExecutionStatus;
    status_message?: string;
}
