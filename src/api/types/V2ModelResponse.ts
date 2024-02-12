/**
 * This file was auto-generated from our API Definition.
 */

import * as Polytomic from "..";

export interface V2ModelResponse {
    configuration?: Record<string, unknown>;
    connection_id?: string;
    fields?: Polytomic.V2ModelField[];
    id?: string;
    identifier?: string;
    labels?: Polytomic.LabelLabel[];
    name?: string;
    organization_id?: string;
    policies?: string[];
    relations?: Polytomic.V2Relation[];
    tracking_columns?: string[];
    type?: string;
    version?: number;
}
