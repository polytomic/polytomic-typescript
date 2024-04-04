/**
 * This file was auto-generated from our API Definition.
 */

export type ScheduleFrequency =
    | "manual"
    | "continuous"
    | "hourly"
    | "daily"
    | "weekly"
    | "custom"
    | "builder"
    | "runafter"
    | "multi"
    | "dbtcloud";

export const ScheduleFrequency = {
    Manual: "manual",
    Continuous: "continuous",
    Hourly: "hourly",
    Daily: "daily",
    Weekly: "weekly",
    Custom: "custom",
    Builder: "builder",
    Runafter: "runafter",
    Multi: "multi",
    Dbtcloud: "dbtcloud",
} as const;
