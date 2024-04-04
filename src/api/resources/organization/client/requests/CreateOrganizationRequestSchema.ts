/**
 * This file was auto-generated from our API Definition.
 */

/**
 * @example
 *     {
 *         client_id: "client_id",
 *         client_secret: "client_secret",
 *         issuer: "https://example.com",
 *         name: "My Organization",
 *         sso_domain: "example.com",
 *         sso_org_id: "123456"
 *     }
 */
export interface CreateOrganizationRequestSchema {
    client_id?: string;
    client_secret?: string;
    issuer?: string;
    name: string;
    sso_domain?: string;
    sso_org_id?: string;
}
