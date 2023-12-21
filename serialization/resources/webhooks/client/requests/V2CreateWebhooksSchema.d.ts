/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as serializers from "../../../..";
import * as PolytomicApi from "../../../../../api";
import * as core from "../../../../../core";
export declare const V2CreateWebhooksSchema: core.serialization.Schema<serializers.V2CreateWebhooksSchema.Raw, PolytomicApi.V2CreateWebhooksSchema>;
export declare namespace V2CreateWebhooksSchema {
    interface Raw {
        endpoint: string;
        organization_id?: string | null;
        secret: string;
    }
}