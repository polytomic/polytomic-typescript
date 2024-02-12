/**
 * This file was auto-generated from our API Definition.
 */

/**
 * @example
 *     {
 *         organization_id: "248df4b7-aa70-47b8-a036-33ac447e668d",
 *         starting_after: new Date("2020-01-01T00:00:00.000Z"),
 *         ending_before: new Date("2020-01-01T00:00:00.000Z")
 *     }
 */
export interface EventsApiV2GetEventsRequest {
    organization_id?: string;
    type?: string;
    starting_after?: string;
    ending_before?: string;
    limit?: number;
}
