/**
 * This file was auto-generated from our API Definition.
 */

import * as Polytomic from "../index";

export interface BulkSyncSchemaExecutionStatus {
    completed_at?: string;
    error_count?: number;
    /** ID of the most recent execution for the schema. */
    execution_id?: string;
    record_count?: number;
    schema?: string;
    started_at?: string;
    status?: Polytomic.BulkSchemaExecutionStatus;
    status_message?: string;
    warning_count?: number;
}
