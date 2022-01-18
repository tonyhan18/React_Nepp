import axios from "axios";

export const getMovieList = async (params) => {
  const { data } = await axios.get("/v1/search/movie.json", {
    baseURL: "http://localhost:8080",
    headers: {
      "X-Naver-Client-Id": "KDa2ZMvqLu1qOR1yMXQF",
      "X-Naver-Client-Secret": "s1nQka0vKc",
    },
    params,
  });
  return data;
};
