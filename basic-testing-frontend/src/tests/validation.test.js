import { it, expect, describe } from "vitest";
import { validateStringNotEmpty, validateNumber } from "../util/validation";

describe("validateStringNotEmpty tests", () => {
  it("should return undefined if string is valid", () => {
    expect(validateStringNotEmpty("hello, world")).toBeUndefined();
  });

  it('should return "Invalid input - must not be empty." on empty string input', () => {
    const resFn_empty_string = () => {
      validateStringNotEmpty("");
    };
    const resFn_whitespace_string = () => {
      validateStringNotEmpty("    ");
    };
    expect(resFn_empty_string).toThrow(/Invalid input - must not be empty./);
    expect(resFn_whitespace_string).toThrow(
      /Invalid input - must not be empty./
    );
  });

  it("should return a type error for non string input", () => {
    const resFn_number = () => {
      validateStringNotEmpty(11);
    };
    const resFn_array = () => {
      validateStringNotEmpty(["hello", "world"]);
    };
    expect(resFn_number).toThrowError(TypeError);
    expect(resFn_array).toThrowError(TypeError);
  });
});

describe("validateNumber", () => {
  it("should return undefined if input is numeric, or empty string", () => {
    const resFn_numeric_string = () => {
      validateNumber("120");
    };
    const resFn_empty_string = () => {
      validateNumber("");
    };
    expect(validateNumber(10)).toBeUndefined();
    expect(resFn_empty_string()).toBeUndefined();
    expect(resFn_numeric_string()).toBeUndefined();
  });

  it("should return 'Invalid number input.' for any non numeric value", () => {
    const resFn_numeric_string = () => {
      validateNumber("hello");
    };
    const resFn_numeric_array = () => {
      validateNumber([10, 20, 30]);
    };
    expect(resFn_numeric_string).toThrow(/Invalid number input./);
    expect(resFn_numeric_array).toThrow(/Invalid number input./);
  });
});
