/**
 * This file was auto-generated from our API Definition.
 */

/**
 * @example
 *     {
 *         name: "My Postgres Connection",
 *         type: "postgresql"
 *     }
 */
export interface CreateConnectionRequestSchema {
    configuration?: Record<string, unknown>;
    name: string;
    organization_id?: string;
    policies?: string[];
    /** URL to redirect to after completing OAuth flow. */
    redirect_url?: string;
    type: string;
    /** Validate connection configuration. */
    validate?: boolean;
}
