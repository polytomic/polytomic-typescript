/**
 * This file was auto-generated from our API Definition.
 */

import * as environments from "./environments";
import * as core from "./core";
import { BulkSync } from "./api/resources/bulkSync/client/Client";
import { Connections } from "./api/resources/connections/client/Client";
import { Schemas } from "./api/resources/schemas/client/Client";
import { Events } from "./api/resources/events/client/Client";
import { Jobs } from "./api/resources/jobs/client/Client";
import { Models } from "./api/resources/models/client/Client";
import { Organization } from "./api/resources/organization/client/Client";
import { Users } from "./api/resources/users/client/Client";
import { Permissions } from "./api/resources/permissions/client/Client";
import { ModelSync } from "./api/resources/modelSync/client/Client";
import { Webhooks } from "./api/resources/webhooks/client/Client";

export declare namespace PolytomicClient {
    interface Options {
        environment?: core.Supplier<environments.PolytomicEnvironment | string>;
        token?: core.Supplier<core.BearerToken | undefined>;
        xPolytomicVersion?: core.Supplier<"2023-04-25" | undefined>;
    }

    interface RequestOptions {
        timeoutInSeconds?: number;
        maxRetries?: number;
    }
}

export class PolytomicClient {
    constructor(protected readonly _options: PolytomicClient.Options = {}) {}

    protected _bulkSync: BulkSync | undefined;

    public get bulkSync(): BulkSync {
        return (this._bulkSync ??= new BulkSync(this._options));
    }

    protected _connections: Connections | undefined;

    public get connections(): Connections {
        return (this._connections ??= new Connections(this._options));
    }

    protected _schemas: Schemas | undefined;

    public get schemas(): Schemas {
        return (this._schemas ??= new Schemas(this._options));
    }

    protected _events: Events | undefined;

    public get events(): Events {
        return (this._events ??= new Events(this._options));
    }

    protected _jobs: Jobs | undefined;

    public get jobs(): Jobs {
        return (this._jobs ??= new Jobs(this._options));
    }

    protected _models: Models | undefined;

    public get models(): Models {
        return (this._models ??= new Models(this._options));
    }

    protected _organization: Organization | undefined;

    public get organization(): Organization {
        return (this._organization ??= new Organization(this._options));
    }

    protected _users: Users | undefined;

    public get users(): Users {
        return (this._users ??= new Users(this._options));
    }

    protected _permissions: Permissions | undefined;

    public get permissions(): Permissions {
        return (this._permissions ??= new Permissions(this._options));
    }

    protected _modelSync: ModelSync | undefined;

    public get modelSync(): ModelSync {
        return (this._modelSync ??= new ModelSync(this._options));
    }

    protected _webhooks: Webhooks | undefined;

    public get webhooks(): Webhooks {
        return (this._webhooks ??= new Webhooks(this._options));
    }
}
