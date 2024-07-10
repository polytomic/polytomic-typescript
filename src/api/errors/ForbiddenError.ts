/**
 * This file was auto-generated from our API Definition.
 */

import * as errors from "../../errors/index";
import * as Polytomic from "../index";

export class ForbiddenError extends errors.PolytomicError {
    constructor(body: Polytomic.ApiError) {
        super({
            message: "ForbiddenError",
            statusCode: 403,
            body: body,
        });
        Object.setPrototypeOf(this, ForbiddenError.prototype);
    }
}
