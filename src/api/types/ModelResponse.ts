/**
 * This file was auto-generated from our API Definition.
 */

import * as Polytomic from "..";

export interface ModelResponse {
    configuration?: Record<string, unknown>;
    connection_id?: string;
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
    version?: number;
}
