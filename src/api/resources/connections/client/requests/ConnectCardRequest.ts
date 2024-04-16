/**
 * This file was auto-generated from our API Definition.
 */

/**
 * @example
 *     {
 *         connection: "248df4b7-aa70-47b8-a036-33ac447e668d",
 *         name: "Salesforce Connection",
 *         redirect_url: "redirect_url",
 *         type: "salesforce"
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
