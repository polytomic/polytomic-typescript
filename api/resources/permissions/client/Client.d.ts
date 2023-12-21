/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as environments from "../../../../environments";
import * as core from "../../../../core";
import * as PolytomicApi from "../../..";
export declare namespace Permissions {
    interface Options {
        environment?: core.Supplier<environments.PolytomicApiEnvironment | string>;
        token: core.Supplier<core.BearerToken>;
    }
    interface RequestOptions {
        timeoutInSeconds?: number;
    }
}
export declare class Permissions {
    protected readonly _options: Permissions.Options;
    constructor(_options: Permissions.Options);
    /**
     * @throws {@link PolytomicApi.UnauthorizedError}
     */
    apiV2ListPolicies(requestOptions?: Permissions.RequestOptions): Promise<PolytomicApi.V2ListPoliciesResponseEnvelope>;
    /**
     * @throws {@link PolytomicApi.UnauthorizedError}
     */
    apiV2CreatePolicy(request: PolytomicApi.V2CreatePolicyRequest, requestOptions?: Permissions.RequestOptions): Promise<PolytomicApi.V2PolicyResponseEnvelope>;
    /**
     * @throws {@link PolytomicApi.UnauthorizedError}
     */
    apiV2GetPolicy(id: string, requestOptions?: Permissions.RequestOptions): Promise<PolytomicApi.V2PolicyResponseEnvelope>;
    /**
     * @throws {@link PolytomicApi.UnauthorizedError}
     */
    apiV2DeletePolicy(id: string, requestOptions?: Permissions.RequestOptions): Promise<void>;
    /**
     * @throws {@link PolytomicApi.UnauthorizedError}
     */
    apiV2UpdatePolicy(id: string, request: PolytomicApi.V2UpdatePolicyRequest, requestOptions?: Permissions.RequestOptions): Promise<PolytomicApi.V2PolicyResponseEnvelope>;
    /**
     * @throws {@link PolytomicApi.UnauthorizedError}
     */
    apiV2ListRoles(requestOptions?: Permissions.RequestOptions): Promise<PolytomicApi.V2RoleListResponseEnvelope>;
    /**
     * @throws {@link PolytomicApi.UnauthorizedError}
     */
    apiV2CreateRole(request: PolytomicApi.V2CreateRoleRequest, requestOptions?: Permissions.RequestOptions): Promise<PolytomicApi.V2RoleResponseEnvelope>;
    /**
     * @throws {@link PolytomicApi.UnauthorizedError}
     */
    apiV2GetRole(id: string, requestOptions?: Permissions.RequestOptions): Promise<PolytomicApi.V2RoleResponseEnvelope>;
    /**
     * @throws {@link PolytomicApi.UnauthorizedError}
     */
    apiV2DeleteRole(id: string, requestOptions?: Permissions.RequestOptions): Promise<void>;
    /**
     * @throws {@link PolytomicApi.UnauthorizedError}
     */
    apiV2UpdateRole(id: string, request: PolytomicApi.V2UpdateRoleRequest, requestOptions?: Permissions.RequestOptions): Promise<PolytomicApi.V2RoleResponseEnvelope>;
    protected _getAuthorizationHeader(): Promise<string>;
}
