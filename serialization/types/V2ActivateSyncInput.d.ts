/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as serializers from "..";
import * as PolytomicApi from "../../api";
import * as core from "../../core";
export declare const V2ActivateSyncInput: core.serialization.ObjectSchema<serializers.V2ActivateSyncInput.Raw, PolytomicApi.V2ActivateSyncInput>;
export declare namespace V2ActivateSyncInput {
    interface Raw {
        active: boolean;
    }
}