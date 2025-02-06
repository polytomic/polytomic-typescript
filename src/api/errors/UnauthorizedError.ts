/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as errors from "../../errors/index";
import * as Polytomic from "../index";

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
