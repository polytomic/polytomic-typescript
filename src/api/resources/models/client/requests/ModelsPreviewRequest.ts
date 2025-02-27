/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Polytomic from "../../../../index";

/**
 * @example
 *     {
 *         body: {
 *             configuration: {
 *                 "table": "public.users"
 *             },
 *             connection_id: "248df4b7-aa70-47b8-a036-33ac447e668d",
 *             name: "Users"
 *         }
 *     }
 */
export interface ModelsPreviewRequest {
    async?: boolean;
    body: Polytomic.CreateModelRequest;
}
