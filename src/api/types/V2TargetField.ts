/**
 * This file was auto-generated from our API Definition.
 */

import * as Polytomic from "..";

export interface V2TargetField {
    association?: boolean;
    createable?: boolean;
    description?: string;
    filterable?: boolean;
    id?: string;
    identity_functions?: Polytomic.V2IdentityFunction[];
    name?: string;
    required?: boolean;
    source_type?: string;
    supports_identity?: boolean;
    type?: string;
    updateable?: boolean;
}
