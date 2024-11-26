/**
 * This file was auto-generated from our API Definition.
 */

export type FilterFunction =
    | "Equality"
    | "Inequality"
    | "IsNull"
    | "IsNotNull"
    | "True"
    | "False"
    | "OnOrAfter"
    | "OnOrBefore"
    | "GreaterThan"
    | "GreaterThanEqual"
    | "LessThan"
    | "LessThanEqual"
    | "StringContains"
    | "StringEndsWith"
    | "StringDoesNotContain"
    | "StringDoesNotEndWith"
    | "StringOneOf"
    | "StringNotOneOf"
    | "Between"
    | "ArrayContains"
    | "ArrayDoesNotContain"
    | "InTheLast"
    | "RelativeOnOrBefore"
    | "RelativeOnOrAfter"
    | "StringLike"
    | "StringNotLike"
    | "StringMatchesTrimmed";

export const FilterFunction = {
    Equality: "Equality",
    Inequality: "Inequality",
    IsNull: "IsNull",
    IsNotNull: "IsNotNull",
    True: "True",
    False: "False",
    OnOrAfter: "OnOrAfter",
    OnOrBefore: "OnOrBefore",
    GreaterThan: "GreaterThan",
    GreaterThanEqual: "GreaterThanEqual",
    LessThan: "LessThan",
    LessThanEqual: "LessThanEqual",
    StringContains: "StringContains",
    StringEndsWith: "StringEndsWith",
    StringDoesNotContain: "StringDoesNotContain",
    StringDoesNotEndWith: "StringDoesNotEndWith",
    StringOneOf: "StringOneOf",
    StringNotOneOf: "StringNotOneOf",
    Between: "Between",
    ArrayContains: "ArrayContains",
    ArrayDoesNotContain: "ArrayDoesNotContain",
    InTheLast: "InTheLast",
    RelativeOnOrBefore: "RelativeOnOrBefore",
    RelativeOnOrAfter: "RelativeOnOrAfter",
    StringLike: "StringLike",
    StringNotLike: "StringNotLike",
    StringMatchesTrimmed: "StringMatchesTrimmed",
} as const;
