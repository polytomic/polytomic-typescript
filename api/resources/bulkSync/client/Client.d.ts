/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as environments from "../../../../environments";
import * as core from "../../../../core";
import * as PolytomicApi from "../../..";
export declare namespace BulkSync {
    interface Options {
        environment?: core.Supplier<environments.PolytomicApiEnvironment | string>;
        token: core.Supplier<core.BearerToken>;
    }
    interface RequestOptions {
        timeoutInSeconds?: number;
    }
}
export declare class BulkSync {
    protected readonly _options: BulkSync.Options;
    constructor(_options: BulkSync.Options);
    /**
     * @throws {@link PolytomicApi.UnauthorizedError}
     */
    apiV2GetBulkDestination(id: string, requestOptions?: BulkSync.RequestOptions): Promise<PolytomicApi.V2BulkSyncDestEnvelope>;
    /**
     * @throws {@link PolytomicApi.UnauthorizedError}
     */
    apiV3GetBulkSource(connectionId: string, request?: PolytomicApi.ApiV3GetBulkSourceRequest, requestOptions?: BulkSync.RequestOptions): Promise<PolytomicApi.V3BulkSyncSourceEnvelope>;
    /**
     * @throws {@link PolytomicApi.UnauthorizedError}
     */
    apiV3GetBulkSourceSchema(connectionId: string, schemaId: string, requestOptions?: BulkSync.RequestOptions): Promise<PolytomicApi.V3BulkSyncSourceSchemaEnvelope>;
    /**
     * @throws {@link PolytomicApi.UnauthorizedError}
     */
    apiV2ListBulkSyncs(requestOptions?: BulkSync.RequestOptions): Promise<PolytomicApi.V2BulkSyncListEnvelope>;
    /**
     * @throws {@link PolytomicApi.UnauthorizedError}
     */
    apiV2CreateBulkSync(request: PolytomicApi.V2CreateBulkSyncRequest, requestOptions?: BulkSync.RequestOptions): Promise<PolytomicApi.V2BulkSyncResponseEnvelope>;
    /**
     * @throws {@link PolytomicApi.UnauthorizedError}
     */
    apiV2GetBulkSync(id: string, request?: PolytomicApi.ApiV2GetBulkSyncRequest, requestOptions?: BulkSync.RequestOptions): Promise<PolytomicApi.V2BulkSyncResponseEnvelope>;
    /**
     * @throws {@link PolytomicApi.UnauthorizedError}
     */
    apiV2RemoveBulkSync(id: string, request?: PolytomicApi.ApiV2RemoveBulkSyncRequest, requestOptions?: BulkSync.RequestOptions): Promise<void>;
    /**
     * > 📘 Updating schemas
     * >
     * > Schema updates can be performed using the [Update Bulk Sync Schemas](https://docs.polytomic.com/reference/apiv3updatebulksyncschemas) endpoint.
     * @throws {@link PolytomicApi.UnauthorizedError}
     */
    apiV2UpdateBulkSync(id: string, request: PolytomicApi.V2UpdateBulkSyncRequest, requestOptions?: BulkSync.RequestOptions): Promise<PolytomicApi.V2BulkSyncResponseEnvelope>;
    /**
     * @throws {@link PolytomicApi.UnauthorizedError}
     */
    apiV2ActivateBulkSync(id: string, request: PolytomicApi.V2ActivateSyncInput, requestOptions?: BulkSync.RequestOptions): Promise<PolytomicApi.V2ActivateSyncEnvelope>;
    /**
     * @throws {@link PolytomicApi.UnauthorizedError}
     */
    apiV3ListBulkSyncExecutions(id: string, requestOptions?: BulkSync.RequestOptions): Promise<PolytomicApi.V3ListBulkSyncExecutionsEnvelope>;
    /**
     * @throws {@link PolytomicApi.UnauthorizedError}
     */
    apiV3StartBulkSyncExecution(id: string, request?: PolytomicApi.V3StartBulkSyncRequest, requestOptions?: BulkSync.RequestOptions): Promise<PolytomicApi.V3BulkSyncExecutionEnvelope>;
    /**
     * @throws {@link PolytomicApi.UnauthorizedError}
     */
    apiV3GetBulkSyncExecution(id: string, execId: string, requestOptions?: BulkSync.RequestOptions): Promise<PolytomicApi.V3BulkSyncExecutionEnvelope>;
    /**
     * @throws {@link PolytomicApi.UnauthorizedError}
     */
    apiV3GetBulkSyncSchemas(id: string, requestOptions?: BulkSync.RequestOptions): Promise<PolytomicApi.V3ListBulkSchemaEnvelope>;
    /**
     * @throws {@link PolytomicApi.UnauthorizedError}
     */
    apiV3UpdateBulkSyncSchemas(id: string, request?: PolytomicApi.V3BulkSyncSchemasRequest, requestOptions?: BulkSync.RequestOptions): Promise<PolytomicApi.V3ListBulkSchemaEnvelope>;
    /**
     * @throws {@link PolytomicApi.UnauthorizedError}
     */
    apiV3GetBulkSyncSchema(id: string, schemaId: string, requestOptions?: BulkSync.RequestOptions): Promise<PolytomicApi.V3BulkSchemaEnvelope>;
    /**
     * @throws {@link PolytomicApi.UnauthorizedError}
     */
    apiV3UpdateBulkSyncSchema(id: string, schemaId: string, request?: PolytomicApi.V3UpdateBulkSchema, requestOptions?: BulkSync.RequestOptions): Promise<PolytomicApi.V3BulkSchemaEnvelope>;
    /**
     * @throws {@link PolytomicApi.UnauthorizedError}
     */
    apiV3GetBulkSyncStatus(id: string, requestOptions?: BulkSync.RequestOptions): Promise<PolytomicApi.V3BulkSyncStatusEnvelope>;
    protected _getAuthorizationHeader(): Promise<string>;
}
