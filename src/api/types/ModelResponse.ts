/**
 * This file was auto-generated from our API Definition.
 */

import * as Polytomic from "../index";

export interface ModelResponse {
    configuration?: Record<string, unknown>;
    connection_id?: string;
    created_at?: string;
    created_by?: Polytomic.CommonOutputActor;
    enricher?: Polytomic.Enrichment;
    fields?: Polytomic.ModelField[];
    id?: string;
    identifier?: string;
    labels?: Polytomic.LabelLabel[];
    name?: string;
    organization_id?: string;
    policies?: string[];
    relations?: Polytomic.Relation[];
    tracking_columns?: string[];
    type?: string;
    updated_at?: string;
    updated_by?: Polytomic.CommonOutputActor;
    version?: number;
}
