/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * @example
 *     {
 *         name: "My Organization"
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
