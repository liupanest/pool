import { request } from "@/utils/request";

export const getArticles = (params?: any) => {
  return request({
    url: "/api/article/getAll",
    params,
  });
};

export const getArticleDetail = (params: any) => {
  return request({
    url: "/api/article/get",
    params,
  });
};
