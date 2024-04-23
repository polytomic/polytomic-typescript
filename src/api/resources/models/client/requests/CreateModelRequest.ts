/**
 * This file was auto-generated from our API Definition.
 */

import * as Polytomic from "../../../..";

/**
 * @example
 *     {
 *         connection_id: "248df4b7-aa70-47b8-a036-33ac447e668d",
 *         name: "Users"
 *     }
 */
export interface CreateModelRequest {
    async?: boolean;
    additional_fields?: Polytomic.ModelModelFieldRequest[];
    configuration?: Record<string, unknown>;
    connection_id: string;
    fields?: string[];
    identifier?: string;
    labels?: string[];
    name: string;
    organization_id?: string;
    policies?: string[];
    relations?: Polytomic.ModelRelation[];
    tracking_columns?: string[];
}
