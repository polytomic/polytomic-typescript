/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as serializers from "..";
import * as PolytomicApi from "../../api";
import * as core from "../../core";
export declare const V2BulkSyncListEnvelope: core.serialization.ObjectSchema<serializers.V2BulkSyncListEnvelope.Raw, PolytomicApi.V2BulkSyncListEnvelope>;
export declare namespace V2BulkSyncListEnvelope {
    interface Raw {
        data?: serializers.V2BulkSyncResponse.Raw[] | null;
    }
}
