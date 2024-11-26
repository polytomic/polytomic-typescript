/**
 * This file was auto-generated from our API Definition.
 */

import * as environments from "../../../../environments";
import * as core from "../../../../core";
import * as Polytomic from "../../../index";
import urlJoin from "url-join";
import * as errors from "../../../../errors/index";
import { Executions } from "../resources/executions/client/Client";

export declare namespace ModelSync {
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

export class ModelSync {
    constructor(protected readonly _options: ModelSync.Options) {}

    /**
     * @param {string} id
     * @param {Polytomic.ModelSyncGetSourceRequest} request
     * @param {ModelSync.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Polytomic.BadRequestError}
     * @throws {@link Polytomic.UnauthorizedError}
     * @throws {@link Polytomic.ForbiddenError}
     * @throws {@link Polytomic.NotFoundError}
     * @throws {@link Polytomic.InternalServerError}
     *
     * @example
     *     await client.modelSync.getSource("248df4b7-aa70-47b8-a036-33ac447e668d")
     */
    public async getSource(
        id: string,
        request: Polytomic.ModelSyncGetSourceRequest = {},
        requestOptions?: ModelSync.RequestOptions
    ): Promise<Polytomic.GetModelSyncSourceMetaEnvelope> {
        const { params } = request;
        const _queryParams: Record<string, string | string[] | object | object[]> = {};
        if (params != null) {
            _queryParams["params"] = JSON.stringify(params);
        }

        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.PolytomicEnvironment.Default,
                `api/connections/${encodeURIComponent(id)}/modelsync/source`
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
                "X-Fern-SDK-Version": "1.10.1",
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
     * @param {string} id
     * @param {Polytomic.ModelSyncGetSourceFieldsRequest} request
     * @param {ModelSync.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Polytomic.BadRequestError}
     * @throws {@link Polytomic.UnauthorizedError}
     * @throws {@link Polytomic.ForbiddenError}
     * @throws {@link Polytomic.NotFoundError}
     * @throws {@link Polytomic.InternalServerError}
     *
     * @example
     *     await client.modelSync.getSourceFields("248df4b7-aa70-47b8-a036-33ac447e668d")
     */
    public async getSourceFields(
        id: string,
        request: Polytomic.ModelSyncGetSourceFieldsRequest = {},
        requestOptions?: ModelSync.RequestOptions
    ): Promise<Polytomic.ModelFieldResponse> {
        const { params } = request;
        const _queryParams: Record<string, string | string[] | object | object[]> = {};
        if (params != null) {
            _queryParams["params"] = JSON.stringify(params);
        }

        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.PolytomicEnvironment.Default,
                `api/connections/${encodeURIComponent(id)}/modelsync/source/fields`
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
                "X-Fern-SDK-Version": "1.10.1",
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
            return _response.body as Polytomic.ModelFieldResponse;
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
     * @param {string} id
     * @param {Polytomic.ModelSyncGetTargetRequest} request
     * @param {ModelSync.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Polytomic.BadRequestError}
     * @throws {@link Polytomic.UnauthorizedError}
     * @throws {@link Polytomic.ForbiddenError}
     * @throws {@link Polytomic.NotFoundError}
     * @throws {@link Polytomic.InternalServerError}
     *
     * @example
     *     await client.modelSync.getTarget("248df4b7-aa70-47b8-a036-33ac447e668d")
     */
    public async getTarget(
        id: string,
        request: Polytomic.ModelSyncGetTargetRequest = {},
        requestOptions?: ModelSync.RequestOptions
    ): Promise<Polytomic.GetConnectionMetaEnvelope> {
        const { type: type_, search } = request;
        const _queryParams: Record<string, string | string[] | object | object[]> = {};
        if (type_ != null) {
            _queryParams["type"] = type_;
        }

        if (search != null) {
            _queryParams["search"] = search;
        }

        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.PolytomicEnvironment.Default,
                `api/connections/${encodeURIComponent(id)}/modelsync/target`
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
                "X-Fern-SDK-Version": "1.10.1",
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
            return _response.body as Polytomic.GetConnectionMetaEnvelope;
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
     * @param {string} id
     * @param {Polytomic.ModelSyncGetTargetFieldsRequest} request
     * @param {ModelSync.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Polytomic.UnauthorizedError}
     * @throws {@link Polytomic.ForbiddenError}
     * @throws {@link Polytomic.NotFoundError}
     * @throws {@link Polytomic.InternalServerError}
     *
     * @example
     *     await client.modelSync.getTargetFields("248df4b7-aa70-47b8-a036-33ac447e668d", {
     *         target: "database.table",
     *         refresh: false
     *     })
     */
    public async getTargetFields(
        id: string,
        request: Polytomic.ModelSyncGetTargetFieldsRequest,
        requestOptions?: ModelSync.RequestOptions
    ): Promise<Polytomic.TargetResponseEnvelope> {
        const { target, refresh } = request;
        const _queryParams: Record<string, string | string[] | object | object[]> = {};
        _queryParams["target"] = target;
        if (refresh != null) {
            _queryParams["refresh"] = refresh.toString();
        }

        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.PolytomicEnvironment.Default,
                `api/connections/${encodeURIComponent(id)}/modelsync/target/fields`
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
                "X-Fern-SDK-Version": "1.10.1",
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
            return _response.body as Polytomic.TargetResponseEnvelope;
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
     * @param {string} id
     * @param {ModelSync.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Polytomic.BadRequestError}
     * @throws {@link Polytomic.UnauthorizedError}
     * @throws {@link Polytomic.ForbiddenError}
     * @throws {@link Polytomic.NotFoundError}
     * @throws {@link Polytomic.InternalServerError}
     *
     * @example
     *     await client.modelSync.getTargetObjects("248df4b7-aa70-47b8-a036-33ac447e668d")
     */
    public async getTargetObjects(
        id: string,
        requestOptions?: ModelSync.RequestOptions
    ): Promise<Polytomic.V4TargetObjectsResponseEnvelope> {
        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.PolytomicEnvironment.Default,
                `api/connections/${encodeURIComponent(id)}/modelsync/targetobjects`
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
                "X-Fern-SDK-Version": "1.10.1",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
            },
            contentType: "application/json",
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return _response.body as Polytomic.V4TargetObjectsResponseEnvelope;
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
     * @param {Polytomic.ModelSyncListRequest} request
     * @param {ModelSync.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Polytomic.BadRequestError}
     * @throws {@link Polytomic.UnauthorizedError}
     * @throws {@link Polytomic.NotFoundError}
     * @throws {@link Polytomic.InternalServerError}
     *
     * @example
     *     await client.modelSync.list({
     *         active: true,
     *         target_connection_id: "0b155265-c537-44c9-9359-a3ceb468a4da"
     *     })
     */
    public async list(
        request: Polytomic.ModelSyncListRequest = {},
        requestOptions?: ModelSync.RequestOptions
    ): Promise<Polytomic.ListModelSyncResponseEnvelope> {
        const { active, mode, target_connection_id: targetConnectionId } = request;
        const _queryParams: Record<string, string | string[] | object | object[]> = {};
        if (active != null) {
            _queryParams["active"] = active.toString();
        }

        if (mode != null) {
            _queryParams["mode"] = mode;
        }

        if (targetConnectionId != null) {
            _queryParams["target_connection_id"] = targetConnectionId;
        }

        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.PolytomicEnvironment.Default,
                "api/syncs"
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
                "X-Fern-SDK-Version": "1.10.1",
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
            return _response.body as Polytomic.ListModelSyncResponseEnvelope;
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
     * @param {Polytomic.CreateModelSyncRequest} request
     * @param {ModelSync.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Polytomic.BadRequestError}
     * @throws {@link Polytomic.UnauthorizedError}
     * @throws {@link Polytomic.ForbiddenError}
     * @throws {@link Polytomic.UnprocessableEntityError}
     * @throws {@link Polytomic.InternalServerError}
     *
     * @example
     *     await client.modelSync.create({
     *         fields: [{
     *                 target: "name"
     *             }],
     *         mode: "create",
     *         name: "Users Sync",
     *         schedule: {},
     *         target: {
     *             connection_id: "248df4b7-aa70-47b8-a036-33ac447e668d",
     *             object: "Users"
     *         }
     *     })
     */
    public async create(
        request: Polytomic.CreateModelSyncRequest,
        requestOptions?: ModelSync.RequestOptions
    ): Promise<Polytomic.ModelSyncResponseEnvelope> {
        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.PolytomicEnvironment.Default,
                "api/syncs"
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
                "X-Fern-SDK-Version": "1.10.1",
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
            return _response.body as Polytomic.ModelSyncResponseEnvelope;
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 400:
                    throw new Polytomic.BadRequestError(_response.error.body as Polytomic.ApiError);
                case 401:
                    throw new Polytomic.UnauthorizedError(_response.error.body as Polytomic.RestErrResponse);
                case 403:
                    throw new Polytomic.ForbiddenError(_response.error.body as Polytomic.ApiError);
                case 422:
                    throw new Polytomic.UnprocessableEntityError(_response.error.body as Polytomic.ApiError);
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
     * @param {ModelSync.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Polytomic.UnauthorizedError}
     * @throws {@link Polytomic.InternalServerError}
     *
     * @example
     *     await client.modelSync.getScheduleOptions()
     */
    public async getScheduleOptions(
        requestOptions?: ModelSync.RequestOptions
    ): Promise<Polytomic.ScheduleOptionResponseEnvelope> {
        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.PolytomicEnvironment.Default,
                "api/syncs/schedules"
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
                "X-Fern-SDK-Version": "1.10.1",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
            },
            contentType: "application/json",
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return _response.body as Polytomic.ScheduleOptionResponseEnvelope;
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
     * @param {string} id
     * @param {ModelSync.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Polytomic.UnauthorizedError}
     * @throws {@link Polytomic.NotFoundError}
     * @throws {@link Polytomic.InternalServerError}
     *
     * @example
     *     await client.modelSync.get("248df4b7-aa70-47b8-a036-33ac447e668d")
     */
    public async get(
        id: string,
        requestOptions?: ModelSync.RequestOptions
    ): Promise<Polytomic.ModelSyncResponseEnvelope> {
        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.PolytomicEnvironment.Default,
                `api/syncs/${encodeURIComponent(id)}`
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
                "X-Fern-SDK-Version": "1.10.1",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
            },
            contentType: "application/json",
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return _response.body as Polytomic.ModelSyncResponseEnvelope;
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
     * @param {Polytomic.UpdateModelSyncRequest} request
     * @param {ModelSync.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Polytomic.BadRequestError}
     * @throws {@link Polytomic.UnauthorizedError}
     * @throws {@link Polytomic.ForbiddenError}
     * @throws {@link Polytomic.NotFoundError}
     * @throws {@link Polytomic.UnprocessableEntityError}
     * @throws {@link Polytomic.InternalServerError}
     *
     * @example
     *     await client.modelSync.update("248df4b7-aa70-47b8-a036-33ac447e668d", {
     *         fields: [{
     *                 target: "name"
     *             }],
     *         mode: "create",
     *         name: "Users Sync",
     *         schedule: {},
     *         target: {
     *             connection_id: "248df4b7-aa70-47b8-a036-33ac447e668d",
     *             object: "Users"
     *         }
     *     })
     */
    public async update(
        id: string,
        request: Polytomic.UpdateModelSyncRequest,
        requestOptions?: ModelSync.RequestOptions
    ): Promise<Polytomic.ModelSyncResponseEnvelope> {
        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.PolytomicEnvironment.Default,
                `api/syncs/${encodeURIComponent(id)}`
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
                "X-Fern-SDK-Version": "1.10.1",
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
            return _response.body as Polytomic.ModelSyncResponseEnvelope;
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
                case 422:
                    throw new Polytomic.UnprocessableEntityError(_response.error.body as Polytomic.ApiError);
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
     * @param {ModelSync.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Polytomic.UnauthorizedError}
     * @throws {@link Polytomic.ForbiddenError}
     * @throws {@link Polytomic.NotFoundError}
     * @throws {@link Polytomic.InternalServerError}
     *
     * @example
     *     await client.modelSync.remove("248df4b7-aa70-47b8-a036-33ac447e668d")
     */
    public async remove(id: string, requestOptions?: ModelSync.RequestOptions): Promise<void> {
        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.PolytomicEnvironment.Default,
                `api/syncs/${encodeURIComponent(id)}`
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
                "X-Fern-SDK-Version": "1.10.1",
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
     * @param {string} id
     * @param {Polytomic.ActivateSyncInput} request
     * @param {ModelSync.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Polytomic.UnauthorizedError}
     * @throws {@link Polytomic.ForbiddenError}
     * @throws {@link Polytomic.NotFoundError}
     * @throws {@link Polytomic.InternalServerError}
     *
     * @example
     *     await client.modelSync.activate("248df4b7-aa70-47b8-a036-33ac447e668d", {
     *         active: true
     *     })
     */
    public async activate(
        id: string,
        request: Polytomic.ActivateSyncInput,
        requestOptions?: ModelSync.RequestOptions
    ): Promise<Polytomic.ActivateSyncEnvelope> {
        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.PolytomicEnvironment.Default,
                `api/syncs/${encodeURIComponent(id)}/activate`
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
                "X-Fern-SDK-Version": "1.10.1",
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
            return _response.body as Polytomic.ActivateSyncEnvelope;
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
     * > 🚧 Force full resync
     * >
     * > Use caution when setting the `resync` parameter to `true`. This will force a full resync of the data from the source system. This can be a time-consuming operation and may impact the performance of the source system. It is recommended to only use this option when necessary.
     *
     * @param {string} id
     * @param {Polytomic.StartModelSyncRequest} request
     * @param {ModelSync.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Polytomic.BadRequestError}
     * @throws {@link Polytomic.UnauthorizedError}
     * @throws {@link Polytomic.ForbiddenError}
     * @throws {@link Polytomic.NotFoundError}
     * @throws {@link Polytomic.ConflictError}
     * @throws {@link Polytomic.InternalServerError}
     *
     * @example
     *     await client.modelSync.start("248df4b7-aa70-47b8-a036-33ac447e668d")
     */
    public async start(
        id: string,
        request: Polytomic.StartModelSyncRequest = {},
        requestOptions?: ModelSync.RequestOptions
    ): Promise<Polytomic.StartModelSyncResponseEnvelope> {
        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.PolytomicEnvironment.Default,
                `api/syncs/${encodeURIComponent(id)}/executions`
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
                "X-Fern-SDK-Version": "1.10.1",
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
            return _response.body as Polytomic.StartModelSyncResponseEnvelope;
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
                case 409:
                    throw new Polytomic.ConflictError(_response.error.body as Polytomic.ApiError);
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
     * @param {ModelSync.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Polytomic.UnauthorizedError}
     * @throws {@link Polytomic.NotFoundError}
     * @throws {@link Polytomic.InternalServerError}
     *
     * @example
     *     await client.modelSync.getStatus("248df4b7-aa70-47b8-a036-33ac447e668d")
     */
    public async getStatus(
        id: string,
        requestOptions?: ModelSync.RequestOptions
    ): Promise<Polytomic.SyncStatusEnvelope> {
        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.PolytomicEnvironment.Default,
                `api/syncs/${encodeURIComponent(id)}/status`
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
                "X-Fern-SDK-Version": "1.10.1",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
            },
            contentType: "application/json",
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return _response.body as Polytomic.SyncStatusEnvelope;
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

    protected _executions: Executions | undefined;

    public get executions(): Executions {
        return (this._executions ??= new Executions(this._options));
    }

    protected async _getAuthorizationHeader(): Promise<string> {
        return `Bearer ${await core.Supplier.get(this._options.token)}`;
    }
}
