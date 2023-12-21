/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as environments from "../../../../environments";
import * as core from "../../../../core";
import * as PolytomicApi from "../../..";
export declare namespace Identity {
    interface Options {
        environment?: core.Supplier<environments.PolytomicApiEnvironment | string>;
        token: core.Supplier<core.BearerToken>;
    }
    interface RequestOptions {
        timeoutInSeconds?: number;
    }
}
export declare class Identity {
    protected readonly _options: Identity.Options;
    constructor(_options: Identity.Options);
    /**
     * @throws {@link PolytomicApi.UnauthorizedError}
     */
    apiV2GetIdentity(requestOptions?: Identity.RequestOptions): Promise<PolytomicApi.V2GetIdentityResponseEnvelope>;
    protected _getAuthorizationHeader(): Promise<string>;
}
