/**
 * This file was auto-generated from our API Definition.
 */

import * as errors from "../../errors/index";
import * as Polytomic from "../index";

export class BadRequestError extends errors.PolytomicError {
    constructor(body: Polytomic.ApiError) {
        super({
            message: "BadRequestError",
            statusCode: 400,
            body: body,
        });
        Object.setPrototypeOf(this, BadRequestError.prototype);
    }
}
