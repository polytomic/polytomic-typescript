/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Polytomic from "../index";

export interface BulkFilter {
    /** Schema field ID to filter on. */
    field_id?: string;
    function: Polytomic.FilterFunction;
    value?: unknown;
}
