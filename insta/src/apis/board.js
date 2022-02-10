import { Instance } from "./index";

export const getBoardList = async () => {
  const data = await Instance.get("/board/main");
  //console.log(data);
  return data;
};

export const addPost = async (params) => {
  const { data } = await Instance.post("/posts", params);
  return data;
};
