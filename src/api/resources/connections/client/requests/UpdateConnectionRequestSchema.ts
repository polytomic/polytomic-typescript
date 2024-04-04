/**
 * This file was auto-generated from our API Definition.
 */

/**
 * @example
 *     {
 *         name: "My Connection",
 *         reconnect: false,
 *         type: "s3",
 *         validate: true
 *     }
 */
export interface UpdateConnectionRequestSchema {
    configuration?: Record<string, unknown>;
    name: string;
    organization_id?: string;
    policies?: string[];
    reconnect?: boolean;
    type?: string;
    /** Validate connection configuration. */
    validate?: boolean;
}
