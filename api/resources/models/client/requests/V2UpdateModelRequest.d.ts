/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as PolytomicApi from "../../../..";
export interface V2UpdateModelRequest {
    additionalFields?: PolytomicApi.V2ModelFieldRequest[];
    configuration?: Record<string, unknown>;
    connectionId: string;
    fields?: string[];
    identifier?: string;
    labels?: string[];
    name: string;
    organizationId?: string;
    policies?: string[];
    relations?: PolytomicApi.V2Relation[];
    trackingColumns?: string[];
}
