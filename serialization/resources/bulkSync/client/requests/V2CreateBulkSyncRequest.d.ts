/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as serializers from "../../../..";
import * as PolytomicApi from "../../../../../api";
import * as core from "../../../../../core";
export declare const V2CreateBulkSyncRequest: core.serialization.Schema<serializers.V2CreateBulkSyncRequest.Raw, PolytomicApi.V2CreateBulkSyncRequest>;
export declare namespace V2CreateBulkSyncRequest {
    interface Raw {
        active?: boolean | null;
        destination_configuration?: Record<string, unknown> | null;
        destination_connection_id: string;
        discover?: boolean | null;
        mode: string;
        name: string;
        organization_id?: string | null;
        policies?: string[] | null;
        schedule: serializers.BulkSchedule.Raw;
        schemas?: string[] | null;
        source_configuration?: Record<string, unknown> | null;
        source_connection_id: string;
    }
}
