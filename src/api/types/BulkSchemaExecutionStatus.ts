/**
 * This file was auto-generated from our API Definition.
 */

export type BulkSchemaExecutionStatus =
    | "created"
    | "scheduled"
    | "running"
    | "exporting"
    | "canceled"
    | "completed"
    | "failed";

export const BulkSchemaExecutionStatus = {
    Created: "created",
    Scheduled: "scheduled",
    Running: "running",
    Exporting: "exporting",
    Canceled: "canceled",
    Completed: "completed",
    Failed: "failed",
} as const;
