/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as serializers from "..";
import * as PolytomicApi from "../../api";
import * as core from "../../core";
export declare const RestErrResponse: core.serialization.ObjectSchema<serializers.RestErrResponse.Raw, PolytomicApi.RestErrResponse>;
export declare namespace RestErrResponse {
    interface Raw {
        code?: number | null;
        context?: Record<string, unknown> | null;
        error?: string | null;
        status?: string | null;
    }
}
