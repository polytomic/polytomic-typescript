/**
 * This file was auto-generated from our API Definition.
 */

export class PolytomicError extends Error {
    readonly statusCode?: number;
    readonly body?: unknown;

    constructor({ message, statusCode, body }: { message?: string; statusCode?: number; body?: unknown }) {
        super(buildMessage({ message, statusCode, body }));
        Object.setPrototypeOf(this, PolytomicError.prototype);
        if (statusCode != null) {
            this.statusCode = statusCode;
        }

        if (body !== undefined) {
            this.body = body;
        }
    }
}

function buildMessage({
    message,
    statusCode,
    body,
}: {
    message: string | undefined;
    statusCode: number | undefined;
    body: unknown | undefined;
}): string {
    let lines: string[] = [];
    if (message != null) {
        lines.push(message);
    }

    if (statusCode != null) {
        lines.push(`Status code: ${statusCode.toString()}`);
    }

    if (body != null) {
        lines.push(`Body: ${JSON.stringify(body, undefined, 2)}`);
    }

    return lines.join("\n");
}
