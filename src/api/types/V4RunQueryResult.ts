/**
 * This file was auto-generated from our API Definition.
 */

import * as Polytomic from "../index";

export interface V4RunQueryResult {
    /** The number of rows returned by the query. This will not be returned until the query completes. */
    count?: number;
    error?: string;
    /** The time at which the query will expire and be deleted. This will not be returned until the query completes. */
    expires?: string;
    /** The names of the fields returned by the query. This will not be returned until the query completes. */
    fields?: string[];
    /** The ID of the query task. */
    id?: string;
    /** The query results, returned as an array of objects. */
    results?: Record<string, unknown>[];
    status?: Polytomic.WorkTaskStatus;
}
