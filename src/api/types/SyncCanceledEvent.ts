/**
 * This file was auto-generated from our API Definition.
 */

import * as Polytomic from "..";

export interface SyncCanceledEvent {
    execution_id?: string;
    organization_id?: string;
    status?: Polytomic.ExecutionStatus;
    sync_id?: string;
    sync_name?: string;
    target_connection_id?: string;
}
