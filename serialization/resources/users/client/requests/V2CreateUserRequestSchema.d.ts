/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as serializers from "../../../..";
import * as PolytomicApi from "../../../../../api";
import * as core from "../../../../../core";
export declare const V2CreateUserRequestSchema: core.serialization.Schema<serializers.V2CreateUserRequestSchema.Raw, PolytomicApi.V2CreateUserRequestSchema>;
export declare namespace V2CreateUserRequestSchema {
    interface Raw {
        email: string;
        role?: string | null;
    }
}
