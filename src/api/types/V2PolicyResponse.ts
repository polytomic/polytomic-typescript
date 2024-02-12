/**
 * This file was auto-generated from our API Definition.
 */

import * as Polytomic from "..";

export interface V2PolicyResponse {
    id?: string;
    name?: string;
    organization_id?: string;
    policy_actions?: Polytomic.V2PolicyAction[];
    system?: boolean;
}
