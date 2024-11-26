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
    /** If true, the sync will only run if the dependent syncs completed successfully. */
    run_after_success_only?: boolean;
}
