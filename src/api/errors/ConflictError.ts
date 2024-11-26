/**
 * This file was auto-generated from our API Definition.
 */

import * as errors from "../../errors/index";
import * as Polytomic from "../index";

export class ConflictError extends errors.PolytomicError {
    constructor(body: Polytomic.ApiError) {
        super({
            message: "ConflictError",
            statusCode: 409,
            body: body,
        });
        Object.setPrototypeOf(this, ConflictError.prototype);
    }
}
