/**
 * This file was auto-generated from our API Definition.
 */

import * as errors from "../../errors";
import * as Polytomic from "..";

export class UnprocessableEntityError extends errors.PolytomicError {
    constructor(body: Polytomic.ApiError) {
        super({
            message: "UnprocessableEntityError",
            statusCode: 422,
            body: body,
        });
        Object.setPrototypeOf(this, UnprocessableEntityError.prototype);
    }
}
