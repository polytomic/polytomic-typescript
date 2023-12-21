/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as serializers from "../../../..";
import * as PolytomicApi from "../../../../../api";
import * as core from "../../../../../core";
export declare const V2UpdateConnectionRequestSchema: core.serialization.Schema<serializers.V2UpdateConnectionRequestSchema.Raw, PolytomicApi.V2UpdateConnectionRequestSchema>;
export declare namespace V2UpdateConnectionRequestSchema {
    interface Raw {
        configuration?: Record<string, unknown> | null;
        name: string;
        organization_id?: string | null;
        policies?: string[] | null;
        reconnect?: boolean | null;
        type?: string | null;
        validate?: boolean | null;
    }
}