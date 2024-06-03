/**
 * This file was auto-generated from our API Definition.
 */

import * as Polytomic from "..";

/**
 * Either `field` or `field_id` must be provided. If `field` is provided, `field_id` is ignored.
 */
export interface Filter {
    field?: Polytomic.Source;
    /** Model or Target field name to filter on. */
    field_id?: string;
    field_type?: Polytomic.FilterFieldReferenceType;
    function: Polytomic.FilterFunction;
    label?: string;
    value?: unknown;
}
