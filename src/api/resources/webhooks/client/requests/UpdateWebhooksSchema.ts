/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * @example
 *     {
 *         endpoint: "https://example.com/webhook",
 *         secret: "secret"
 *     }
 */
export interface UpdateWebhooksSchema {
    endpoint: string;
    organization_id?: string;
    secret: string;
}
