/**
 * This file was auto-generated from our API Definition.
 */

/**
 * @example
 *     {
 *         configuration: {
 *             "database": "example",
 *             "hostname": "postgres.example.com",
 *             "password": "password",
 *             "port": 5432,
 *             "username": "user"
 *         },
 *         name: "My Postgres Connection"
 *     }
 */
export interface UpdateConnectionRequestSchema {
    configuration: Record<string, unknown>;
    name: string;
    organization_id?: string;
    policies?: string[];
    reconnect?: boolean;
    type?: string;
    /** Validate connection configuration. */
    validate?: boolean;
}
