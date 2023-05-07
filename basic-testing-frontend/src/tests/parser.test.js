import { it, expect, describe } from "vitest";
import { extractNumbers } from "../parser";

class FormDataMock {
  constructor() {
    this.data = {};
  }

  set(key, value) {
    this.data[key] = value;
  }

  get(key) {
    return this.data[key];
  }
}

describe("extractNumbers", () => {
  it("should extract formData into a two object array", () => {
    const formData = new FormDataMock();
    formData.set("num1", "10");
    formData.set("num2", "20");

    const result = extractNumbers(formData);
    expect(result).toEqual(["10", "20"]);
  });
  it("handles missing form data by returning an array of undefined values", () => {
    const formData = new FormDataMock();

    const result = extractNumbers(formData);

    expect(result[0]).toBeUndefined();
    expect(result[1]).toBeUndefined();
  });
});
