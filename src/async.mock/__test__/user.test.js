import { register } from "../user";
import { verifyUsername } from "../verify";

jest.mock("../verify");
jest.mock("axios");

describe("register", () => {
  test("should post user when validated", async () => {
    // TODO 19: add test here
    const username = "mocked username";
    const password = "mocked password";
    const result = register(username, password);

    await expect(result).resolves.toEqual({});
  });

  test("should reject with Error when username is invalid", async () => {
    // TODO 20: add test here
    verifyUsername.mockReturnValue(false);
    const username = "mocked username";
    const password = "mock password";

    const result = register(username, password);

    await expect(result).rejects.toThrowError("wrong username or password");
  });
});
