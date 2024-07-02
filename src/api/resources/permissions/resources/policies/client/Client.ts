/**
 * This file was auto-generated from our API Definition.
 */

import * as environments from "../../../../../../environments";
import * as core from "../../../../../../core";
import * as Polytomic from "../../../../..";
import urlJoin from "url-join";
import * as errors from "../../../../../../errors";

export declare namespace Policies {
    interface Options {
        environment?: core.Supplier<environments.PolytomicEnvironment | string>;
        token: core.Supplier<core.BearerToken>;
        version?: core.Supplier<string | undefined>;
    }

    interface RequestOptions {
        timeoutInSeconds?: number;
        maxRetries?: number;
    }
}

export class Policies {
    constructor(protected readonly _options: Policies.Options) {}

    /**
     * @throws {@link Polytomic.UnauthorizedError}
     * @throws {@link Polytomic.InternalServerError}
     *
     * @example
     *     await polytomic.permissions.policies.list()
     */
    public async list(requestOptions?: Policies.RequestOptions): Promise<Polytomic.ListPoliciesResponseEnvelope> {
        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.PolytomicEnvironment.Default,
                "api/permissions/policies"
            ),
            method: "GET",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Polytomic-Version":
                    (await core.Supplier.get(this._options.version)) != null
                        ? await core.Supplier.get(this._options.version)
                        : undefined,
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "polytomic",
                "X-Fern-SDK-Version": "1.7.0",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
            },
            contentType: "application/json",
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
        });
        if (_response.ok) {
            return _response.body as Polytomic.ListPoliciesResponseEnvelope;
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 401:
                    throw new Polytomic.UnauthorizedError(_response.error.body as Polytomic.RestErrResponse);
                case 500:
                    throw new Polytomic.InternalServerError(_response.error.body as Polytomic.ApiError);
                default:
                    throw new errors.PolytomicError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.body,
                    });
            }
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.PolytomicError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.PolytomicTimeoutError();
            case "unknown":
                throw new errors.PolytomicError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * @throws {@link Polytomic.BadRequestError}
     * @throws {@link Polytomic.UnauthorizedError}
     * @throws {@link Polytomic.ForbiddenError}
     * @throws {@link Polytomic.NotFoundError}
     * @throws {@link Polytomic.InternalServerError}
     *
     * @example
     *     await polytomic.permissions.policies.create({
     *         name: "Custom"
     *     })
     */
    public async create(
        request: Polytomic.permissions.CreatePolicyRequest,
        requestOptions?: Policies.RequestOptions
    ): Promise<Polytomic.PolicyResponseEnvelope> {
        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.PolytomicEnvironment.Default,
                "api/permissions/policies"
            ),
            method: "POST",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Polytomic-Version":
                    (await core.Supplier.get(this._options.version)) != null
                        ? await core.Supplier.get(this._options.version)
                        : undefined,
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "polytomic",
                "X-Fern-SDK-Version": "1.7.0",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
            },
            contentType: "application/json",
            body: request,
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
        });
        if (_response.ok) {
            return _response.body as Polytomic.PolicyResponseEnvelope;
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 400:
                    throw new Polytomic.BadRequestError(_response.error.body as Polytomic.ApiError);
                case 401:
                    throw new Polytomic.UnauthorizedError(_response.error.body as Polytomic.RestErrResponse);
                case 403:
                    throw new Polytomic.ForbiddenError(_response.error.body as Polytomic.ApiError);
                case 404:
                    throw new Polytomic.NotFoundError(_response.error.body as Polytomic.ApiError);
                case 500:
                    throw new Polytomic.InternalServerError(_response.error.body as Polytomic.ApiError);
                default:
                    throw new errors.PolytomicError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.body,
                    });
            }
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.PolytomicError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.PolytomicTimeoutError();
            case "unknown":
                throw new errors.PolytomicError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * @throws {@link Polytomic.UnauthorizedError}
     * @throws {@link Polytomic.NotFoundError}
     * @throws {@link Polytomic.InternalServerError}
     *
     * @example
     *     await polytomic.permissions.policies.get("248df4b7-aa70-47b8-a036-33ac447e668d")
     */
    public async get(id: string, requestOptions?: Policies.RequestOptions): Promise<Polytomic.PolicyResponseEnvelope> {
        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.PolytomicEnvironment.Default,
                `api/permissions/policies/${id}`
            ),
            method: "GET",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Polytomic-Version":
                    (await core.Supplier.get(this._options.version)) != null
                        ? await core.Supplier.get(this._options.version)
                        : undefined,
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "polytomic",
                "X-Fern-SDK-Version": "1.7.0",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
            },
            contentType: "application/json",
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
        });
        if (_response.ok) {
            return _response.body as Polytomic.PolicyResponseEnvelope;
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 401:
                    throw new Polytomic.UnauthorizedError(_response.error.body as Polytomic.RestErrResponse);
                case 404:
                    throw new Polytomic.NotFoundError(_response.error.body as Polytomic.ApiError);
                case 500:
                    throw new Polytomic.InternalServerError(_response.error.body as Polytomic.ApiError);
                default:
                    throw new errors.PolytomicError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.body,
                    });
            }
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.PolytomicError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.PolytomicTimeoutError();
            case "unknown":
                throw new errors.PolytomicError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * @throws {@link Polytomic.BadRequestError}
     * @throws {@link Polytomic.UnauthorizedError}
     * @throws {@link Polytomic.ForbiddenError}
     * @throws {@link Polytomic.NotFoundError}
     * @throws {@link Polytomic.InternalServerError}
     *
     * @example
     *     await polytomic.permissions.policies.update("248df4b7-aa70-47b8-a036-33ac447e668d", {
     *         name: "Custom"
     *     })
     */
    public async update(
        id: string,
        request: Polytomic.permissions.UpdatePolicyRequest,
        requestOptions?: Policies.RequestOptions
    ): Promise<Polytomic.PolicyResponseEnvelope> {
        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.PolytomicEnvironment.Default,
                `api/permissions/policies/${id}`
            ),
            method: "PUT",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Polytomic-Version":
                    (await core.Supplier.get(this._options.version)) != null
                        ? await core.Supplier.get(this._options.version)
                        : undefined,
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "polytomic",
                "X-Fern-SDK-Version": "1.7.0",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
            },
            contentType: "application/json",
            body: request,
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
        });
        if (_response.ok) {
            return _response.body as Polytomic.PolicyResponseEnvelope;
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 400:
                    throw new Polytomic.BadRequestError(_response.error.body as Polytomic.ApiError);
                case 401:
                    throw new Polytomic.UnauthorizedError(_response.error.body as Polytomic.RestErrResponse);
                case 403:
                    throw new Polytomic.ForbiddenError(_response.error.body as Polytomic.ApiError);
                case 404:
                    throw new Polytomic.NotFoundError(_response.error.body as Polytomic.ApiError);
                case 500:
                    throw new Polytomic.InternalServerError(_response.error.body as Polytomic.ApiError);
                default:
                    throw new errors.PolytomicError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.body,
                    });
            }
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.PolytomicError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.PolytomicTimeoutError();
            case "unknown":
                throw new errors.PolytomicError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * @throws {@link Polytomic.UnauthorizedError}
     * @throws {@link Polytomic.ForbiddenError}
     * @throws {@link Polytomic.NotFoundError}
     * @throws {@link Polytomic.InternalServerError}
     *
     * @example
     *     await polytomic.permissions.policies.remove("248df4b7-aa70-47b8-a036-33ac447e668d")
     */
    public async remove(id: string, requestOptions?: Policies.RequestOptions): Promise<void> {
        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.PolytomicEnvironment.Default,
                `api/permissions/policies/${id}`
            ),
            method: "DELETE",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Polytomic-Version":
                    (await core.Supplier.get(this._options.version)) != null
                        ? await core.Supplier.get(this._options.version)
                        : undefined,
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "polytomic",
                "X-Fern-SDK-Version": "1.7.0",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
            },
            contentType: "application/json",
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
        });
        if (_response.ok) {
            return;
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 401:
                    throw new Polytomic.UnauthorizedError(_response.error.body as Polytomic.RestErrResponse);
                case 403:
                    throw new Polytomic.ForbiddenError(_response.error.body as Polytomic.ApiError);
                case 404:
                    throw new Polytomic.NotFoundError(_response.error.body as Polytomic.ApiError);
                case 500:
                    throw new Polytomic.InternalServerError(_response.error.body as Polytomic.ApiError);
                default:
                    throw new errors.PolytomicError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.body,
                    });
            }
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.PolytomicError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.PolytomicTimeoutError();
            case "unknown":
                throw new errors.PolytomicError({
                    message: _response.error.errorMessage,
                });
        }
    }

    protected async _getAuthorizationHeader() {
        return `Bearer ${await core.Supplier.get(this._options.token)}`;
    }
}
