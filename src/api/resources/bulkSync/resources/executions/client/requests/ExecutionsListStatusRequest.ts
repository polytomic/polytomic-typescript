/**
 * This file was auto-generated from our API Definition.
 */

/**
 * @example
 *     {}
 */
export interface ExecutionsListStatusRequest {
    /**
     * Return the execution status of all syncs in the organization
     */
    all?: boolean;
    /**
     * Return the execution status of all active syncs in the organization
     */
    active?: boolean;
    /**
     * Return the execution status of the specified sync; this may be supplied multiple times.
     */
    sync_id?: string | string[];
}
