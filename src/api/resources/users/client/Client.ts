/**
 * This file was auto-generated from our API Definition.
 */

import * as environments from "../../../../environments";
import * as core from "../../../../core";
import * as Polytomic from "../../..";
import urlJoin from "url-join";
import * as errors from "../../../../errors";

export declare namespace Users {
    interface Options {
        environment?: core.Supplier<environments.PolytomicEnvironment | string>;
        token?: core.Supplier<core.BearerToken | undefined>;
        polytomicVersion?: core.Supplier<"2022-12-12" | undefined>;
    }

    interface RequestOptions {
        timeoutInSeconds?: number;
        maxRetries?: number;
    }
}

export class Users {
    constructor(protected readonly _options: Users.Options = {}) {}

    /**
     * > 🚧 Requires partner key
     * >
     * > User endpoints are only accessible using [partner keys](https://docs.polytomic.com/reference/authentication#partner-keys)
     * @throws {@link Polytomic.UnauthorizedError}
     *
     * @example
     *     await polytomic.users.list("248df4b7-aa70-47b8-a036-33ac447e668d")
     */
    public async list(orgId: string, requestOptions?: Users.RequestOptions): Promise<Polytomic.V2ListUsersEnvelope> {
        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.PolytomicEnvironment.Default,
                `api/organizations/${orgId}/users`
            ),
            method: "GET",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Polytomic-Version":
                    (await core.Supplier.get(this._options.polytomicVersion)) != null
                        ? await core.Supplier.get(this._options.polytomicVersion)
                        : undefined,
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "polytomic",
                "X-Fern-SDK-Version": "0.0.1-beta",
            },
            contentType: "application/json",
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
        });
        if (_response.ok) {
            return _response.body as Polytomic.V2ListUsersEnvelope;
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 401:
                    throw new Polytomic.UnauthorizedError(_response.error.body as Polytomic.RestErrResponse);
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
     * > 🚧 Requires partner key
     * >
     * > User endpoints are only accessible using [partner keys](https://docs.polytomic.com/reference/authentication#partner-keys)
     * @throws {@link Polytomic.UnauthorizedError}
     *
     * @example
     *     await polytomic.users.create("248df4b7-aa70-47b8-a036-33ac447e668d", {
     *         email: "email"
     *     })
     */
    public async create(
        orgId: string,
        request: Polytomic.V2CreateUserRequestSchema,
        requestOptions?: Users.RequestOptions
    ): Promise<Polytomic.V2UserEnvelope> {
        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.PolytomicEnvironment.Default,
                `api/organizations/${orgId}/users`
            ),
            method: "POST",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Polytomic-Version":
                    (await core.Supplier.get(this._options.polytomicVersion)) != null
                        ? await core.Supplier.get(this._options.polytomicVersion)
                        : undefined,
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "polytomic",
                "X-Fern-SDK-Version": "0.0.1-beta",
            },
            contentType: "application/json",
            body: request,
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
        });
        if (_response.ok) {
            return _response.body as Polytomic.V2UserEnvelope;
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 401:
                    throw new Polytomic.UnauthorizedError(_response.error.body as Polytomic.RestErrResponse);
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
     * > 🚧 Requires partner key
     * >
     * > User endpoints are only accessible using [partner keys](https://docs.polytomic.com/reference/authentication#partner-keys)
     * @throws {@link Polytomic.UnauthorizedError}
     *
     * @example
     *     await polytomic.users.get("248df4b7-aa70-47b8-a036-33ac447e668d", "248df4b7-aa70-47b8-a036-33ac447e668d")
     */
    public async get(
        id: string,
        orgId: string,
        requestOptions?: Users.RequestOptions
    ): Promise<Polytomic.V2UserEnvelope> {
        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.PolytomicEnvironment.Default,
                `api/organizations/${orgId}/users/${id}`
            ),
            method: "GET",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Polytomic-Version":
                    (await core.Supplier.get(this._options.polytomicVersion)) != null
                        ? await core.Supplier.get(this._options.polytomicVersion)
                        : undefined,
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "polytomic",
                "X-Fern-SDK-Version": "0.0.1-beta",
            },
            contentType: "application/json",
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
        });
        if (_response.ok) {
            return _response.body as Polytomic.V2UserEnvelope;
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 401:
                    throw new Polytomic.UnauthorizedError(_response.error.body as Polytomic.RestErrResponse);
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
     * > 🚧 Requires partner key
     * >
     * > User endpoints are only accessible using [partner keys](https://docs.polytomic.com/reference/authentication#partner-keys)
     * @throws {@link Polytomic.UnauthorizedError}
     *
     * @example
     *     await polytomic.users.remove("248df4b7-aa70-47b8-a036-33ac447e668d", "248df4b7-aa70-47b8-a036-33ac447e668d")
     */
    public async remove(
        id: string,
        orgId: string,
        requestOptions?: Users.RequestOptions
    ): Promise<Polytomic.V2UserEnvelope> {
        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.PolytomicEnvironment.Default,
                `api/organizations/${orgId}/users/${id}`
            ),
            method: "DELETE",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Polytomic-Version":
                    (await core.Supplier.get(this._options.polytomicVersion)) != null
                        ? await core.Supplier.get(this._options.polytomicVersion)
                        : undefined,
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "polytomic",
                "X-Fern-SDK-Version": "0.0.1-beta",
            },
            contentType: "application/json",
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
        });
        if (_response.ok) {
            return _response.body as Polytomic.V2UserEnvelope;
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 401:
                    throw new Polytomic.UnauthorizedError(_response.error.body as Polytomic.RestErrResponse);
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
     * > 🚧 Requires partner key
     * >
     * > User endpoints are only accessible using [partner keys](https://docs.polytomic.com/reference/authentication#partner-keys)
     * @throws {@link Polytomic.UnauthorizedError}
     *
     * @example
     *     await polytomic.users.update("248df4b7-aa70-47b8-a036-33ac447e668d", "248df4b7-aa70-47b8-a036-33ac447e668d", {
     *         email: "email"
     *     })
     */
    public async update(
        id: string,
        orgId: string,
        request: Polytomic.V2UpdateUserRequestSchema,
        requestOptions?: Users.RequestOptions
    ): Promise<Polytomic.V2UserEnvelope> {
        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.PolytomicEnvironment.Default,
                `api/organizations/${orgId}/users/${id}`
            ),
            method: "PATCH",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Polytomic-Version":
                    (await core.Supplier.get(this._options.polytomicVersion)) != null
                        ? await core.Supplier.get(this._options.polytomicVersion)
                        : undefined,
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "polytomic",
                "X-Fern-SDK-Version": "0.0.1-beta",
            },
            contentType: "application/json",
            body: request,
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
        });
        if (_response.ok) {
            return _response.body as Polytomic.V2UserEnvelope;
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 401:
                    throw new Polytomic.UnauthorizedError(_response.error.body as Polytomic.RestErrResponse);
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
     * > 🚧 Requires partner key
     * >
     * > User endpoints are only accessible using [partner keys](https://docs.polytomic.com/reference/authentication#partner-keys)
     * @throws {@link Polytomic.UnauthorizedError}
     *
     * @example
     *     await polytomic.users.createApiKey("248df4b7-aa70-47b8-a036-33ac447e668d", "248df4b7-aa70-47b8-a036-33ac447e668d", {})
     */
    public async createApiKey(
        orgId: string,
        id: string,
        request: Polytomic.UsersCreateApiKeyRequest = {},
        requestOptions?: Users.RequestOptions
    ): Promise<Polytomic.V2ApiKeyResponseEnvelope> {
        const { force } = request;
        const _queryParams: Record<string, string | string[]> = {};
        if (force != null) {
            _queryParams["force"] = force.toString();
        }

        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.PolytomicEnvironment.Default,
                `api/organizations/${orgId}/users/${id}/keys`
            ),
            method: "POST",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Polytomic-Version":
                    (await core.Supplier.get(this._options.polytomicVersion)) != null
                        ? await core.Supplier.get(this._options.polytomicVersion)
                        : undefined,
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "polytomic",
                "X-Fern-SDK-Version": "0.0.1-beta",
            },
            contentType: "application/json",
            queryParameters: _queryParams,
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
        });
        if (_response.ok) {
            return _response.body as Polytomic.V2ApiKeyResponseEnvelope;
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 401:
                    throw new Polytomic.UnauthorizedError(_response.error.body as Polytomic.RestErrResponse);
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
        const bearer = await core.Supplier.get(this._options.token);
        if (bearer != null) {
            return `Bearer ${bearer}`;
        }

        return undefined;
    }
}
