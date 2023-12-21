/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as serializers from "..";
import * as PolytomicApi from "../../api";
import * as core from "../../core";
export declare const V3ListBulkSyncExecutionsEnvelope: core.serialization.ObjectSchema<serializers.V3ListBulkSyncExecutionsEnvelope.Raw, PolytomicApi.V3ListBulkSyncExecutionsEnvelope>;
export declare namespace V3ListBulkSyncExecutionsEnvelope {
    interface Raw {
        data?: serializers.V3BulkSyncExecution.Raw[] | null;
    }
}
