/**
 * This file was auto-generated from our API Definition.
 */

import * as Polytomic from "..";

export interface V3BulkSyncExecution {
    completed_at?: string;
    created_at?: string;
    id?: string;
    is_resync?: boolean;
    is_test?: boolean;
    schemas?: Polytomic.V3BulkSyncSchemaExecution[];
    started_at?: string;
    status?: string;
    type?: string;
}
