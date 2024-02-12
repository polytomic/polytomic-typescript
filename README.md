# Polytomic TypeScript Library

[![npm shield](https://img.shields.io/npm/v/polytomic)](https://www.npmjs.com/package/polytomic)

The Polytomic TypeScript library provides convenient access to the Polytomic API from JavaScript/TypeScript.

## Documentation

API reference documentation is available [here](https://docs.polytomic.com/reference/getting-started-with-your-api-3).

## Installation

```
npm install --save polytomic
# or
yarn add polytomic
```

## Usage

```typescript
import { PolytomicClient, Polytomic } from 'polytomic';

const polytomic = new PolytomicClient({
  token: "YOUR_API_KEY"
});

const bulkSync = polytomic.bulkSync.get("bulk-sync-id");
```

## Request and Response Types

The SDK exports all request and response types as TypeScript interfaces. Simply 
import them using the `Polytomic` namespace: 

```ts
import { Polytomic } from "polytomic"; 

const user: Polytomic.BulkSchedule = {
  frequencey: "hourly"
}
```

## Exception Handling

When the API returns a non-success status code (4xx or 5xx response), a 
subclass of [PolytomicError](./src/errors/PolytomicError.ts) will be thrown:

```ts
import { PolytomicError } from 'polytomic';

try {
  await polytomic.bulkSync.get(...);
} catch (err) {
  if (err instanceof PolytomicError) {
    console.log(err.statusCode); 
    console.log(err.message);
    console.log(err.body); 
  }
}
```

## Retries

The Polytomic TypeScript SDK is instrumented with automatic retries with exponential backoff. A request will be
retried as long as the request is deemed retriable and the number of attempts is not larger
than the configured limit (default: 2).

A request is deemed retriable when any of the following HTTP status codes is returned:

- [408](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/408) (Timeout)
- [409](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/409) (Conflict)
- [429](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/429) (Too Many Requests)
- [5XX](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/500) (Internal Server Errors)
  
Use the `maxRetries` request option to configure this behavior. 

```ts
const response = polytomic.bulkSync.get("e7525084....fd94153226fb781", {
  maxRetries: 0 // override maxRetries at the request level
});
```

## Timeouts

The SDK defaults to a 60 second timout. Use the `timeoutInSeconds` option to 
configure this behavior. 

```ts
const response = polytomic.bulkSync.get("e7525084....fd94153226fb781", {
  timeoutInSeconds: 30 // override timeout to 30s
});
```

## Beta status

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning the package
version to a specific version in your package.json file. This way, you can install the same version each time without breaking changes 
unless you are intentionally looking for the latest version.

## Contributing

While we value open-source contributions to this SDK, this library is generated programmatically. Additions made directly to this library 
would have to be moved over to our generation code, otherwise they would be overwritten upon the next generated release. Feel free to open a 
PR as a proof of concept, but know that we will not be able to merge it as-is. 

We suggest [opening an issue](https://github.com/FlatFilers/flatfile-node/issues) first to discuss with us!

On the other hand, contributions to the README are always very welcome!
