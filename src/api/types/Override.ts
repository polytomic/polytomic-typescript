/**
 * This file was auto-generated from our API Definition.
 */

import * as Polytomic from "../index";

/**
 * Either `field` or `field_id` must be provided. If `field_id` is provided, `field` is ignored.
 */
export interface Override {
    field?: Polytomic.Source;
    /** Field ID of the model field to override. */
    field_id?: string;
    function?: Polytomic.FilterFunction;
    override?: unknown;
    value?: unknown;
}
