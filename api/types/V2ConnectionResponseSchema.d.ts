/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as PolytomicApi from "..";
export interface V2ConnectionResponseSchema {
    configuration?: Record<string, unknown>;
    id?: string;
    name?: string;
    organizationId?: string;
    policies?: string[];
    status?: string;
    statusError?: string;
    type?: PolytomicApi.V2ConnectionTypeSchema;
}
