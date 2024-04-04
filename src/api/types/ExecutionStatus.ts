/**
 * This file was auto-generated from our API Definition.
 */

export type ExecutionStatus =
    | "created"
    | "scheduled"
    | "queued"
    | "waiting"
    | "running"
    | "processing"
    | "canceling"
    | "canceled"
    | "completed"
    | "failed"
    | "interrupted";

export const ExecutionStatus = {
    Created: "created",
    Scheduled: "scheduled",
    Queued: "queued",
    Waiting: "waiting",
    Running: "running",
    Processing: "processing",
    Canceling: "canceling",
    Canceled: "canceled",
    Completed: "completed",
    Failed: "failed",
    Interrupted: "interrupted",
} as const;
