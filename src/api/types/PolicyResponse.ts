/**
 * This file was auto-generated from our API Definition.
 */

import * as Polytomic from "..";

export interface PolicyResponse {
    id?: string;
    name?: string;
    organization_id?: string;
    policy_actions?: Polytomic.PolicyAction[];
    system?: boolean;
}
