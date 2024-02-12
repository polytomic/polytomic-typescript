/**
 * This file was auto-generated from our API Definition.
 */

import * as Polytomic from "../../../..";

/**
 * @example
 *     {
 *         connection_id: "248df4b7-aa70-47b8-a036-33ac447e668d",
 *         name: "name"
 *     }
 */
export interface V2CreateModelRequest {
    additional_fields?: Polytomic.V2ModelFieldRequest[];
    configuration?: Record<string, unknown>;
    connection_id: string;
    fields?: string[];
    identifier?: string;
    labels?: string[];
    name: string;
    organization_id?: string;
    policies?: string[];
    relations?: Polytomic.V2Relation[];
    tracking_columns?: string[];
}
