/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as serializers from "..";
import * as PolytomicApi from "../../api";
import * as core from "../../core";
export declare const V3BulkSyncStatusEnvelope: core.serialization.ObjectSchema<serializers.V3BulkSyncStatusEnvelope.Raw, PolytomicApi.V3BulkSyncStatusEnvelope>;
export declare namespace V3BulkSyncStatusEnvelope {
    interface Raw {
        data?: serializers.V3BulkSyncStatusResponse.Raw | null;
    }
}