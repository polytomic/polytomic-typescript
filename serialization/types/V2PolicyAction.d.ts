/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as serializers from "..";
import * as PolytomicApi from "../../api";
import * as core from "../../core";
export declare const V2PolicyAction: core.serialization.ObjectSchema<serializers.V2PolicyAction.Raw, PolytomicApi.V2PolicyAction>;
export declare namespace V2PolicyAction {
    interface Raw {
        action: string;
        role_ids?: string[] | null;
    }
}
