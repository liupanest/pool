import Axios, { AxiosRequestConfig } from "axios";

const http = Axios.create({});

export async function request(config?: AxiosRequestConfig) {
  const response = await http.request({ ...config });
  console.log("response... ", response);
  const result = response.data;
  // 你的业务判断逻辑
  return result;
}
