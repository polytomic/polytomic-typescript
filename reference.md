# Reference

## BulkSync

<details><summary><code>client.bulkSync.<a href="/src/api/resources/bulkSync/client/Client.ts">list</a>({ ...params }) -> Polytomic.BulkSyncListEnvelope</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.bulkSync.list({
    active: true,
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Polytomic.BulkSyncListRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `BulkSync.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.bulkSync.<a href="/src/api/resources/bulkSync/client/Client.ts">create</a>({ ...params }) -> Polytomic.BulkSyncResponseEnvelope</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Create a new Bulk Sync from a source to a destination (data warehouse, database, or cloud storage bucket like S3).

Bulk Syncs are used for the ELT pattern (Extract, Load, and Transform), where you want to sync un-transformed data to your data warehouses, databases, or cloud storage buckets like S3.

All of the functionality described in [the product
documentation](https://docs.polytomic.com/docs/bulk-syncs) is configurable via
the API.

Sample code examples:

- [Bulk sync (ELT) from Salesforce to S3](https://apidocs.polytomic.com/guides/code-examples/bulk-sync-elt-from-salesforce-to-s-3)
- [Bulk sync (ELT) from Salesforce to Snowflake](https://apidocs.polytomic.com/guides/code-examples/bulk-sync-elt-from-salesforce-to-snowflake)
- [Bulk sync (ELT) from HubSpot to PostgreSQL](https://apidocs.polytomic.com/guides/code-examples/bulk-sync-elt-from-hub-spot-to-postgre-sql)

## Connection specific configuration

The `destination_configuration` is integration-specific configuration for the
selected bulk sync destination. This includes settings such as the output schema
and is required when creating a new sync.

The `source_configuration` is optional. It allows configuration for how
Polytomic reads data from the source connection. This will not be available for
integrations that do not support additional configuration.

Consult the [connection configurations](https://apidocs.polytomic.com/2024-02-08/guides/configuring-your-connections/overview)
to see configurations for particular integrations (for example, [here](https://apidocs.polytomic.com/2024-02-08/guides/configuring-your-connections/connections/postgre-sql#source-1) is the available source configuration for the PostgreSQL bulk sync source).

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.bulkSync.create({
    destination_configuration: {
        schema: "my_schema",
    },
    destination_connection_id: "248df4b7-aa70-47b8-a036-33ac447e668d",
    name: "My Bulk Sync",
    schedule: {
        frequency: "manual",
    },
    source_connection_id: "248df4b7-aa70-47b8-a036-33ac447e668d",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Polytomic.CreateBulkSyncRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `BulkSync.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.bulkSync.<a href="/src/api/resources/bulkSync/client/Client.ts">get</a>(id, { ...params }) -> Polytomic.BulkSyncResponseEnvelope</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.bulkSync.get("248df4b7-aa70-47b8-a036-33ac447e668d", {
    refresh_schemas: true,
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Polytomic.BulkSyncGetRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `BulkSync.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.bulkSync.<a href="/src/api/resources/bulkSync/client/Client.ts">update</a>(id, { ...params }) -> Polytomic.BulkSyncResponseEnvelope</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

> 📘 Updating schemas
>
> Schema updates can be performed using the [Update Bulk Sync Schemas](https://apidocs.polytomic.com/api-reference/bulk-sync/schemas/patch) endpoint.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.bulkSync.update("248df4b7-aa70-47b8-a036-33ac447e668d", {
    destination_configuration: {
        schema: "my_schema",
    },
    destination_connection_id: "248df4b7-aa70-47b8-a036-33ac447e668d",
    name: "My Bulk Sync",
    schedule: {
        frequency: "manual",
    },
    source_connection_id: "248df4b7-aa70-47b8-a036-33ac447e668d",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Polytomic.UpdateBulkSyncRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `BulkSync.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.bulkSync.<a href="/src/api/resources/bulkSync/client/Client.ts">remove</a>(id, { ...params }) -> void</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.bulkSync.remove("248df4b7-aa70-47b8-a036-33ac447e668d", {
    refresh_schemas: true,
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Polytomic.BulkSyncRemoveRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `BulkSync.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.bulkSync.<a href="/src/api/resources/bulkSync/client/Client.ts">activate</a>(id, { ...params }) -> Polytomic.ActivateSyncEnvelope</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.bulkSync.activate("248df4b7-aa70-47b8-a036-33ac447e668d", {
    active: true,
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Polytomic.ActivateSyncInput`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `BulkSync.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.bulkSync.<a href="/src/api/resources/bulkSync/client/Client.ts">start</a>(id, { ...params }) -> Polytomic.BulkSyncExecutionEnvelope</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.bulkSync.start("248df4b7-aa70-47b8-a036-33ac447e668d");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Polytomic.StartBulkSyncRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `BulkSync.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.bulkSync.<a href="/src/api/resources/bulkSync/client/Client.ts">getStatus</a>(id) -> Polytomic.BulkSyncStatusEnvelope</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.bulkSync.getStatus("248df4b7-aa70-47b8-a036-33ac447e668d");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `BulkSync.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.bulkSync.<a href="/src/api/resources/bulkSync/client/Client.ts">getSource</a>(id, { ...params }) -> Polytomic.BulkSyncSourceEnvelope</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.bulkSync.getSource("248df4b7-aa70-47b8-a036-33ac447e668d", {
    include_fields: true,
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Polytomic.BulkSyncGetSourceRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `BulkSync.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.bulkSync.<a href="/src/api/resources/bulkSync/client/Client.ts">getDestination</a>(id) -> Polytomic.BulkSyncDestEnvelope</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.bulkSync.getDestination("248df4b7-aa70-47b8-a036-33ac447e668d");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `BulkSync.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Connections

<details><summary><code>client.connections.<a href="/src/api/resources/connections/client/Client.ts">getTypes</a>() -> Polytomic.ConnectionTypeResponseEnvelope</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.connections.getTypes();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**requestOptions:** `Connections.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.connections.<a href="/src/api/resources/connections/client/Client.ts">getConnectionTypeSchema</a>(id) -> Polytomic.JsonschemaSchema</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.connections.getConnectionTypeSchema("postgresql");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Connections.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.connections.<a href="/src/api/resources/connections/client/Client.ts">list</a>() -> Polytomic.ConnectionListResponseEnvelope</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.connections.list();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**requestOptions:** `Connections.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.connections.<a href="/src/api/resources/connections/client/Client.ts">create</a>({ ...params }) -> Polytomic.CreateConnectionResponseEnvelope</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.connections.create({
    configuration: {
        database: "example",
        hostname: "postgres.example.com",
        password: "********",
        port: 5432,
        username: "user",
    },
    name: "My Postgres Connection",
    type: "postgresql",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Polytomic.CreateConnectionRequestSchema`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Connections.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.connections.<a href="/src/api/resources/connections/client/Client.ts">connect</a>({ ...params }) -> Polytomic.ConnectCardResponseEnvelope</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Creates a new request for [Polytomic Connect](https://www.polytomic.com/connect).

This endpoint configures a Polytomic Connect request and returns the URL to
redirect users to. This allows embedding Polytomic connection authorization in
other applications.

See also:

- [Embedding authentication](https://apidocs.polytomic.com/2024-02-08/guides/embedding-authentication), a guide to using Polytomic Connect.
  </dd>
  </dl>
  </dd>
  </dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.connections.connect({
    name: "Salesforce Connection",
    redirect_url: "redirect_url",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Polytomic.ConnectCardRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Connections.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.connections.<a href="/src/api/resources/connections/client/Client.ts">testConnection</a>({ ...params }) -> void</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Tests a connection configuration.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.connections.testConnection({
    configuration: {
        database: "example",
        hostname: "postgres.example.com",
        password: "password",
        port: 5432,
        username: "user",
    },
    type: "postgresql",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Polytomic.TestConnectionRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Connections.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.connections.<a href="/src/api/resources/connections/client/Client.ts">get</a>(id) -> Polytomic.ConnectionResponseEnvelope</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.connections.get("248df4b7-aa70-47b8-a036-33ac447e668d");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Connections.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.connections.<a href="/src/api/resources/connections/client/Client.ts">update</a>(id, { ...params }) -> Polytomic.CreateConnectionResponseEnvelope</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.connections.update("248df4b7-aa70-47b8-a036-33ac447e668d", {
    configuration: {
        database: "example",
        hostname: "postgres.example.com",
        password: "********",
        port: 5432,
        username: "user",
    },
    name: "My Postgres Connection",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Polytomic.UpdateConnectionRequestSchema`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Connections.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.connections.<a href="/src/api/resources/connections/client/Client.ts">remove</a>(id, { ...params }) -> void</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.connections.remove("248df4b7-aa70-47b8-a036-33ac447e668d", {
    force: true,
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Polytomic.ConnectionsRemoveRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Connections.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.connections.<a href="/src/api/resources/connections/client/Client.ts">getParameterValues</a>(id) -> Polytomic.ConnectionParameterValuesResponseEnvelope</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.connections.getParameterValues("248df4b7-aa70-47b8-a036-33ac447e668d");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Connections.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## QueryRunner

<details><summary><code>client.queryRunner.<a href="/src/api/resources/queryRunner/client/Client.ts">runQuery</a>(connectionId, { ...params }) -> Polytomic.V4RunQueryEnvelope</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.queryRunner.runQuery("248df4b7-aa70-47b8-a036-33ac447e668d", {
    query: "SELECT * FROM table",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**connectionId:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Polytomic.V4RunQueryRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `QueryRunner.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.queryRunner.<a href="/src/api/resources/queryRunner/client/Client.ts">getQuery</a>(id, { ...params }) -> Polytomic.V4QueryResultsEnvelope</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.queryRunner.getQuery("248df4b7-aa70-47b8-a036-33ac447e668d");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Polytomic.QueryRunnerGetQueryRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `QueryRunner.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Schemas

<details><summary><code>client.schemas.<a href="/src/api/resources/schemas/client/Client.ts">upsertField</a>(connectionId, schemaId, { ...params }) -> void</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.schemas.upsertField("248df4b7-aa70-47b8-a036-33ac447e668d", "public.users");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**connectionId:** `string`

</dd>
</dl>

<dl>
<dd>

**schemaId:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Polytomic.UpsertSchemaFieldRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Schemas.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.schemas.<a href="/src/api/resources/schemas/client/Client.ts">deleteField</a>(connectionId, schemaId, fieldId) -> void</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.schemas.deleteField("248df4b7-aa70-47b8-a036-33ac447e668d", "public.users", "first_name");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**connectionId:** `string`

</dd>
</dl>

<dl>
<dd>

**schemaId:** `string`

</dd>
</dl>

<dl>
<dd>

**fieldId:** `string`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Schemas.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.schemas.<a href="/src/api/resources/schemas/client/Client.ts">setPrimaryKeys</a>(connectionId, schemaId, { ...params }) -> void</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.schemas.setPrimaryKeys("248df4b7-aa70-47b8-a036-33ac447e668d", "public.users");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**connectionId:** `string`

</dd>
</dl>

<dl>
<dd>

**schemaId:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Polytomic.SetPrimaryKeysRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Schemas.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.schemas.<a href="/src/api/resources/schemas/client/Client.ts">resetPrimaryKeys</a>(connectionId, schemaId) -> void</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Delete all primary key overrides for a schema. After this call the schema will use the primary keys detected from the source connection, if any.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.schemas.resetPrimaryKeys("248df4b7-aa70-47b8-a036-33ac447e668d", "public.users");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**connectionId:** `string`

</dd>
</dl>

<dl>
<dd>

**schemaId:** `string`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Schemas.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.schemas.<a href="/src/api/resources/schemas/client/Client.ts">refresh</a>(id) -> void</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.schemas.refresh("248df4b7-aa70-47b8-a036-33ac447e668d");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Schemas.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.schemas.<a href="/src/api/resources/schemas/client/Client.ts">getStatus</a>(id) -> Polytomic.BulkSyncSourceStatusEnvelope</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Polytomic periodically inspects the schemas for connections to discover new fields and update metadata. This endpoint returns the current inspection status.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.schemas.getStatus("248df4b7-aa70-47b8-a036-33ac447e668d");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Schemas.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.schemas.<a href="/src/api/resources/schemas/client/Client.ts">get</a>(id, schemaId) -> Polytomic.BulkSyncSourceSchemaEnvelope</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.schemas.get("248df4b7-aa70-47b8-a036-33ac447e668d", "public.users");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string`

</dd>
</dl>

<dl>
<dd>

**schemaId:** `string`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Schemas.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.schemas.<a href="/src/api/resources/schemas/client/Client.ts">getRecords</a>(id, schemaId) -> Polytomic.SchemaRecordsResponseEnvelope</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.schemas.getRecords("248df4b7-aa70-47b8-a036-33ac447e668d", "public.users");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string`

</dd>
</dl>

<dl>
<dd>

**schemaId:** `string`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Schemas.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Models

<details><summary><code>client.models.<a href="/src/api/resources/models/client/Client.ts">getEnrichmentSource</a>(id, { ...params }) -> Polytomic.GetModelSyncSourceMetaEnvelope</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.models.getEnrichmentSource("248df4b7-aa70-47b8-a036-33ac447e668d");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Polytomic.ModelsGetEnrichmentSourceRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Models.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.models.<a href="/src/api/resources/models/client/Client.ts">post</a>(connectionId, { ...params }) -> Polytomic.V2GetEnrichmentInputFieldsResponseEnvelope</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

For a given connection and enrichment configuration, provides the valid sets of input fields.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.models.post("248df4b7-aa70-47b8-a036-33ac447e668d");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**connectionId:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Polytomic.GetEnrichmentInputFieldsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Models.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.models.<a href="/src/api/resources/models/client/Client.ts">preview</a>({ ...params }) -> Polytomic.ModelResponseEnvelope</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.models.preview({
    body: {
        configuration: {
            table: "public.users",
        },
        connection_id: "248df4b7-aa70-47b8-a036-33ac447e668d",
        name: "Users",
    },
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Polytomic.ModelsPreviewRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Models.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.models.<a href="/src/api/resources/models/client/Client.ts">list</a>() -> Polytomic.ModelListResponseEnvelope</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.models.list();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**requestOptions:** `Models.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.models.<a href="/src/api/resources/models/client/Client.ts">create</a>({ ...params }) -> Polytomic.ModelResponseEnvelope</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.models.create({
    body: {
        configuration: {
            table: "public.users",
        },
        connection_id: "248df4b7-aa70-47b8-a036-33ac447e668d",
        name: "Users",
    },
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Polytomic.ModelsCreateRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Models.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.models.<a href="/src/api/resources/models/client/Client.ts">get</a>(id, { ...params }) -> Polytomic.ModelResponseEnvelope</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.models.get("248df4b7-aa70-47b8-a036-33ac447e668d");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Polytomic.ModelsGetRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Models.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.models.<a href="/src/api/resources/models/client/Client.ts">update</a>(id, { ...params }) -> Polytomic.ModelResponseEnvelope</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.models.update("248df4b7-aa70-47b8-a036-33ac447e668d", {
    async: false,
    configuration: {
        table: "public.users",
    },
    connection_id: "248df4b7-aa70-47b8-a036-33ac447e668d",
    name: "Users",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Polytomic.UpdateModelRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Models.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.models.<a href="/src/api/resources/models/client/Client.ts">remove</a>(id, { ...params }) -> void</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.models.remove("248df4b7-aa70-47b8-a036-33ac447e668d");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Polytomic.ModelsRemoveRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Models.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.models.<a href="/src/api/resources/models/client/Client.ts">sample</a>(id, { ...params }) -> Polytomic.ModelSampleResponseEnvelope</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns sample records from the model. The first ten records that the source provides will be returned after being enriched (if applicable). Synchronous requests must complete within 10s. If either querying or enrichment exceeds 10s, please use the async option.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.models.sample("248df4b7-aa70-47b8-a036-33ac447e668d");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Polytomic.ModelsSampleRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Models.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## ModelSync

<details><summary><code>client.modelSync.<a href="/src/api/resources/modelSync/client/Client.ts">getSource</a>(id, { ...params }) -> Polytomic.GetModelSyncSourceMetaEnvelope</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.modelSync.getSource("248df4b7-aa70-47b8-a036-33ac447e668d");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Polytomic.ModelSyncGetSourceRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ModelSync.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.modelSync.<a href="/src/api/resources/modelSync/client/Client.ts">getSourceFields</a>(id, { ...params }) -> Polytomic.ModelFieldResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.modelSync.getSourceFields("248df4b7-aa70-47b8-a036-33ac447e668d");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Polytomic.ModelSyncGetSourceFieldsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ModelSync.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.modelSync.<a href="/src/api/resources/modelSync/client/Client.ts">list</a>({ ...params }) -> Polytomic.ListModelSyncResponseEnvelope</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.modelSync.list({
    active: true,
    target_connection_id: "0b155265-c537-44c9-9359-a3ceb468a4da",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Polytomic.ModelSyncListRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ModelSync.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.modelSync.<a href="/src/api/resources/modelSync/client/Client.ts">create</a>({ ...params }) -> Polytomic.ModelSyncResponseEnvelope</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Create a new sync from one or more models to a destination.

All of the functionality described in [the product
documentation](https://docs.polytomic.com/docs/sync-destinations) is
configurable via the API.

Guides:

- [Model sync (Reverse ETL) from Snowflake query to Salesforce](https://apidocs.polytomic.com/2024-02-08/guides/code-examples/model-sync-reverse-etl-from-snowflake-query-to-salesforce)
- [Joined model sync from Postgres, Airtable, and Stripe to Hubspot](https://apidocs.polytomic.com/2024-02-08/guides/code-examples/joined-model-sync-from-postgres-airtable-and-stripe-to-hubspot)

## Targets (Destinations)

Polytomic refers to a model sync's destination as the "target object", or
target. Target objects are identified by a connection ID and an object ID. You
can retrieve a list of all target objects for a connection using the [Get Target
Objects](./targets/list) endpoint.

The `target` object in the request specifies information about the sync destination.

```json
"target": {
    "connection_id": "248df4b7-aa70-47b8-a036-33ac447e668d",
    "object": "Users",
},
```

Some connections support additional configuration for targets. For example,
[Salesforce
connections](https://apidocs.polytomic.com/2024-02-08/guides/configuring-your-connections/connections/salesforce#target)
support optionally specifying the ingestion API to use. The target specific
options are passed as `configuration`; consult the [integration
guides](https://apidocs.polytomic.com/2024-02-08/guides/configuring-your-connections/overview)
for details about specific connection configurations.

### Creating a new target

Some integrations support creating a new target when creating a model sync. For
example, an ad audience or database table.

When creating a new target, `object` is omitted and `create` is specified
instead. The `create` property is an object containing integration specific
configuration for the new target.

```json
"target": {
    "connection_id": "248df4b7-aa70-47b8-a036-33ac447e668d",
    "create": {
        "name": "New audience",
        "type": "user_audience"
    }
},
```

The [Get Target List](./targets/list) endpoint returns information about whether
a connection supports target creation.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.modelSync.create({
    fields: [
        {
            target: "name",
        },
    ],
    mode: "create",
    name: "Users Sync",
    schedule: {},
    target: {
        connection_id: "248df4b7-aa70-47b8-a036-33ac447e668d",
    },
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Polytomic.CreateModelSyncRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ModelSync.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.modelSync.<a href="/src/api/resources/modelSync/client/Client.ts">getScheduleOptions</a>() -> Polytomic.ScheduleOptionResponseEnvelope</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.modelSync.getScheduleOptions();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**requestOptions:** `ModelSync.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.modelSync.<a href="/src/api/resources/modelSync/client/Client.ts">get</a>(id) -> Polytomic.ModelSyncResponseEnvelope</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.modelSync.get("248df4b7-aa70-47b8-a036-33ac447e668d");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ModelSync.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.modelSync.<a href="/src/api/resources/modelSync/client/Client.ts">update</a>(id, { ...params }) -> Polytomic.ModelSyncResponseEnvelope</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.modelSync.update("248df4b7-aa70-47b8-a036-33ac447e668d", {
    fields: [
        {
            target: "name",
        },
    ],
    mode: "create",
    name: "Users Sync",
    schedule: {},
    target: {
        connection_id: "248df4b7-aa70-47b8-a036-33ac447e668d",
    },
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Polytomic.UpdateModelSyncRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ModelSync.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.modelSync.<a href="/src/api/resources/modelSync/client/Client.ts">remove</a>(id) -> void</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.modelSync.remove("248df4b7-aa70-47b8-a036-33ac447e668d");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ModelSync.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.modelSync.<a href="/src/api/resources/modelSync/client/Client.ts">activate</a>(id, { ...params }) -> Polytomic.ActivateSyncEnvelope</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.modelSync.activate("248df4b7-aa70-47b8-a036-33ac447e668d", {
    active: true,
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Polytomic.ActivateSyncInput`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ModelSync.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.modelSync.<a href="/src/api/resources/modelSync/client/Client.ts">cancel</a>(id) -> Polytomic.CancelModelSyncResponseEnvelope</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.modelSync.cancel("248df4b7-aa70-47b8-a036-33ac447e668d");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string` — The active execution of this sync ID will be cancelled.

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ModelSync.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.modelSync.<a href="/src/api/resources/modelSync/client/Client.ts">start</a>(id, { ...params }) -> Polytomic.StartModelSyncResponseEnvelope</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

> 🚧 Force full resync
>
> Use caution when setting the `resync` parameter to `true`. This will force a full resync of the data from the source system. This can be a time-consuming operation and may impact the performance of the source system. It is recommended to only use this option when necessary.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.modelSync.start("248df4b7-aa70-47b8-a036-33ac447e668d");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Polytomic.StartModelSyncRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ModelSync.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.modelSync.<a href="/src/api/resources/modelSync/client/Client.ts">getStatus</a>(id) -> Polytomic.SyncStatusEnvelope</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.modelSync.getStatus("248df4b7-aa70-47b8-a036-33ac447e668d");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ModelSync.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Events

<details><summary><code>client.events.<a href="/src/api/resources/events/client/Client.ts">list</a>({ ...params }) -> Polytomic.EventsEnvelope</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.events.list({
    organization_id: "248df4b7-aa70-47b8-a036-33ac447e668d",
    starting_after: "2020-01-01T00:00:00Z",
    ending_before: "2020-01-01T00:00:00Z",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Polytomic.EventsListRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Events.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.events.<a href="/src/api/resources/events/client/Client.ts">getTypes</a>() -> Polytomic.EventTypesEnvelope</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.events.getTypes();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**requestOptions:** `Events.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Jobs

<details><summary><code>client.jobs.<a href="/src/api/resources/jobs/client/Client.ts">get</a>(id, type_) -> Polytomic.JobResponseEnvelope</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.jobs.get("248df4b7-aa70-47b8-a036-33ac447e668d", "createmodel");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string`

</dd>
</dl>

<dl>
<dd>

**type\_:** `string`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Jobs.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Identity

<details><summary><code>client.identity.<a href="/src/api/resources/identity/client/Client.ts">get</a>() -> Polytomic.GetIdentityResponseEnvelope</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns information about the caller's identity.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.identity.get();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**requestOptions:** `Identity.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Notifications

<details><summary><code>client.notifications.<a href="/src/api/resources/notifications/client/Client.ts">getGlobalErrorSubscribers</a>() -> Polytomic.V4GlobalErrorSubscribersResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.notifications.getGlobalErrorSubscribers();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**requestOptions:** `Notifications.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.notifications.<a href="/src/api/resources/notifications/client/Client.ts">setGlobalErrorSubscribers</a>({ ...params }) -> Polytomic.V4GlobalErrorSubscribersResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.notifications.setGlobalErrorSubscribers();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Polytomic.V4GlobalErrorSubscribersRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Notifications.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Organization

<details><summary><code>client.organization.<a href="/src/api/resources/organization/client/Client.ts">list</a>() -> Polytomic.OrganizationsEnvelope</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

> 🚧 Requires partner key
>
> Organization endpoints are only accessible using [partner keys](https://apidocs.polytomic.com/guides/obtaining-api-keys#partner-keys).

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.organization.list();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**requestOptions:** `Organization.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.organization.<a href="/src/api/resources/organization/client/Client.ts">create</a>({ ...params }) -> Polytomic.OrganizationEnvelope</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

> 🚧 Requires partner key
>
> Organization endpoints are only accessible using [partner keys](https://apidocs.polytomic.com/guides/obtaining-api-keys#partner-keys).

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.organization.create({
    name: "My Organization",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Polytomic.CreateOrganizationRequestSchema`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Organization.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.organization.<a href="/src/api/resources/organization/client/Client.ts">get</a>(id) -> Polytomic.OrganizationEnvelope</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

> 🚧 Requires partner key
>
> Organization endpoints are only accessible using [partner keys](https://apidocs.polytomic.com/guides/obtaining-api-keys#partner-keys).

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.organization.get("248df4b7-aa70-47b8-a036-33ac447e668d");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Organization.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.organization.<a href="/src/api/resources/organization/client/Client.ts">update</a>(id, { ...params }) -> Polytomic.OrganizationEnvelope</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

> 🚧 Requires partner key
>
> Organization endpoints are only accessible using [partner keys](https://apidocs.polytomic.com/guides/obtaining-api-keys#partner-keys).

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.organization.update("248df4b7-aa70-47b8-a036-33ac447e668d", {
    name: "My Organization",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Polytomic.UpdateOrganizationRequestSchema`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Organization.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.organization.<a href="/src/api/resources/organization/client/Client.ts">remove</a>(id) -> void</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

> 🚧 Requires partner key
>
> Organization endpoints are only accessible using [partner keys](https://apidocs.polytomic.com/guides/obtaining-api-keys#partner-keys).

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.organization.remove("248df4b7-aa70-47b8-a036-33ac447e668d");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Organization.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Users

<details><summary><code>client.users.<a href="/src/api/resources/users/client/Client.ts">list</a>(orgId) -> Polytomic.ListUsersEnvelope</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

> 🚧 Requires partner key
>
> User endpoints are only accessible using [partner keys](https://apidocs.polytomic.com/guides/obtaining-api-keys#partner-keys).

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.users.list("248df4b7-aa70-47b8-a036-33ac447e668d");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**orgId:** `string`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Users.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.users.<a href="/src/api/resources/users/client/Client.ts">create</a>(orgId, { ...params }) -> Polytomic.UserEnvelope</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

> 🚧 Requires partner key
>
> User endpoints are only accessible using [partner keys](https://apidocs.polytomic.com/guides/obtaining-api-keys#partner-keys).

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.users.create("248df4b7-aa70-47b8-a036-33ac447e668d", {
    email: "mail@example.com",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**orgId:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Polytomic.CreateUserRequestSchema`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Users.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.users.<a href="/src/api/resources/users/client/Client.ts">get</a>(id, orgId) -> Polytomic.UserEnvelope</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

> 🚧 Requires partner key
>
> User endpoints are only accessible using [partner keys](https://apidocs.polytomic.com/guides/obtaining-api-keys#partner-keys).

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.users.get("248df4b7-aa70-47b8-a036-33ac447e668d", "248df4b7-aa70-47b8-a036-33ac447e668d");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string`

</dd>
</dl>

<dl>
<dd>

**orgId:** `string`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Users.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.users.<a href="/src/api/resources/users/client/Client.ts">update</a>(id, orgId, { ...params }) -> Polytomic.UserEnvelope</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

> 🚧 Requires partner key
>
> User endpoints are only accessible using [partner keys](https://apidocs.polytomic.com/guides/obtaining-api-keys#partner-keys).

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.users.update("248df4b7-aa70-47b8-a036-33ac447e668d", "248df4b7-aa70-47b8-a036-33ac447e668d", {
    email: "mail@example.com",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string`

</dd>
</dl>

<dl>
<dd>

**orgId:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Polytomic.UpdateUserRequestSchema`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Users.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.users.<a href="/src/api/resources/users/client/Client.ts">remove</a>(id, orgId) -> Polytomic.UserEnvelope</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

> 🚧 Requires partner key
>
> User endpoints are only accessible using [partner keys](https://apidocs.polytomic.com/guides/obtaining-api-keys#partner-keys).

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.users.remove("248df4b7-aa70-47b8-a036-33ac447e668d", "248df4b7-aa70-47b8-a036-33ac447e668d");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string`

</dd>
</dl>

<dl>
<dd>

**orgId:** `string`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Users.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.users.<a href="/src/api/resources/users/client/Client.ts">createApiKey</a>(orgId, id, { ...params }) -> Polytomic.ApiKeyResponseEnvelope</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

> 🚧 Requires partner key
>
> User endpoints are only accessible using [partner keys](https://apidocs.polytomic.com/guides/obtaining-api-keys#partner-keys).

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.users.createApiKey("248df4b7-aa70-47b8-a036-33ac447e668d", "248df4b7-aa70-47b8-a036-33ac447e668d", {
    force: true,
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**orgId:** `string`

</dd>
</dl>

<dl>
<dd>

**id:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Polytomic.UsersCreateApiKeyRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Users.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Webhooks

<details><summary><code>client.webhooks.<a href="/src/api/resources/webhooks/client/Client.ts">list</a>() -> Polytomic.WebhookListEnvelope</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Webooks can be set up using the webhook API endpoints. Currently, only one
webhook may be created per organization. The webhook will be called for events
in that organization.

Consult the [Events documentation](https://apidocs.polytomic.com/guides/events) for more information.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.webhooks.list();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**requestOptions:** `Webhooks.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.webhooks.<a href="/src/api/resources/webhooks/client/Client.ts">create</a>({ ...params }) -> Polytomic.WebhookEnvelope</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Webooks can be set up using the webhook API endpoints. Currently, only one
webhook may be created per organization. The webhook will be called for events
in that organization.

Consult the [Events documentation](https://apidocs.polytomic.com/guides/events) for more information.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.webhooks.create({
    endpoint: "https://example.com/webhook",
    secret: "secret",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Polytomic.CreateWebhooksSchema`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Webhooks.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.webhooks.<a href="/src/api/resources/webhooks/client/Client.ts">get</a>(id) -> Polytomic.WebhookEnvelope</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Webooks can be set up using the webhook API endpoints. Currently, only one
webhook may be created per organization. The webhook will be called for events
in that organization.

Consult the [Events documentation](https://apidocs.polytomic.com/guides/events) for more information.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.webhooks.get("248df4b7-aa70-47b8-a036-33ac447e668d");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Webhooks.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.webhooks.<a href="/src/api/resources/webhooks/client/Client.ts">update</a>(id, { ...params }) -> Polytomic.WebhookEnvelope</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Webooks can be set up using the webhook API endpoints. Currently, only one
webhook may be created per organization. The webhook will be called for events
in that organization.

Consult the [Events documentation](https://apidocs.polytomic.com/guides/events) for more information.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.webhooks.update("248df4b7-aa70-47b8-a036-33ac447e668d", {
    endpoint: "https://example.com/webhook",
    secret: "secret",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Polytomic.UpdateWebhooksSchema`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Webhooks.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.webhooks.<a href="/src/api/resources/webhooks/client/Client.ts">remove</a>(id) -> void</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.webhooks.remove("248df4b7-aa70-47b8-a036-33ac447e668d");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Webhooks.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.webhooks.<a href="/src/api/resources/webhooks/client/Client.ts">disable</a>(id) -> Polytomic.WebhookEnvelope</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.webhooks.disable("248df4b7-aa70-47b8-a036-33ac447e668d");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Webhooks.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.webhooks.<a href="/src/api/resources/webhooks/client/Client.ts">enable</a>(id) -> Polytomic.WebhookEnvelope</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.webhooks.enable("248df4b7-aa70-47b8-a036-33ac447e668d");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Webhooks.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## BulkSync Executions

<details><summary><code>client.bulkSync.executions.<a href="/src/api/resources/bulkSync/resources/executions/client/Client.ts">listStatus</a>({ ...params }) -> Polytomic.ListBulkSyncExecutionStatusEnvelope</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.bulkSync.executions.listStatus({
    all: true,
    active: true,
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Polytomic.bulkSync.ExecutionsListStatusRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Executions.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.bulkSync.executions.<a href="/src/api/resources/bulkSync/resources/executions/client/Client.ts">list</a>(id, { ...params }) -> Polytomic.ListBulkSyncExecutionsEnvelope</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.bulkSync.executions.list("248df4b7-aa70-47b8-a036-33ac447e668d", {
    page_token: "AmkYh8v0jR5B3kls2Qcc9y8MjrPmvR4CvaK7H0F4rEwqvg76K==",
    only_terminal: true,
    ascending: true,
    limit: 100,
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Polytomic.bulkSync.ExecutionsListRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Executions.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.bulkSync.executions.<a href="/src/api/resources/bulkSync/resources/executions/client/Client.ts">get</a>(id, execId) -> Polytomic.BulkSyncExecutionEnvelope</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.bulkSync.executions.get("248df4b7-aa70-47b8-a036-33ac447e668d", "248df4b7-aa70-47b8-a036-33ac447e668d");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string`

</dd>
</dl>

<dl>
<dd>

**execId:** `string`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Executions.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.bulkSync.executions.<a href="/src/api/resources/bulkSync/resources/executions/client/Client.ts">getLogs</a>(syncId, executionId) -> Polytomic.V4BulkSyncExecutionLogsEnvelope</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.bulkSync.executions.getLogs(
    "248df4b7-aa70-47b8-a036-33ac447e668d",
    "248df4b7-aa70-47b8-a036-33ac447e668d",
);
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**syncId:** `string`

</dd>
</dl>

<dl>
<dd>

**executionId:** `string`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Executions.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.bulkSync.executions.<a href="/src/api/resources/bulkSync/resources/executions/client/Client.ts">exportLogs</a>(syncId, executionId, { ...params }) -> Polytomic.V4ExportSyncLogsEnvelope</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.bulkSync.executions.exportLogs(
    "248df4b7-aa70-47b8-a036-33ac447e668d",
    "248df4b7-aa70-47b8-a036-33ac447e668d",
);
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**syncId:** `string`

</dd>
</dl>

<dl>
<dd>

**executionId:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Polytomic.bulkSync.ExecutionsExportLogsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Executions.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## BulkSync Schemas

<details><summary><code>client.bulkSync.schemas.<a href="/src/api/resources/bulkSync/resources/schemas/client/Client.ts">list</a>(id, { ...params }) -> Polytomic.ListBulkSchema</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.bulkSync.schemas.list("248df4b7-aa70-47b8-a036-33ac447e668d");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Polytomic.bulkSync.SchemasListRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Schemas.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.bulkSync.schemas.<a href="/src/api/resources/bulkSync/resources/schemas/client/Client.ts">patch</a>(id, { ...params }) -> Polytomic.ListBulkSchema</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.bulkSync.schemas.patch("248df4b7-aa70-47b8-a036-33ac447e668d");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Polytomic.bulkSync.BulkSyncSchemasRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Schemas.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.bulkSync.schemas.<a href="/src/api/resources/bulkSync/resources/schemas/client/Client.ts">get</a>(id, schemaId) -> Polytomic.BulkSchemaEnvelope</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.bulkSync.schemas.get("248df4b7-aa70-47b8-a036-33ac447e668d", "Contact");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string`

</dd>
</dl>

<dl>
<dd>

**schemaId:** `string`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Schemas.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.bulkSync.schemas.<a href="/src/api/resources/bulkSync/resources/schemas/client/Client.ts">update</a>(id, schemaId, { ...params }) -> Polytomic.BulkSchemaEnvelope</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.bulkSync.schemas.update("248df4b7-aa70-47b8-a036-33ac447e668d", "contact");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string`

</dd>
</dl>

<dl>
<dd>

**schemaId:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Polytomic.bulkSync.UpdateBulkSchema`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Schemas.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## BulkSync Schedules

<details><summary><code>client.bulkSync.schedules.<a href="/src/api/resources/bulkSync/resources/schedules/client/Client.ts">list</a>(syncId) -> Polytomic.SchedulesEnvelope</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.bulkSync.schedules.list("248df4b7-aa70-47b8-a036-33ac447e668d");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**syncId:** `string`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Schedules.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.bulkSync.schedules.<a href="/src/api/resources/bulkSync/resources/schedules/client/Client.ts">create</a>(syncId, { ...params }) -> Polytomic.ScheduleEnvelope</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.bulkSync.schedules.create("248df4b7-aa70-47b8-a036-33ac447e668d", {
    schedule: {
        frequency: "manual",
    },
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**syncId:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Polytomic.bulkSync.CreateScheduleRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Schedules.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.bulkSync.schedules.<a href="/src/api/resources/bulkSync/resources/schedules/client/Client.ts">get</a>(syncId, scheduleId) -> Polytomic.ScheduleEnvelope</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.bulkSync.schedules.get("248df4b7-aa70-47b8-a036-33ac447e668d", "248df4b7-aa70-47b8-a036-33ac447e668d");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**syncId:** `string`

</dd>
</dl>

<dl>
<dd>

**scheduleId:** `string`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Schedules.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.bulkSync.schedules.<a href="/src/api/resources/bulkSync/resources/schedules/client/Client.ts">update</a>(syncId, scheduleId, { ...params }) -> Polytomic.ScheduleEnvelope</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.bulkSync.schedules.update("248df4b7-aa70-47b8-a036-33ac447e668d", "248df4b7-aa70-47b8-a036-33ac447e668d", {
    schedule: {
        frequency: "manual",
    },
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**syncId:** `string`

</dd>
</dl>

<dl>
<dd>

**scheduleId:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Polytomic.bulkSync.UpdateScheduleRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Schedules.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.bulkSync.schedules.<a href="/src/api/resources/bulkSync/resources/schedules/client/Client.ts">delete</a>(syncId, scheduleId) -> void</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.bulkSync.schedules.delete("248df4b7-aa70-47b8-a036-33ac447e668d", "248df4b7-aa70-47b8-a036-33ac447e668d");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**syncId:** `string`

</dd>
</dl>

<dl>
<dd>

**scheduleId:** `string`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Schedules.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## ModelSync Targets

<details><summary><code>client.modelSync.targets.<a href="/src/api/resources/modelSync/resources/targets/client/Client.ts">getTarget</a>(id, { ...params }) -> Polytomic.GetConnectionMetaEnvelope</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.modelSync.targets.getTarget("248df4b7-aa70-47b8-a036-33ac447e668d");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Polytomic.modelSync.TargetsGetTargetRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Targets.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.modelSync.targets.<a href="/src/api/resources/modelSync/resources/targets/client/Client.ts">getTargetFields</a>(id, { ...params }) -> Polytomic.TargetResponseEnvelope</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.modelSync.targets.getTargetFields("248df4b7-aa70-47b8-a036-33ac447e668d", {
    target: "database.table",
    refresh: false,
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Polytomic.modelSync.TargetsGetTargetFieldsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Targets.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.modelSync.targets.<a href="/src/api/resources/modelSync/resources/targets/client/Client.ts">list</a>(id) -> Polytomic.V4TargetObjectsResponseEnvelope</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns available model sync destinations for a connection.

If the connection supports creating new destinations, the `target_creation`
object will contain information on what properties are required to create the
target.

Target creation properties are all string values; the `enum` flag indicates if
the property has a fixed set of valid values. When `enum` is `true`, the [Target
Creation Property
Values](https://apidocs.polytomic.com/2024-02-08/api-reference/model-sync/targets/get-create-property)
endpoint can be used to retrieve the valid values.

## Sync modes

The sync mode determines which records are written to the destination for a
model sync. The `modes` array for a target object defines the `id` along with
what operations the mode supports.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.modelSync.targets.list("248df4b7-aa70-47b8-a036-33ac447e668d");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Targets.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.modelSync.targets.<a href="/src/api/resources/modelSync/resources/targets/client/Client.ts">getCreateProperty</a>(id, property) -> Polytomic.V4TargetPropertyValuesEnvelope</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Connections which support creating new sync target objects (destinations) will
return `target_creation` with their [target object list](./list). This endpoint
will return possible values for properties where `enum` is `true`.

If the connection does not support creating new target objects, an HTTP 404 will
be returned.

The `values` array lists the valid options (and labels) for the property. Each
member of the `values` array has a `label` and `value`. For exaample,

```json
{
    "data": [
        {
            "id": "account",
            "title": "Account ID",
            "enum": true,
            "values": [
                {
                    "value": "1234567::urn:li:organization:987654",
                    "label": "Polytomic Inc. (1234567)"
                }
            ]
        }
    ]
}
```

The `value` for the selected option should be passed when [creating a
sync](https://apidocs.polytomic.com/2024-02-08/api-reference/model-sync/create).

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.modelSync.targets.getCreateProperty("248df4b7-aa70-47b8-a036-33ac447e668d", "property");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string`

</dd>
</dl>

<dl>
<dd>

**property:** `string`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Targets.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## ModelSync Executions

<details><summary><code>client.modelSync.executions.<a href="/src/api/resources/modelSync/resources/executions/client/Client.ts">list</a>(syncId, { ...params }) -> Polytomic.ListExecutionResponseEnvelope</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.modelSync.executions.list("248df4b7-aa70-47b8-a036-33ac447e668d", {
    page_token: "AmkYh8v0jR5B3kls2Qcc9y8MjrPmvR4CvaK7H0F4rEwqvg76K==",
    only_completed: true,
    ascending: true,
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**syncId:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Polytomic.modelSync.ExecutionsListRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Executions.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.modelSync.executions.<a href="/src/api/resources/modelSync/resources/executions/client/Client.ts">get</a>(syncId, id) -> Polytomic.GetExecutionResponseEnvelope</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.modelSync.executions.get("248df4b7-aa70-47b8-a036-33ac447e668d", "248df4b7-aa70-47b8-a036-33ac447e668d");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**syncId:** `string`

</dd>
</dl>

<dl>
<dd>

**id:** `string`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Executions.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.modelSync.executions.<a href="/src/api/resources/modelSync/resources/executions/client/Client.ts">update</a>(syncId, id, { ...params }) -> Polytomic.GetExecutionResponseEnvelope</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.modelSync.executions.update(
    "248df4b7-aa70-47b8-a036-33ac447e668d",
    "248df4b7-aa70-47b8-a036-33ac447e668d",
    {
        status: "created",
    },
);
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**syncId:** `string`

</dd>
</dl>

<dl>
<dd>

**id:** `string` — The ID of the execution to update.

</dd>
</dl>

<dl>
<dd>

**request:** `Polytomic.modelSync.UpdateExecutionRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Executions.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.modelSync.executions.<a href="/src/api/resources/modelSync/resources/executions/client/Client.ts">getLogUrls</a>(syncId, id, type_) -> Polytomic.ExecutionLogsResponseEnvelope</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.modelSync.executions.getLogUrls(
    "248df4b7-aa70-47b8-a036-33ac447e668d",
    "248df4b7-aa70-47b8-a036-33ac447e668d",
    "records",
);
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**syncId:** `string`

</dd>
</dl>

<dl>
<dd>

**id:** `string`

</dd>
</dl>

<dl>
<dd>

**type\_:** `Polytomic.V2ExecutionLogType`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Executions.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.modelSync.executions.<a href="/src/api/resources/modelSync/resources/executions/client/Client.ts">getLogs</a>(syncId, id, type_, filename) -> void</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.modelSync.executions.getLogs(
    "248df4b7-aa70-47b8-a036-33ac447e668d",
    "0ecd09c1-b901-4d27-9053-f0367c427254",
    "records",
    "path/to/file.json",
);
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**syncId:** `string`

</dd>
</dl>

<dl>
<dd>

**id:** `string`

</dd>
</dl>

<dl>
<dd>

**type\_:** `Polytomic.V2ExecutionLogType`

</dd>
</dl>

<dl>
<dd>

**filename:** `string`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Executions.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Permissions Policies

<details><summary><code>client.permissions.policies.<a href="/src/api/resources/permissions/resources/policies/client/Client.ts">list</a>() -> Polytomic.ListPoliciesResponseEnvelope</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.permissions.policies.list();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**requestOptions:** `Policies.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.permissions.policies.<a href="/src/api/resources/permissions/resources/policies/client/Client.ts">create</a>({ ...params }) -> Polytomic.PolicyResponseEnvelope</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.permissions.policies.create({
    name: "Custom",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Polytomic.permissions.CreatePolicyRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Policies.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.permissions.policies.<a href="/src/api/resources/permissions/resources/policies/client/Client.ts">get</a>(id) -> Polytomic.PolicyResponseEnvelope</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.permissions.policies.get("248df4b7-aa70-47b8-a036-33ac447e668d");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Policies.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.permissions.policies.<a href="/src/api/resources/permissions/resources/policies/client/Client.ts">update</a>(id, { ...params }) -> Polytomic.PolicyResponseEnvelope</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.permissions.policies.update("248df4b7-aa70-47b8-a036-33ac447e668d", {
    name: "Custom",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Polytomic.permissions.UpdatePolicyRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Policies.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.permissions.policies.<a href="/src/api/resources/permissions/resources/policies/client/Client.ts">remove</a>(id) -> void</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.permissions.policies.remove("248df4b7-aa70-47b8-a036-33ac447e668d");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Policies.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Permissions Roles

<details><summary><code>client.permissions.roles.<a href="/src/api/resources/permissions/resources/roles/client/Client.ts">list</a>() -> Polytomic.RoleListResponseEnvelope</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.permissions.roles.list();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**requestOptions:** `Roles.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.permissions.roles.<a href="/src/api/resources/permissions/resources/roles/client/Client.ts">create</a>({ ...params }) -> Polytomic.RoleResponseEnvelope</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.permissions.roles.create({
    name: "Custom",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Polytomic.permissions.CreateRoleRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Roles.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.permissions.roles.<a href="/src/api/resources/permissions/resources/roles/client/Client.ts">get</a>(id) -> Polytomic.RoleResponseEnvelope</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.permissions.roles.get("248df4b7-aa70-47b8-a036-33ac447e668d");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Roles.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.permissions.roles.<a href="/src/api/resources/permissions/resources/roles/client/Client.ts">update</a>(id, { ...params }) -> Polytomic.RoleResponseEnvelope</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.permissions.roles.update("248df4b7-aa70-47b8-a036-33ac447e668d", {
    name: "Custom",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Polytomic.permissions.UpdateRoleRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Roles.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.permissions.roles.<a href="/src/api/resources/permissions/resources/roles/client/Client.ts">remove</a>(id) -> void</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.permissions.roles.remove("248df4b7-aa70-47b8-a036-33ac447e668d");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Roles.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>
