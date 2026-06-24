import { getAPIKey } from "../api/auth.js";
import { describe, expect, test } from "vitest";

describe("getAPIKey", () => {
  const headersOne = {
    authorization: "ApiKey masaki",
  };

  const headersTwo = {
    accept: "plain/text",
  };

  const headersThree = {
    authorization: "APIKEY MASAKI",
  };

  test("ApiKey extracted successfully", () => {
    expect(getAPIKey(headersOne)).toBe("masaki");
  });

  test("Header without authorization field returns null", () => {
    expect(getAPIKey(headersTwo)).toBeNull();
  });

  test("Header with uppercase authorization returns null", () => {
    expect(getAPIKey(headersThree)).toBeNull();
  });
});
