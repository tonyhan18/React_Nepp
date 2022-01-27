import React, { useRef } from "react";
import styled from "styled-components";
import { ModalContainer, Backdrop } from "../../atoms/modal";
import { IconPost } from "assets/images/icons/index";

const ModalAddPost = ({ onClose }) => {
  const fileEl = useRef(null);
  return (
    <>
      <Backdrop onClick={onClose} />
      <Container>
        <Header>새 게시물 만들기</Header>
        <Main>
          <IconPost />
          <Guide>사진과 동영상을 여기에 끌어다 놓으세요</Guide>
          <BtnFile
            onClick={() => {
              fileEl.current.click();
            }}
          >
            컴퓨터에서 선택
          </BtnFile>
          <InputFile type="file" ref={fileEl} />
        </Main>
      </Container>
    </>
  );
};

const Container = styled(ModalContainer)`
  max-width: 670px;
  width: 70%;
`;
const Header = styled.header`
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  height: 43px;
  border-bottom: 1px solid #dbdbdb;
  color: #262626;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
`;
const Main = styled.main`
  height: 670px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const Guide = styled.h4`
  font-weight: lighter;
  font-size: 22px;
`;
const BtnFile = styled.button``;
const InputFile = styled.input`
  display: none;
`;

export default ModalAddPost;
