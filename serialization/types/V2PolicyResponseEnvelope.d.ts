/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as serializers from "..";
import * as PolytomicApi from "../../api";
import * as core from "../../core";
export declare const V2PolicyResponseEnvelope: core.serialization.ObjectSchema<serializers.V2PolicyResponseEnvelope.Raw, PolytomicApi.V2PolicyResponseEnvelope>;
export declare namespace V2PolicyResponseEnvelope {
    interface Raw {
        data?: serializers.V2PolicyResponse.Raw | null;
    }
}