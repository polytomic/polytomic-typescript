/**
 * This file was auto-generated from our API Definition.
 */

import * as Polytomic from "..";

export interface GetExecutionResponseSchema {
    completed_at?: string;
    counts?: Polytomic.ExecutionCounts;
    created_at?: string;
    errors?: string[];
    id?: string;
    started_at?: string;
    status?: Polytomic.ExecutionStatus;
    type?: string;
}
