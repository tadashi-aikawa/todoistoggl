import * as assert from "assert";
import * as JsDiff from "diff";

const errorMsgFromPrimitive = (actual: number|string, expected: number|string): string => `
----------[expected]----------
${expected}
----------[actual]------------
${actual}
------------------------------
`;

const toJson = (obj: Object): string => JSON.stringify(obj, null, 2).split("\n").join("\n    ");
const errorMsgFromJson = (actual: string, expected: string): string => `
----------[expected]----------
${expected}
----------[actual]------------
${actual}
----------[diff]--------------
${JsDiff.createPatch("Diff", expected, actual, "expected", "actual")}
------------------------------
`;

const assertAsString = (actual: string, expected: string): void => {
    return assert.equal(actual, expected, errorMsgFromPrimitive(actual, expected));
};

const assertAsNumber = (actual: number, expected: number): void => {
    return assert.equal(actual, expected, errorMsgFromPrimitive(actual, expected));
};

const assertAsJson = (actual: Object, expected: Object): void => {
    return assert.deepEqual(actual, expected, errorMsgFromJson(toJson(actual), toJson(expected)));
};

export {
    assertAsString,
    assertAsNumber,
    assertAsJson
};
