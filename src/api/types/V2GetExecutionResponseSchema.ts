/**
 * This file was auto-generated from our API Definition.
 */

import * as Polytomic from "..";

export interface V2GetExecutionResponseSchema {
    completed_at?: string;
    counts?: Polytomic.V2ExecutionCounts;
    created_at?: string;
    errors?: string[];
    id?: string;
    started_at?: string;
    status?: string;
    type?: string;
}
