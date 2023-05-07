import { it, expect } from "vitest";

import { transformToNumber } from "../util/numbers";

it("should return the string number as a number", () => {
  const res = transformToNumber("5");
  expect(res).toBe(5);
});

it("should return NaN for non numeric strings", () => {
  const res = transformToNumber("no_number");
  expect(res).toBeNaN();
});
