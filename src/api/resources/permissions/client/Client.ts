/**
 * This file was auto-generated from our API Definition.
 */

import * as environments from "../../../../environments";
import * as core from "../../../../core";
import { Policies } from "../resources/policies/client/Client";
import { Roles } from "../resources/roles/client/Client";

export declare namespace Permissions {
    interface Options {
        environment?: core.Supplier<environments.PolytomicEnvironment | string>;
        token: core.Supplier<core.BearerToken>;
        version?: core.Supplier<string | undefined>;
    }

    interface RequestOptions {
        timeoutInSeconds?: number;
        maxRetries?: number;
    }
}

export class Permissions {
    constructor(protected readonly _options: Permissions.Options) {}

    protected _policies: Policies | undefined;

    public get policies(): Policies {
        return (this._policies ??= new Policies(this._options));
    }

    protected _roles: Roles | undefined;

    public get roles(): Roles {
        return (this._roles ??= new Roles(this._options));
    }
}
