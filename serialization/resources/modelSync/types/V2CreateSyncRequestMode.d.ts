/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as serializers from "../../..";
import * as PolytomicApi from "../../../../api";
import * as core from "../../../../core";
export declare const V2CreateSyncRequestMode: core.serialization.Schema<serializers.V2CreateSyncRequestMode.Raw, PolytomicApi.V2CreateSyncRequestMode>;
export declare namespace V2CreateSyncRequestMode {
    type Raw = "update" | "updateOrCreate" | "create" | "replace" | "append" | "snapshot";
}