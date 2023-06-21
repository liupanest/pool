import { request } from "@/utils/request";

export const saveArticle = (data: any) => {
  return request({
    url: "/api/article/add",
    method: "POST",
    data,
  });
};
