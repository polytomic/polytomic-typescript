/**
 * This file was auto-generated from our API Definition.
 */

import * as Polytomic from "../../../../../..";

/**
 * @example
 *     {
 *         name: "Custom",
 *         policy_actions: [{
 *                 action: "read",
 *                 role_ids: ["248df4b7-aa70-47b8-a036-33ac447e668d"]
 *             }]
 *     }
 */
export interface V2UpdatePolicyRequest {
    name: string;
    organization_id?: string;
    policy_actions?: Polytomic.V2PolicyAction[];
}
