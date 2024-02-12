/**
 * This file was auto-generated from our API Definition.
 */

import * as errors from "../../errors";
import * as Polytomic from "..";

export class UnauthorizedError extends errors.PolytomicError {
    constructor(body: Polytomic.RestErrResponse) {
        super({
            message: "UnauthorizedError",
            statusCode: 401,
            body: body,
        });
        Object.setPrototypeOf(this, UnauthorizedError.prototype);
    }
}
