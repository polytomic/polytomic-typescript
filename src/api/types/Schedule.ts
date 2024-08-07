/**
 * This file was auto-generated from our API Definition.
 */

import * as Polytomic from "../index";

export interface Schedule {
    connection_id?: string;
    day_of_month?: string;
    day_of_week?: string;
    frequency?: Polytomic.ScheduleFrequency;
    hour?: string;
    job_id?: number;
    minute?: string;
    month?: string;
    run_after?: Polytomic.RunAfter;
}
