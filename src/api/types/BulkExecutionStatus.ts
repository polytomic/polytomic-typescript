/**
 * This file was auto-generated from our API Definition.
 */

export type BulkExecutionStatus =
    | "created"
    | "scheduled"
    | "running"
    | "exporting"
    | "canceling"
    | "canceled"
    | "completed"
    | "failed"
    | "processing"
    | "errors";

export const BulkExecutionStatus = {
    Created: "created",
    Scheduled: "scheduled",
    Running: "running",
    Exporting: "exporting",
    Canceling: "canceling",
    Canceled: "canceled",
    Completed: "completed",
    Failed: "failed",
    Processing: "processing",
    Errors: "errors",
} as const;
