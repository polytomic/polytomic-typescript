/**
 * This file was auto-generated from our API Definition.
 */

import * as environments from "../../../../../../environments";
import * as core from "../../../../../../core";
import * as Polytomic from "../../../../../index";
import urlJoin from "url-join";
import * as errors from "../../../../../../errors/index";

export declare namespace Executions {
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

export class Executions {
    constructor(protected readonly _options: Executions.Options) {}

    /**
     * @param {Polytomic.bulkSync.ExecutionsListStatusRequest} request
     * @param {Executions.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Polytomic.UnauthorizedError}
     * @throws {@link Polytomic.NotFoundError}
     *
     * @example
     *     await client.bulkSync.executions.listStatus({
     *         all: true,
     *         active: true
     *     })
     */
    public async listStatus(
        request: Polytomic.bulkSync.ExecutionsListStatusRequest = {},
        requestOptions?: Executions.RequestOptions
    ): Promise<Polytomic.ListBulkSyncExecutionStatusEnvelope> {
        const { all, active, sync_id: syncId } = request;
        const _queryParams: Record<string, string | string[] | object | object[]> = {};
        if (all != null) {
            _queryParams["all"] = all.toString();
        }

        if (active != null) {
            _queryParams["active"] = active.toString();
        }

        if (syncId != null) {
            if (Array.isArray(syncId)) {
                _queryParams["sync_id"] = syncId.map((item) => item);
            } else {
                _queryParams["sync_id"] = syncId;
            }
        }

        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.PolytomicEnvironment.Default,
                "api/bulk/syncs/status"
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
                "X-Fern-SDK-Version": "1.8.4",
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
            return _response.body as Polytomic.ListBulkSyncExecutionStatusEnvelope;
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
     * @param {string} id
     * @param {Executions.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Polytomic.UnauthorizedError}
     * @throws {@link Polytomic.NotFoundError}
     *
     * @example
     *     await client.bulkSync.executions.list("248df4b7-aa70-47b8-a036-33ac447e668d")
     */
    public async list(
        id: string,
        requestOptions?: Executions.RequestOptions
    ): Promise<Polytomic.ListBulkSyncExecutionsEnvelope> {
        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.PolytomicEnvironment.Default,
                `api/bulk/syncs/${encodeURIComponent(id)}/executions`
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
                "X-Fern-SDK-Version": "1.8.4",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
            },
            contentType: "application/json",
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return _response.body as Polytomic.ListBulkSyncExecutionsEnvelope;
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
     * @param {string} id
     * @param {string} execId
     * @param {Executions.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Polytomic.UnauthorizedError}
     * @throws {@link Polytomic.NotFoundError}
     *
     * @example
     *     await client.bulkSync.executions.get("248df4b7-aa70-47b8-a036-33ac447e668d", "248df4b7-aa70-47b8-a036-33ac447e668d")
     */
    public async get(
        id: string,
        execId: string,
        requestOptions?: Executions.RequestOptions
    ): Promise<Polytomic.BulkSyncExecutionEnvelope> {
        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.PolytomicEnvironment.Default,
                `api/bulk/syncs/${encodeURIComponent(id)}/executions/${encodeURIComponent(execId)}`
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
                "X-Fern-SDK-Version": "1.8.4",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
            },
            contentType: "application/json",
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return _response.body as Polytomic.BulkSyncExecutionEnvelope;
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

    protected async _getAuthorizationHeader(): Promise<string> {
        return `Bearer ${await core.Supplier.get(this._options.token)}`;
    }
}
