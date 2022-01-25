import React from "react";
import { Link, Outlet } from "react-router-dom";
import styled from "styled-components";
import {
  IconHome,
  IconActivity,
  IconDirect,
  IconExplore,
  IconNewPost,
} from "../../assets/images/icons/index";

function TopNav() {
  return (
    <div>
      <Header>
        <Main>
          <Link to="/">
            <ImgLogo src="https://www.instagram.com/static/images/web/mobile_nav_type_logo-2x.png/1b47f9d0e595.png" />
          </Link>
          <SearchWrapper>
            <InputSearch plceholder="검색" />
          </SearchWrapper>
          <Nav>
            <IconWrapper>
              <IconHome />
            </IconWrapper>
            <IconWrapper>
              <IconDirect />
            </IconWrapper>
            <IconWrapper>
              <IconNewPost />
            </IconWrapper>
            <IconWrapper>
              <IconExplore />
            </IconWrapper>
            <IconWrapper>
              <IconActivity />
            </IconWrapper>
          </Nav>
        </Main>
      </Header>
      <Outlet />
    </div>
  );
}

const Header = styled.header`
  position: fixed;
  top: 0%;
  width: 100%;
  background-color: white;
  border-bottom: 1px solid #dbdbdb;
`;
const Main = styled.main`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  height: 54px;
  max-width: 975px;
`;
const ImgLogo = styled.img`
  width: 104px;
  vertical-align: bottom;
`;
const SearchWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 3px 16px;
  box-sizing: border-box;
  height: 36px;
  min-width: 125px;
  width: 268px;
  background-color: #efefef;
  border-radius: 8px;
`;
const InputSearch = styled.input`
  background: transparent;
  border: none;
  width: 100%;
  height: 100%;
`;
const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
`;
const IconWrapper = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  & + & {
    margin-left: 22px;
  }
`;

export default TopNav;
