/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as serializers from "..";
import * as PolytomicApi from "../../api";
import * as core from "../../core";
export declare const V3BulkSyncExecution: core.serialization.ObjectSchema<serializers.V3BulkSyncExecution.Raw, PolytomicApi.V3BulkSyncExecution>;
export declare namespace V3BulkSyncExecution {
    interface Raw {
        completed_at?: string | null;
        created_at?: string | null;
        id?: string | null;
        is_resync?: boolean | null;
        is_test?: boolean | null;
        schemas?: serializers.V3BulkSyncSchemaExecution.Raw[] | null;
        started_at?: string | null;
        status?: string | null;
        type?: string | null;
    }
}
