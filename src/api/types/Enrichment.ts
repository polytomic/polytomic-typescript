/**
 * This file was auto-generated from our API Definition.
 */

import * as Polytomic from "../index";

export interface Enrichment {
    configuration?: Polytomic.V2EnricherConfiguration;
    connection_id?: string;
    /** Must be provided to update an existing enrichment */
    enricher_id?: string;
    /** If not provided, all fields will be enabled. */
    fields?: Polytomic.ModelField[];
    mappings?: Polytomic.V2EnricherMapping;
}
