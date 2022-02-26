import { createContext } from "react";

const WritingModalContext = createContext({
  isShowWritingModal: false,
  setIsShowWritingModal: () => {},
});

export default WritingModalContext;
