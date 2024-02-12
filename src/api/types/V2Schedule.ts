/**
 * This file was auto-generated from our API Definition.
 */

import * as Polytomic from "..";

export interface V2Schedule {
    day_of_month?: string;
    day_of_week?: string;
    frequency?: string;
    hour?: string;
    minute?: string;
    month?: string;
    run_after?: Polytomic.V2RunAfter;
}
