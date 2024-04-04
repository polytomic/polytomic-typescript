/**
 * This file was auto-generated from our API Definition.
 */

import * as Polytomic from "..";

export interface BulkSyncExecution {
    completed_at?: string;
    created_at?: string;
    id?: string;
    is_resync?: boolean;
    is_test?: boolean;
    schemas?: Polytomic.BulkSyncSchemaExecution[];
    started_at?: string;
    status?: Polytomic.BulkExecutionStatus;
    type?: string;
}
