/**
 * This file was auto-generated from our API Definition.
 */

import * as Polytomic from "../index";

export interface SchemaField {
    association?: Polytomic.SchemaAssociation;
    id?: string;
    name?: string;
    /** The type of the field from the remote system. */
    remote_type?: string;
    type?: Polytomic.UtilFieldType;
    type_spec?: Polytomic.TypesType | undefined;
    values?: Polytomic.PickValue[];
}
