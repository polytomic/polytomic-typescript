/**
 * This file was auto-generated from our API Definition.
 */

export interface SyncCompletedWithErrorsEvent {
    error?: string;
    execution_id?: string;
    number_of_errors?: number;
    number_of_warnings?: number;
    organization_id?: string;
    sync_id?: string;
    sync_name?: string;
    target_connection_id?: string;
}
