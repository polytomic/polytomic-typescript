/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as environments from "../../../../environments";
import * as core from "../../../../core";
import * as PolytomicApi from "../../..";
export declare namespace Models {
    interface Options {
        environment?: core.Supplier<environments.PolytomicApiEnvironment | string>;
        token: core.Supplier<core.BearerToken>;
    }
    interface RequestOptions {
        timeoutInSeconds?: number;
    }
}
export declare class Models {
    protected readonly _options: Models.Options;
    constructor(_options: Models.Options);
    /**
     * @throws {@link PolytomicApi.UnauthorizedError}
     */
    apiV2ListModels(requestOptions?: Models.RequestOptions): Promise<PolytomicApi.V2ModelListResponseEnvelope>;
    /**
     * @throws {@link PolytomicApi.UnauthorizedError}
     */
    apiV2CreateModel(request: PolytomicApi.V2CreateModelRequest, requestOptions?: Models.RequestOptions): Promise<PolytomicApi.V2ModelResponseEnvelope>;
    /**
     * @throws {@link PolytomicApi.UnauthorizedError}
     */
    apiV2GetModel(id: string, requestOptions?: Models.RequestOptions): Promise<PolytomicApi.V2ModelResponseEnvelope>;
    /**
     * @throws {@link PolytomicApi.UnauthorizedError}
     */
    apiV2RemoveModel(id: string, requestOptions?: Models.RequestOptions): Promise<void>;
    /**
     * @throws {@link PolytomicApi.UnauthorizedError}
     */
    apiV2UpdateModel(id: string, request: PolytomicApi.V2UpdateModelRequest, requestOptions?: Models.RequestOptions): Promise<PolytomicApi.V2ModelResponseEnvelope>;
    protected _getAuthorizationHeader(): Promise<string>;
}
