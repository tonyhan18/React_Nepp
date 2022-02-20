import React, { useEffect, useRef, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import styled from "styled-components";
import ModalAddPost from "./modals/AddPost";
import logo from "../../assets/logo/logo.png";

function TopNav() {
  const [showModalAddPost, setShowModalAddPost] = useState(false);
  const homeRef = useRef(null);

  useEffect(() => {
    document.body.style.overflow = showModalAddPost ? "hidden" : "";
  }, [showModalAddPost]);

  return (
    <div>
      <Header>
        <Main>
          <Nav>
            <SideBlock>
              <Link to="/">
                <ImgLogo src={logo} />
              </Link>
              <Link to="/">홈</Link>
              <Link to="/">익명</Link>
            </SideBlock>
            <SideBlock>
              <WriteBtn
                onClick={() => {
                  setShowModalAddPost(true);
                }}
              >
                글쓰기
              </WriteBtn>
              <Link to="/logout">
                <LoginBtn>로그아웃</LoginBtn>
              </Link>
            </SideBlock>
          </Nav>
        </Main>
      </Header>
      <OutletWrapper>
        <Outlet />
      </OutletWrapper>
      {showModalAddPost && (
        <ModalAddPost onClose={() => setShowModalAddPost(false)} />
      )}
    </div>
  );
}

const Header = styled.header`
  border-bottom: 1px solid #d4d4d4;
`;
const Main = styled.main``;
const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 80px;
  margin: auto;
  padding: 0 20px;
  max-width: 1100px;
`;
const ImgLogo = styled.img`
  width: 104px;
  vertical-align: bottom;
`;
const SideBlock = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
`;
const WriteBtn = styled.a`
  background: rgb(218, 50, 56);
  color: white;
  font-size: 14px;
  height: 40px;
  margin-left: 10px;
  width: 82px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  cursor: pointer;
`;
const LoginBtn = styled.a`
  background: white;
  color: rgb(34, 34, 34);
  font-size: 14px;
  border: solid 1px rgb(212, 212, 212);
  height: 40px;
  margin-left: 10px;
  width: 82px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  cursor: pointer;
`;

const OutletWrapper = styled.div`
  //margin-top: 70px;
  height: 100vh;
  background: #fafafa;
`;
// const SearchWrapper = styled.div`
//   display: flex;
//   align-items: center;
//   padding: 3px 16px;
//   box-sizing: border-box;
//   height: 36px;
//   min-width: 125px;
//   width: 268px;
//   background-color: #efefef;
//   border-radius: 8px;
// `;
// const InputSearch = styled.input`
//   background: transparent;
//   border: none;
//   width: 100%;
//   height: 100%;
// `;

// const IconWrapper = styled.div`
//   cursor: pointer;
//   display: flex;
//   align-items: center;
//   & + & {
//     margin-left: 22px;
//   }
// `;

export default TopNav;
