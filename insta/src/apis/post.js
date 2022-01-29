import { Instance } from "./index";

export const getPostList = async () => {
  const { data } = await Instance.get("/posts/main");
  //console.log(data);
  return data;
};

export const addPost = async (params) => {
  const { data } = await Instance.post("/posts", params);
  return data;
};
