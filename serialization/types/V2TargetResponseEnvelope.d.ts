/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as serializers from "..";
import * as PolytomicApi from "../../api";
import * as core from "../../core";
export declare const V2TargetResponseEnvelope: core.serialization.ObjectSchema<serializers.V2TargetResponseEnvelope.Raw, PolytomicApi.V2TargetResponseEnvelope>;
export declare namespace V2TargetResponseEnvelope {
    interface Raw {
        data?: serializers.V2TargetResponse.Raw | null;
    }
}