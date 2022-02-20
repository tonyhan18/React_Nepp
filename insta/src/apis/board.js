import { Instance } from "./index";

export const getRecentBoardArticleList = async () => {
  const data = await Instance.get("/board/main");
  return data;
};

export const getBoardList = async () => {
  const data = await Instance.get("/board/list");
  console.log(data);
  if (!Array.isArray(data)) {
    return;
  }
  return data;
};

export const addPost = async (params) => {
  const { data } = await Instance.post("/posts", params);
  return data;
};
