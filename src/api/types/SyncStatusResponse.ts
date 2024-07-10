/**
 * This file was auto-generated from our API Definition.
 */

import * as Polytomic from "../index";

export interface SyncStatusResponse {
    current_execution?: Polytomic.GetExecutionResponseSchema;
    last_execution?: Polytomic.GetExecutionResponseSchema;
    next_execution_time?: string;
}
