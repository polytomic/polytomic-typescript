/**
 * This file was auto-generated from our API Definition.
 */

import * as environments from "../../../../environments";
import * as core from "../../../../core";
import * as Polytomic from "../../..";
import urlJoin from "url-join";
import * as errors from "../../../../errors";

export declare namespace Events {
    interface Options {
        environment?: core.Supplier<environments.PolytomicEnvironment | string>;
        token: core.Supplier<core.BearerToken>;
    }

    interface RequestOptions {
        timeoutInSeconds?: number;
        maxRetries?: number;
    }
}

export class Events {
    constructor(protected readonly _options: Events.Options) {}

    /**
     * @throws {@link Polytomic.UnauthorizedError}
     * @throws {@link Polytomic.UnprocessableEntityError}
     * @throws {@link Polytomic.InternalServerError}
     *
     * @example
     *     await polytomic.events.list({
     *         organization_id: "248df4b7-aa70-47b8-a036-33ac447e668d",
     *         starting_after: new Date("2020-01-01T00:00:00.000Z"),
     *         ending_before: new Date("2020-01-01T00:00:00.000Z")
     *     })
     */
    public async list(
        request: Polytomic.EventsListRequest = {},
        requestOptions?: Events.RequestOptions
    ): Promise<Polytomic.EventsEnvelope> {
        const {
            organization_id: organizationId,
            type: type_,
            starting_after: startingAfter,
            ending_before: endingBefore,
            limit,
        } = request;
        const _queryParams: Record<string, string | string[]> = {};
        if (organizationId != null) {
            _queryParams["organization_id"] = organizationId;
        }

        if (type_ != null) {
            _queryParams["type"] = type_;
        }

        if (startingAfter != null) {
            _queryParams["starting_after"] = startingAfter;
        }

        if (endingBefore != null) {
            _queryParams["ending_before"] = endingBefore;
        }

        if (limit != null) {
            _queryParams["limit"] = limit.toString();
        }

        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.PolytomicEnvironment.Default,
                "api/events"
            ),
            method: "GET",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Polytomic-Version": "2024-02-08",
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "polytomic",
                "X-Fern-SDK-Version": "1.3.0",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
            },
            contentType: "application/json",
            queryParameters: _queryParams,
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
        });
        if (_response.ok) {
            return _response.body as Polytomic.EventsEnvelope;
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 401:
                    throw new Polytomic.UnauthorizedError(_response.error.body as Polytomic.RestErrResponse);
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
     * @throws {@link Polytomic.UnauthorizedError}
     *
     * @example
     *     await polytomic.events.getTypes()
     */
    public async getTypes(requestOptions?: Events.RequestOptions): Promise<Polytomic.EventTypesEnvelope> {
        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.PolytomicEnvironment.Default,
                "api/events_types"
            ),
            method: "GET",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Polytomic-Version": "2024-02-08",
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "polytomic",
                "X-Fern-SDK-Version": "1.3.0",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
            },
            contentType: "application/json",
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
        });
        if (_response.ok) {
            return _response.body as Polytomic.EventTypesEnvelope;
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
        return `Bearer ${await core.Supplier.get(this._options.token)}`;
    }
}
