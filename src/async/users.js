// TODO feeback: 非测试代码不能使用mock的数据

// import axios from "./__mocks__/axios";
import axios from "axios";

export default function getUsers() {
  return axios.get("/users.json").then((response) => response.data);
}
