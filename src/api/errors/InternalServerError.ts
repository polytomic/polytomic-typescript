/**
 * This file was auto-generated from our API Definition.
 */

import * as errors from "../../errors";
import * as Polytomic from "..";

export class InternalServerError extends errors.PolytomicError {
    constructor(body: Polytomic.ApiError) {
        super({
            message: "InternalServerError",
            statusCode: 500,
            body: body,
        });
        Object.setPrototypeOf(this, InternalServerError.prototype);
    }
}
