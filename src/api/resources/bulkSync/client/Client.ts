/**
 * This file was auto-generated from our API Definition.
 */

import * as environments from "../../../../environments";
import * as core from "../../../../core";
import * as Polytomic from "../../..";
import urlJoin from "url-join";
import * as errors from "../../../../errors";
import { Executions } from "../resources/executions/client/Client";
import { Schemas } from "../resources/schemas/client/Client";

export declare namespace BulkSync {
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

export class BulkSync {
    constructor(protected readonly _options: BulkSync.Options = {}) {}

    /**
     * @throws {@link Polytomic.UnauthorizedError}
     *
     * @example
     *     await polytomic.bulkSync.getDestination("248df4b7-aa70-47b8-a036-33ac447e668d")
     */
    public async getDestination(
        id: string,
        requestOptions?: BulkSync.RequestOptions
    ): Promise<Polytomic.V2BulkSyncDestEnvelope> {
        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.PolytomicEnvironment.Default,
                `api/bulk/dest/${id}`
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
                "X-Fern-SDK-Version": "0.0.2",
            },
            contentType: "application/json",
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
        });
        if (_response.ok) {
            return _response.body as Polytomic.V2BulkSyncDestEnvelope;
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
     * @throws {@link Polytomic.UnauthorizedError}
     *
     * @example
     *     await polytomic.bulkSync.getSource("248df4b7-aa70-47b8-a036-33ac447e668d", {})
     */
    public async getSource(
        connectionId: string,
        request: Polytomic.BulkSyncGetSourceRequest = {},
        requestOptions?: BulkSync.RequestOptions
    ): Promise<Polytomic.V3BulkSyncSourceEnvelope> {
        const { refresh_schemas: refreshSchemas, include_fields: includeFields } = request;
        const _queryParams: Record<string, string | string[]> = {};
        if (refreshSchemas != null) {
            _queryParams["refresh_schemas"] = refreshSchemas.toString();
        }

        if (includeFields != null) {
            _queryParams["include_fields"] = includeFields.toString();
        }

        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.PolytomicEnvironment.Default,
                `api/bulk/source/${connectionId}`
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
                "X-Fern-SDK-Version": "0.0.2",
            },
            contentType: "application/json",
            queryParameters: _queryParams,
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
        });
        if (_response.ok) {
            return _response.body as Polytomic.V3BulkSyncSourceEnvelope;
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
     * @throws {@link Polytomic.UnauthorizedError}
     *
     * @example
     *     await polytomic.bulkSync.getSourceSchema("248df4b7-aa70-47b8-a036-33ac447e668d", "schema_id")
     */
    public async getSourceSchema(
        connectionId: string,
        schemaId: string,
        requestOptions?: BulkSync.RequestOptions
    ): Promise<Polytomic.V3BulkSyncSourceSchemaEnvelope> {
        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.PolytomicEnvironment.Default,
                `api/bulk/source/${connectionId}/schema/${schemaId}`
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
                "X-Fern-SDK-Version": "0.0.2",
            },
            contentType: "application/json",
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
        });
        if (_response.ok) {
            return _response.body as Polytomic.V3BulkSyncSourceSchemaEnvelope;
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
     * @throws {@link Polytomic.UnauthorizedError}
     *
     * @example
     *     await polytomic.bulkSync.apiV3GetBulkSourceStatus("248df4b7-aa70-47b8-a036-33ac447e668d")
     */
    public async apiV3GetBulkSourceStatus(
        connectionId: string,
        requestOptions?: BulkSync.RequestOptions
    ): Promise<Polytomic.V3BulkSyncSourceStatusEnvelope> {
        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.PolytomicEnvironment.Default,
                `api/bulk/source/${connectionId}/status`
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
                "X-Fern-SDK-Version": "0.0.2",
            },
            contentType: "application/json",
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
        });
        if (_response.ok) {
            return _response.body as Polytomic.V3BulkSyncSourceStatusEnvelope;
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
     * @throws {@link Polytomic.UnauthorizedError}
     *
     * @example
     *     await polytomic.bulkSync.list()
     */
    public async list(requestOptions?: BulkSync.RequestOptions): Promise<Polytomic.V2BulkSyncListEnvelope> {
        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.PolytomicEnvironment.Default,
                "api/bulk/syncs"
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
                "X-Fern-SDK-Version": "0.0.2",
            },
            contentType: "application/json",
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
        });
        if (_response.ok) {
            return _response.body as Polytomic.V2BulkSyncListEnvelope;
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
     * @throws {@link Polytomic.UnauthorizedError}
     *
     * @example
     *     await polytomic.bulkSync.create({
     *         destination_connection_id: "248df4b7-aa70-47b8-a036-33ac447e668d",
     *         mode: "mode",
     *         name: "name",
     *         schedule: {
     *             frequency: "frequency"
     *         },
     *         source_connection_id: "248df4b7-aa70-47b8-a036-33ac447e668d"
     *     })
     */
    public async create(
        request: Polytomic.V2CreateBulkSyncRequest,
        requestOptions?: BulkSync.RequestOptions
    ): Promise<Polytomic.V2BulkSyncResponseEnvelope> {
        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.PolytomicEnvironment.Default,
                "api/bulk/syncs"
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
                "X-Fern-SDK-Version": "0.0.2",
            },
            contentType: "application/json",
            body: request,
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
        });
        if (_response.ok) {
            return _response.body as Polytomic.V2BulkSyncResponseEnvelope;
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
     * @throws {@link Polytomic.UnauthorizedError}
     *
     * @example
     *     await polytomic.bulkSync.get("248df4b7-aa70-47b8-a036-33ac447e668d", {})
     */
    public async get(
        id: string,
        request: Polytomic.BulkSyncGetRequest = {},
        requestOptions?: BulkSync.RequestOptions
    ): Promise<Polytomic.V2BulkSyncResponseEnvelope> {
        const { refresh_schemas: refreshSchemas } = request;
        const _queryParams: Record<string, string | string[]> = {};
        if (refreshSchemas != null) {
            _queryParams["refresh_schemas"] = refreshSchemas.toString();
        }

        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.PolytomicEnvironment.Default,
                `api/bulk/syncs/${id}`
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
                "X-Fern-SDK-Version": "0.0.2",
            },
            contentType: "application/json",
            queryParameters: _queryParams,
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
        });
        if (_response.ok) {
            return _response.body as Polytomic.V2BulkSyncResponseEnvelope;
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
     * @throws {@link Polytomic.UnauthorizedError}
     *
     * @example
     *     await polytomic.bulkSync.remove("248df4b7-aa70-47b8-a036-33ac447e668d", {})
     */
    public async remove(
        id: string,
        request: Polytomic.BulkSyncRemoveRequest = {},
        requestOptions?: BulkSync.RequestOptions
    ): Promise<void> {
        const { refresh_schemas: refreshSchemas } = request;
        const _queryParams: Record<string, string | string[]> = {};
        if (refreshSchemas != null) {
            _queryParams["refresh_schemas"] = refreshSchemas.toString();
        }

        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.PolytomicEnvironment.Default,
                `api/bulk/syncs/${id}`
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
                "X-Fern-SDK-Version": "0.0.2",
            },
            contentType: "application/json",
            queryParameters: _queryParams,
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
     * > 📘 Updating schemas
     * >
     * > Schema updates can be performed using the [Update Bulk Sync Schemas](https://docs.polytomic.com/reference/apiv3updatebulksyncschemas) endpoint.
     * @throws {@link Polytomic.UnauthorizedError}
     *
     * @example
     *     await polytomic.bulkSync.update("248df4b7-aa70-47b8-a036-33ac447e668d", {
     *         destination_connection_id: "248df4b7-aa70-47b8-a036-33ac447e668d",
     *         mode: "mode",
     *         name: "name",
     *         schedule: {
     *             frequency: "frequency"
     *         },
     *         source_connection_id: "248df4b7-aa70-47b8-a036-33ac447e668d"
     *     })
     */
    public async update(
        id: string,
        request: Polytomic.V2UpdateBulkSyncRequest,
        requestOptions?: BulkSync.RequestOptions
    ): Promise<Polytomic.V2BulkSyncResponseEnvelope> {
        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.PolytomicEnvironment.Default,
                `api/bulk/syncs/${id}`
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
                "X-Fern-SDK-Version": "0.0.2",
            },
            contentType: "application/json",
            body: request,
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
        });
        if (_response.ok) {
            return _response.body as Polytomic.V2BulkSyncResponseEnvelope;
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
     * @throws {@link Polytomic.UnauthorizedError}
     *
     * @example
     *     await polytomic.bulkSync.activate("248df4b7-aa70-47b8-a036-33ac447e668d", {
     *         active: true
     *     })
     */
    public async activate(
        id: string,
        request: Polytomic.V2ActivateSyncInput,
        requestOptions?: BulkSync.RequestOptions
    ): Promise<Polytomic.V2ActivateSyncEnvelope> {
        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.PolytomicEnvironment.Default,
                `api/bulk/syncs/${id}/activate`
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
                "X-Fern-SDK-Version": "0.0.2",
            },
            contentType: "application/json",
            body: request,
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
        });
        if (_response.ok) {
            return _response.body as Polytomic.V2ActivateSyncEnvelope;
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
     * @throws {@link Polytomic.UnauthorizedError}
     *
     * @example
     *     await polytomic.bulkSync.getStatus("248df4b7-aa70-47b8-a036-33ac447e668d")
     */
    public async getStatus(
        id: string,
        requestOptions?: BulkSync.RequestOptions
    ): Promise<Polytomic.V3BulkSyncStatusEnvelope> {
        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.PolytomicEnvironment.Default,
                `api/bulk/syncs/${id}/status`
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
                "X-Fern-SDK-Version": "0.0.2",
            },
            contentType: "application/json",
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
        });
        if (_response.ok) {
            return _response.body as Polytomic.V3BulkSyncStatusEnvelope;
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

    protected _executions: Executions | undefined;

    public get executions(): Executions {
        return (this._executions ??= new Executions(this._options));
    }

    protected _schemas: Schemas | undefined;

    public get schemas(): Schemas {
        return (this._schemas ??= new Schemas(this._options));
    }

    protected async _getAuthorizationHeader() {
        const bearer = await core.Supplier.get(this._options.token);
        if (bearer != null) {
            return `Bearer ${bearer}`;
        }

        return undefined;
    }
}
