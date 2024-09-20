/**
 * This file was auto-generated from our API Definition.
 */

import * as environments from "../../../../environments";
import * as core from "../../../../core";
import * as Polytomic from "../../../index";
import urlJoin from "url-join";
import * as errors from "../../../../errors/index";

export declare namespace Schemas {
    interface Options {
        environment?: core.Supplier<environments.PolytomicEnvironment | string>;
        token: core.Supplier<core.BearerToken>;
        version?: core.Supplier<string | undefined>;
    }

    interface RequestOptions {
        /** The maximum time to wait for a response in seconds. */
        timeoutInSeconds?: number;
        /** The number of times to retry the request. Defaults to 2. */
        maxRetries?: number;
        /** A hook to abort the request. */
        abortSignal?: AbortSignal;
        /** Override the X-Polytomic-Version header */
        version?: string | undefined;
    }
}

export class Schemas {
    constructor(protected readonly _options: Schemas.Options) {}

    /**
     * @param {string} id
     * @param {Schemas.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Polytomic.BadRequestError}
     * @throws {@link Polytomic.UnauthorizedError}
     * @throws {@link Polytomic.NotFoundError}
     * @throws {@link Polytomic.InternalServerError}
     *
     * @example
     *     await client.schemas.refresh("248df4b7-aa70-47b8-a036-33ac447e668d")
     */
    public async refresh(id: string, requestOptions?: Schemas.RequestOptions): Promise<void> {
        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.PolytomicEnvironment.Default,
                `api/connections/${encodeURIComponent(id)}/schemas/refresh`
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
                "X-Fern-SDK-Version": "1.9.3",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
            },
            contentType: "application/json",
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return;
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 400:
                    throw new Polytomic.BadRequestError(_response.error.body as Polytomic.ApiError);
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
     * @param {string} id
     * @param {Schemas.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Polytomic.BadRequestError}
     * @throws {@link Polytomic.UnauthorizedError}
     * @throws {@link Polytomic.NotFoundError}
     * @throws {@link Polytomic.InternalServerError}
     *
     * @example
     *     await client.schemas.getStatus("248df4b7-aa70-47b8-a036-33ac447e668d")
     */
    public async getStatus(
        id: string,
        requestOptions?: Schemas.RequestOptions
    ): Promise<Polytomic.BulkSyncSourceStatusEnvelope> {
        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.PolytomicEnvironment.Default,
                `api/connections/${encodeURIComponent(id)}/schemas/status`
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
                "X-Fern-SDK-Version": "1.9.3",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
            },
            contentType: "application/json",
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return _response.body as Polytomic.BulkSyncSourceStatusEnvelope;
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 400:
                    throw new Polytomic.BadRequestError(_response.error.body as Polytomic.ApiError);
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
     * @param {string} id
     * @param {string} schemaId
     * @param {Schemas.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Polytomic.BadRequestError}
     * @throws {@link Polytomic.UnauthorizedError}
     * @throws {@link Polytomic.NotFoundError}
     * @throws {@link Polytomic.InternalServerError}
     *
     * @example
     *     await client.schemas.get("248df4b7-aa70-47b8-a036-33ac447e668d", "public.users")
     */
    public async get(
        id: string,
        schemaId: string,
        requestOptions?: Schemas.RequestOptions
    ): Promise<Polytomic.BulkSyncSourceSchemaEnvelope> {
        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.PolytomicEnvironment.Default,
                `api/connections/${encodeURIComponent(id)}/schemas/${encodeURIComponent(schemaId)}`
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
                "X-Fern-SDK-Version": "1.9.3",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
            },
            contentType: "application/json",
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return _response.body as Polytomic.BulkSyncSourceSchemaEnvelope;
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 400:
                    throw new Polytomic.BadRequestError(_response.error.body as Polytomic.ApiError);
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
     * @param {string} id
     * @param {string} schemaId
     * @param {Schemas.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Polytomic.BadRequestError}
     * @throws {@link Polytomic.UnauthorizedError}
     * @throws {@link Polytomic.ForbiddenError}
     * @throws {@link Polytomic.NotFoundError}
     * @throws {@link Polytomic.InternalServerError}
     *
     * @example
     *     await client.schemas.getRecords("248df4b7-aa70-47b8-a036-33ac447e668d", "public.users")
     */
    public async getRecords(
        id: string,
        schemaId: string,
        requestOptions?: Schemas.RequestOptions
    ): Promise<Polytomic.SchemaRecordsResponseEnvelope> {
        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.PolytomicEnvironment.Default,
                `api/connections/${encodeURIComponent(id)}/schemas/${encodeURIComponent(schemaId)}/records`
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
                "X-Fern-SDK-Version": "1.9.3",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
            },
            contentType: "application/json",
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return _response.body as Polytomic.SchemaRecordsResponseEnvelope;
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

    protected async _getAuthorizationHeader(): Promise<string> {
        return `Bearer ${await core.Supplier.get(this._options.token)}`;
    }
}
