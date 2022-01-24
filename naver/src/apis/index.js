import axios from "axios";

export const instance = axios.create({
  headers: {
    "X-Naver-Client-Id": "KDa2ZMvqLu1qOR1yMXQF",
    "X-Naver-Client-Secret": "s1nQka0vKc",
  },
});
