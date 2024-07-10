/**
 * This file was auto-generated from our API Definition.
 */

import * as errors from "../../errors/index";
import * as Polytomic from "../index";

export class NotFoundError extends errors.PolytomicError {
    constructor(body: Polytomic.ApiError) {
        super({
            message: "NotFoundError",
            statusCode: 404,
            body: body,
        });
        Object.setPrototypeOf(this, NotFoundError.prototype);
    }
}
