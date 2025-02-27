/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 *
 */
export type SyncMode =
    | "create"
    | "update"
    | "updateOrCreate"
    | "replace"
    | "append"
    | "snapshot"
    | "replicate"
    | "remove";

export const SyncMode = {
    Create: "create",
    Update: "update",
    UpdateOrCreate: "updateOrCreate",
    Replace: "replace",
    Append: "append",
    Snapshot: "snapshot",
    Replicate: "replicate",
    Remove: "remove",
} as const;
