/**
 * This file was auto-generated from our API Definition.
 */

import * as Polytomic from "..";

export interface BulkSchedule {
    day_of_month?: string;
    day_of_week?: string;
    frequency: Polytomic.ScheduleFrequency;
    hour?: string;
    minute?: string;
    month?: string;
    multi?: Polytomic.BulkMultiScheduleConfiguration;
}
