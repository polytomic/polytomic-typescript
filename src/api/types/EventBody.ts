/**
 * This file was auto-generated from our API Definition.
 */

import * as Polytomic from "../index";

export type EventBody =
    | Polytomic.SyncRunningEvent
    | Polytomic.SyncCompletedEvent
    | Polytomic.SyncFailedEvent
    | Polytomic.SyncCanceledEvent
    | Polytomic.SyncCompletedWithErrorsEvent
    | Polytomic.BulkSyncRunningEvent
    | Polytomic.BulkSyncCompletedEvent
    | Polytomic.BulkSyncCanceledEvent
    | Polytomic.BulkSyncCompletedWithErrorEvent
    | Polytomic.BulkSyncFailedEvent;
