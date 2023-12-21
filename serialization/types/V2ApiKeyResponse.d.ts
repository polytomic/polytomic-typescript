/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as serializers from "..";
import * as PolytomicApi from "../../api";
import * as core from "../../core";
export declare const V2ApiKeyResponse: core.serialization.ObjectSchema<serializers.V2ApiKeyResponse.Raw, PolytomicApi.V2ApiKeyResponse>;
export declare namespace V2ApiKeyResponse {
    interface Raw {
        value?: string | null;
    }
}