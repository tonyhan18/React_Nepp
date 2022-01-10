import { useState } from "react";
import styled from "styled-components";

const Dropdown = () => {
  const [isShow, setIsShow] = useState(true);

  // document.body.addEventListener("click", () => {
  //   setIsShow(!isShow);
  // });

  const handleClick = () => {
    setIsShow((prev) => !prev);
  };

  return (
    <Wrapper>
      <Backdrop />
      <Btn onClick={handleClick}>Dropdown Button</Btn>
      {isShow && (
        <Menu>
          <Item>Action</Item>
          <Item>Action</Item>
          <Item>Action</Item>
        </Menu>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
`;
const Btn = styled.div`
  max-width: 155px;
  padding: 6px 12px;
  font-size: 16px;
  background: #198754;
  border: none;
  color: #fff;
  border-radius: 4px;
  line-height: 1.5;
  cursor: pointer;
`;
const Menu = styled.ul`
  background-color: #fff;
  border: 1px solid rgb(221, 221, 221);
  border-radius: 4px;
  position: absolute;
`;
const Item = styled.li`
  padding: 5px 15px;
  width: 155px;
  cursor: pointer;
  & + & {
    border-top: 1px solid #ddd;
  }
  :hover {
    background: #ddd;
  }
`;

const Backdrop = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  left: 0;
  top: 0;
`;

export default Dropdown;
