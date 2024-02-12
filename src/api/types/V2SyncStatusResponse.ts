/**
 * This file was auto-generated from our API Definition.
 */

import * as Polytomic from "..";

export interface V2SyncStatusResponse {
    current_execution?: Polytomic.V2GetExecutionResponseSchema;
    last_execution?: Polytomic.V2GetExecutionResponseSchema;
    next_execution_time?: string;
}
