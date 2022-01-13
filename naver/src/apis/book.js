import axios from "axios";

export const getBookList = async (params) => {
  const { data } = await axios.get("/v1/search/book.json", {
    headers: {
      "X-Naver-Client-Id": "KDa2ZMvqLu1qOR1yMXQF",
      "X-Naver-Client-Secret": "s1nQka0vKc",
    },
    params,
  });
  return data;
};
