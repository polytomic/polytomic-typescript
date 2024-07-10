/**
 * This file was auto-generated from our API Definition.
 */

import * as Polytomic from "../../../../../../index";

/**
 * @example
 *     {
 *         name: "Custom"
 *     }
 */
export interface CreatePolicyRequest {
    name: string;
    organization_id?: string;
    policy_actions?: Polytomic.PolicyAction[];
}
