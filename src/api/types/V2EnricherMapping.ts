/**
 * This file was auto-generated from our API Definition.
 */

/**
 * A map of parent model Source Name to child model Source Name. For example, if your model has a field called `work_email` and the enricher accepts a field called `email`, you'd send a map of `{"work_email":"email"}`. The set of required input mappings varies based on the configuration of the enrichment. You can use the `enrichment/{connection_id}/inputfields` API to discover available input field combinations for a given configuration.
 */
export type V2EnricherMapping = Record<string, string>;
