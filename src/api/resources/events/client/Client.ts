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
        token?: core.Supplier<core.BearerToken | undefined>;
        polytomicVersion?: core.Supplier<"2022-12-12" | undefined>;
    }

    interface RequestOptions {
        timeoutInSeconds?: number;
        maxRetries?: number;
    }
}

export class Events {
    constructor(protected readonly _options: Events.Options = {}) {}

    /**
     * @throws {@link Polytomic.UnauthorizedError}
     *
     * @example
     *     await polytomic.events.apiV2GetEvents({
     *         organization_id: "248df4b7-aa70-47b8-a036-33ac447e668d",
     *         starting_after: new Date("2020-01-01T00:00:00.000Z"),
     *         ending_before: new Date("2020-01-01T00:00:00.000Z")
     *     })
     */
    public async apiV2GetEvents(
        request: Polytomic.EventsApiV2GetEventsRequest = {},
        requestOptions?: Events.RequestOptions
    ): Promise<Polytomic.V2EventsEnvelope> {
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
            return _response.body as Polytomic.V2EventsEnvelope;
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
     *     await polytomic.events.apiV2GetEventTypes()
     */
    public async apiV2GetEventTypes(requestOptions?: Events.RequestOptions): Promise<Polytomic.V2EventTypesEnvelope> {
        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.PolytomicEnvironment.Default,
                "api/events_types"
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
            return _response.body as Polytomic.V2EventTypesEnvelope;
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
