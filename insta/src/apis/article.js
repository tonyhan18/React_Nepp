import { Instance } from "./index";

export const postArticleCreate = (params) => {
  const data = Instance.post("/article/create", params);
  console.log(data);
  return data;
};
