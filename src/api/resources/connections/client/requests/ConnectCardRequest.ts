/**
 * This file was auto-generated from our API Definition.
 */

/**
 * @example
 *     {
 *         name: "Salesforce Connection",
 *         redirect_url: "redirect_url"
 *     }
 */
export interface ConnectCardRequest {
    connection?: string;
    name: string;
    organization_id?: string;
    redirect_url: string;
    type?: string;
    whitelist?: string[];
}
