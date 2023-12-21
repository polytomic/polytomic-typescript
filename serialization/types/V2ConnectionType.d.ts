/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as serializers from "..";
import * as PolytomicApi from "../../api";
import * as core from "../../core";
export declare const V2ConnectionType: core.serialization.ObjectSchema<serializers.V2ConnectionType.Raw, PolytomicApi.V2ConnectionType>;
export declare namespace V2ConnectionType {
    interface Raw {
        envConfig?: Record<string, unknown> | null;
        id?: string | null;
        name?: string | null;
        use_oauth?: boolean | null;
    }
}