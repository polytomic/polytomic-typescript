/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as serializers from "..";
import * as PolytomicApi from "../../api";
import * as core from "../../core";
export declare const V3BulkSchemaEnvelope: core.serialization.ObjectSchema<serializers.V3BulkSchemaEnvelope.Raw, PolytomicApi.V3BulkSchemaEnvelope>;
export declare namespace V3BulkSchemaEnvelope {
    interface Raw {
        data?: serializers.V3BulkSchema.Raw | null;
    }
}