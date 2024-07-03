/**
 * This file was auto-generated from our API Definition.
 */

import * as Polytomic from "..";

export interface SyncCompletedEvent {
    deleted_records?: string[];
    error_count?: number;
    errored_records?: string[];
    execution_id?: string;
    inserted_count?: number;
    inserted_records?: string[];
    name?: string;
    organization_id?: string;
    record_count?: number;
    status?: Polytomic.ExecutionStatus;
    sync_id?: string;
    target_connection_id?: string;
    total_records?: string[];
    trigger?: string;
    updated_count?: number;
    updated_records?: string[];
    upserted_count?: number;
    warning_count?: number;
    warnings?: string[];
}
