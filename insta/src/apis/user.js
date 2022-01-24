import { instance } from "./index";

export const addUser = (params) => {
  instance.post("/users", params);
};
