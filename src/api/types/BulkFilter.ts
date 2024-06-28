/**
 * This file was auto-generated from our API Definition.
 */

import * as Polytomic from "..";

export interface BulkFilter {
    /** Schema field ID to filter on. */
    field_id?: string;
    function: Polytomic.FilterFunction;
    value?: unknown;
}
