/**
 * This file was auto-generated from our API Definition.
 */

/**
 * @example
 *     {
 *         endpoint: "https://example.com/webhook",
 *         secret: "secret"
 *     }
 */
export interface CreateWebhooksSchema {
    endpoint: string;
    organization_id?: string;
    secret: string;
}
