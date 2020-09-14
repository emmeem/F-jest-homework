import getUsers from "../users"
import axios from "../__mocks__/axios"

jest.mock("axios");

describe("users", () => {
  test("should get users data with mock axios get", async () => {
    // TODO 13: add async test with manual mock

    const result = getUsers();

    expect(axios.get).toBeCalledTimes(1);
    await expect(result).resolves.toEqual({})
  });
});
