/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as PolytomicApi from "..";
export interface V2Schedule {
    dayOfMonth?: string;
    dayOfWeek?: string;
    frequency?: string;
    hour?: string;
    minute?: string;
    month?: string;
    runAfter?: PolytomicApi.V2RunAfter;
}