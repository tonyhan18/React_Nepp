import styled from "styled-components";
import { Link } from "react-router-dom";

export const Wrapper = styled.div``;
export const Head = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  h2 {
    font-size: 18px;
    line-height: 43px;
  }
`;
export const TitleSide = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  h2 {
    margin-left: 5px;
  }
`;
export const BoardIcon = styled.div``;
export const BoardLink = styled(Link)`
  position: relative;
  top: 3px;
  font-size: 14px;
  color: #222;
  opacity: 0.2;
`;
//big
export const Body = styled.div`
  padding: 32px 0;
  width: 100%;
  max-width: 1100px;
  margin: auto;
`;
//small
export const ArticleList = styled.ul`
  padding-left: 0;
  margin: 0;
  li {
    padding-top: 9px;
    list-style: none;
    display: flex;
    span {
      display: inline-block;
      line-height: 20px;
      color: #222;
    }
  }
`;
export const ArticleTitle = styled.span`
  width: calc(100% - 50px);
`;

// Icon, Item design
export const CountDisplay = styled.div`
  display: flex;
  opacity: 0.7;
  gap: 20px;
`;

export const CountItem = styled.div`
  display: flex;
  .icon {
    margin-right: 5px;
  }
`;
