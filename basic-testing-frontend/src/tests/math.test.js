import { assert, it, expect } from "vitest";
import { add } from "../math";

it("should sum all numbers in an array", () => {
  let res = add([1, 2, 3, 4, 5, 6]);
  const expected_res = [1, 2, 3, 4, 5, 6].reduce((p, c) => p + c, 0);
  expect(res).toBe(expected_res);
});

it("should return NaN if single value in array is invalid", () => {
  let res_nan = add([1, 2, NaN]);
  let res_text = add([1, 2, "TEXT"]);
  expect(res_nan).toBeNaN();
  expect(res_text).toBeNaN();
});

it("should return 0 if an empty array is passed", () => {
  let res = add([]);
  expect(res).toBe(0);
});

it("should throw ERROR if nothing is passed", () => {
  const result = () => {
    add();
  };
  expect(result).toThrow();
});

it("should throw ERROR if anything other than array is passed", () => {
  const result = () => {
    add(1, 2);
  };
  expect(result).toThrow(/is not iterable/);
});
