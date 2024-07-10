/**
 * This file was auto-generated from our API Definition.
 */

import * as Polytomic from "../index";

export interface CreateModelRequest {
    additional_fields?: Polytomic.ModelModelFieldRequest[];
    configuration: Record<string, unknown>;
    connection_id: string;
    enricher?: Polytomic.Enrichment;
    fields?: string[];
    identifier?: string;
    labels?: string[];
    name: string;
    organization_id?: string;
    policies?: string[];
    relations?: Polytomic.ModelRelation[];
    tracking_columns?: string[];
}
