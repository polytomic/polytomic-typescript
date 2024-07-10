/**
 * This file was auto-generated from our API Definition.
 */

import * as errors from "../../errors/index";
import * as Polytomic from "../index";

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
