/**
 * This file was auto-generated from our API Definition.
 */

import * as environments from "../../../../environments";
import * as core from "../../../../core";
import * as Polytomic from "../../../index";
import urlJoin from "url-join";
import * as errors from "../../../../errors/index";

export declare namespace Models {
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

export class Models {
    constructor(protected readonly _options: Models.Options) {}

    /**
     * @param {string} id
     * @param {Polytomic.ModelsGetEnrichmentSourceRequest} request
     * @param {Models.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Polytomic.BadRequestError}
     * @throws {@link Polytomic.UnauthorizedError}
     * @throws {@link Polytomic.ForbiddenError}
     * @throws {@link Polytomic.NotFoundError}
     * @throws {@link Polytomic.InternalServerError}
     *
     * @example
     *     await client.models.getEnrichmentSource("248df4b7-aa70-47b8-a036-33ac447e668d")
     */
    public async getEnrichmentSource(
        id: string,
        request: Polytomic.ModelsGetEnrichmentSourceRequest = {},
        requestOptions?: Models.RequestOptions
    ): Promise<Polytomic.GetModelSyncSourceMetaEnvelope> {
        const { params } = request;
        const _queryParams: Record<string, string | string[] | object | object[]> = {};
        if (params != null) {
            _queryParams["params"] = JSON.stringify(params);
        }

        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.PolytomicEnvironment.Default,
                `api/connections/${encodeURIComponent(id)}/modelsync/enrichment-source`
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
                "X-Fern-SDK-Version": "1.9.1",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
            },
            contentType: "application/json",
            queryParameters: _queryParams,
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return _response.body as Polytomic.GetModelSyncSourceMetaEnvelope;
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
     * For a given connection and enrichment configuration, provides the valid sets of input fields.
     *
     * @param {string} connectionId
     * @param {Polytomic.GetEnrichmentInputFieldsRequest} request
     * @param {Models.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Polytomic.UnauthorizedError}
     * @throws {@link Polytomic.ForbiddenError}
     * @throws {@link Polytomic.NotFoundError}
     * @throws {@link Polytomic.InternalServerError}
     *
     * @example
     *     await client.models.post("248df4b7-aa70-47b8-a036-33ac447e668d")
     */
    public async post(
        connectionId: string,
        request: Polytomic.GetEnrichmentInputFieldsRequest = {},
        requestOptions?: Models.RequestOptions
    ): Promise<Polytomic.V2GetEnrichmentInputFieldsResponseEnvelope> {
        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.PolytomicEnvironment.Default,
                `api/enrichment/${encodeURIComponent(connectionId)}/inputfields`
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
                "X-Fern-SDK-Version": "1.9.1",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
            },
            contentType: "application/json",
            body: request,
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return _response.body as Polytomic.V2GetEnrichmentInputFieldsResponseEnvelope;
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

    /**
     * @param {Polytomic.ModelsPreviewRequest} request
     * @param {Models.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Polytomic.BadRequestError}
     * @throws {@link Polytomic.UnauthorizedError}
     * @throws {@link Polytomic.NotFoundError}
     * @throws {@link Polytomic.InternalServerError}
     *
     * @example
     *     await client.models.preview({
     *         body: {
     *             configuration: {
     *                 "table": "public.users"
     *             },
     *             connection_id: "248df4b7-aa70-47b8-a036-33ac447e668d",
     *             name: "Users"
     *         }
     *     })
     */
    public async preview(
        request: Polytomic.ModelsPreviewRequest,
        requestOptions?: Models.RequestOptions
    ): Promise<Polytomic.ModelResponseEnvelope> {
        const { async, body: _body } = request;
        const _queryParams: Record<string, string | string[] | object | object[]> = {};
        if (async != null) {
            _queryParams["async"] = async.toString();
        }

        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.PolytomicEnvironment.Default,
                "api/model-preview"
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
                "X-Fern-SDK-Version": "1.9.1",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
            },
            contentType: "application/json",
            queryParameters: _queryParams,
            body: _body,
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return _response.body as Polytomic.ModelResponseEnvelope;
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
     * @param {Models.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Polytomic.UnauthorizedError}
     * @throws {@link Polytomic.NotFoundError}
     *
     * @example
     *     await client.models.list()
     */
    public async list(requestOptions?: Models.RequestOptions): Promise<Polytomic.ModelListResponseEnvelope> {
        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.PolytomicEnvironment.Default,
                "api/models"
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
                "X-Fern-SDK-Version": "1.9.1",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
            },
            contentType: "application/json",
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return _response.body as Polytomic.ModelListResponseEnvelope;
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 401:
                    throw new Polytomic.UnauthorizedError(_response.error.body as Polytomic.RestErrResponse);
                case 404:
                    throw new Polytomic.NotFoundError(_response.error.body as Polytomic.ApiError);
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
     * @param {Polytomic.ModelsCreateRequest} request
     * @param {Models.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Polytomic.BadRequestError}
     * @throws {@link Polytomic.UnauthorizedError}
     * @throws {@link Polytomic.ForbiddenError}
     * @throws {@link Polytomic.InternalServerError}
     *
     * @example
     *     await client.models.create({
     *         body: {
     *             configuration: {
     *                 "table": "public.users"
     *             },
     *             connection_id: "248df4b7-aa70-47b8-a036-33ac447e668d",
     *             name: "Users"
     *         }
     *     })
     */
    public async create(
        request: Polytomic.ModelsCreateRequest,
        requestOptions?: Models.RequestOptions
    ): Promise<Polytomic.ModelResponseEnvelope> {
        const { async, body: _body } = request;
        const _queryParams: Record<string, string | string[] | object | object[]> = {};
        if (async != null) {
            _queryParams["async"] = async.toString();
        }

        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.PolytomicEnvironment.Default,
                "api/models"
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
                "X-Fern-SDK-Version": "1.9.1",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
            },
            contentType: "application/json",
            queryParameters: _queryParams,
            body: _body,
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return _response.body as Polytomic.ModelResponseEnvelope;
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 400:
                    throw new Polytomic.BadRequestError(_response.error.body as Polytomic.ApiError);
                case 401:
                    throw new Polytomic.UnauthorizedError(_response.error.body as Polytomic.RestErrResponse);
                case 403:
                    throw new Polytomic.ForbiddenError(_response.error.body as Polytomic.ApiError);
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
     * @param {Polytomic.ModelsGetRequest} request
     * @param {Models.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Polytomic.UnauthorizedError}
     * @throws {@link Polytomic.NotFoundError}
     * @throws {@link Polytomic.InternalServerError}
     *
     * @example
     *     await client.models.get("248df4b7-aa70-47b8-a036-33ac447e668d")
     */
    public async get(
        id: string,
        request: Polytomic.ModelsGetRequest = {},
        requestOptions?: Models.RequestOptions
    ): Promise<Polytomic.ModelResponseEnvelope> {
        const { async } = request;
        const _queryParams: Record<string, string | string[] | object | object[]> = {};
        if (async != null) {
            _queryParams["async"] = async.toString();
        }

        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.PolytomicEnvironment.Default,
                `api/models/${encodeURIComponent(id)}`
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
                "X-Fern-SDK-Version": "1.9.1",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
            },
            contentType: "application/json",
            queryParameters: _queryParams,
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return _response.body as Polytomic.ModelResponseEnvelope;
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
     * @param {string} id
     * @param {Polytomic.UpdateModelRequest} request
     * @param {Models.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Polytomic.BadRequestError}
     * @throws {@link Polytomic.UnauthorizedError}
     * @throws {@link Polytomic.NotFoundError}
     * @throws {@link Polytomic.InternalServerError}
     *
     * @example
     *     await client.models.update("248df4b7-aa70-47b8-a036-33ac447e668d", {
     *         async: false,
     *         configuration: {
     *             "table": "public.users"
     *         },
     *         connection_id: "248df4b7-aa70-47b8-a036-33ac447e668d",
     *         name: "Users"
     *     })
     */
    public async update(
        id: string,
        request: Polytomic.UpdateModelRequest,
        requestOptions?: Models.RequestOptions
    ): Promise<Polytomic.ModelResponseEnvelope> {
        const { async, ..._body } = request;
        const _queryParams: Record<string, string | string[] | object | object[]> = {};
        if (async != null) {
            _queryParams["async"] = async.toString();
        }

        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.PolytomicEnvironment.Default,
                `api/models/${encodeURIComponent(id)}`
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
                "X-Fern-SDK-Version": "1.9.1",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
            },
            contentType: "application/json",
            queryParameters: _queryParams,
            body: _body,
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return _response.body as Polytomic.ModelResponseEnvelope;
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
     * @param {Polytomic.ModelsRemoveRequest} request
     * @param {Models.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Polytomic.UnauthorizedError}
     * @throws {@link Polytomic.ForbiddenError}
     * @throws {@link Polytomic.NotFoundError}
     * @throws {@link Polytomic.InternalServerError}
     *
     * @example
     *     await client.models.remove("248df4b7-aa70-47b8-a036-33ac447e668d")
     */
    public async remove(
        id: string,
        request: Polytomic.ModelsRemoveRequest = {},
        requestOptions?: Models.RequestOptions
    ): Promise<void> {
        const { async } = request;
        const _queryParams: Record<string, string | string[] | object | object[]> = {};
        if (async != null) {
            _queryParams["async"] = async.toString();
        }

        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.PolytomicEnvironment.Default,
                `api/models/${encodeURIComponent(id)}`
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
                "X-Fern-SDK-Version": "1.9.1",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
            },
            contentType: "application/json",
            queryParameters: _queryParams,
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
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

    /**
     * Returns sample records from the model. The first ten records that the source provides will be returned after being enriched (if applicable). Synchronous requests must complete within 10s. If either querying or enrichment exceeds 10s, please use the async option.
     *
     * @param {string} id
     * @param {Polytomic.ModelsSampleRequest} request
     * @param {Models.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Polytomic.BadRequestError}
     * @throws {@link Polytomic.UnauthorizedError}
     * @throws {@link Polytomic.NotFoundError}
     * @throws {@link Polytomic.InternalServerError}
     *
     * @example
     *     await client.models.sample("248df4b7-aa70-47b8-a036-33ac447e668d")
     */
    public async sample(
        id: string,
        request: Polytomic.ModelsSampleRequest = {},
        requestOptions?: Models.RequestOptions
    ): Promise<Polytomic.ModelSampleResponseEnvelope> {
        const { async } = request;
        const _queryParams: Record<string, string | string[] | object | object[]> = {};
        if (async != null) {
            _queryParams["async"] = async.toString();
        }

        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.PolytomicEnvironment.Default,
                `api/models/${encodeURIComponent(id)}/sample`
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
                "X-Fern-SDK-Version": "1.9.1",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
            },
            contentType: "application/json",
            queryParameters: _queryParams,
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return _response.body as Polytomic.ModelSampleResponseEnvelope;
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

    protected async _getAuthorizationHeader(): Promise<string> {
        return `Bearer ${await core.Supplier.get(this._options.token)}`;
    }
}
