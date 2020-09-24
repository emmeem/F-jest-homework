import getUsers from "../users";
// TODO feedback: axios是我们装的node module, 不是我们自己写的module, 它的mock文件是src/async/__mocks__/axios.js。
// 所以，我把你自己写的那个axios.js删掉了，并且把axios.get的mock移到了src/async/__mocks__/axios.js里面。

// import axios from "../__mocks__/axios"

jest.mock("axios");

describe("users", () => {
  test("should get users data with mock axios get", async () => {
    // TODO 13: add async test with manual mock

    const result = getUsers();

    // expect(axios.get).toBeCalledTimes(1);
    await expect(result).resolves.toEqual({});
  });
});
