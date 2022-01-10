import { useState } from "react";
import styled from "styled-components";

const Dropdown = () => {
  const [isShow, setIsShow] = useState(false);

  document.body.addEventListener("click", () => {
    setIsShow(false);
  });
  const handleClick = () => {
    setIsShow(!isShow);
  };
  return (
    <Wrapper>
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

const Wrapper = styled.div``;
const Btn = styled.div`
  max-width: 100px;
  padding: 5px;
  background-color: green;
  color: white;
  border-radius: 5px;
  font-size: 16px;
`;
const Menu = styled.ul`
  background: #fff;
`;
const Item = styled.li`
  padding: 5px 15px;
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
