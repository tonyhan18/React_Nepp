import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const BestBoardCard = ({ key, title, slug, content }) => {
  return (
    <Wrapper>
      <Head>
        <TitleSide>
          <BoardIcon></BoardIcon>
          <h2>알럼 베스트</h2>
        </TitleSide>
        <Link to={slug}>더보기 &gt</Link>
      </Head>
      <Body>
        <ArticleList>
          {content.map((a) => (
            <li key={a.id}>
              <ArticleTitle>{a.title}</ArticleTitle>
              <ViewCount>{a.viewcount}</ViewCount>
            </li>
          ))}
        </ArticleList>
      </Body>
    </Wrapper>
  );
};

const Wrapper = styled.div``;
const Head = styled.head`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const TitleSide = styled.div``;
const BoardIcon = styled.div``;
const Body = styled.head``;
const ArticleList = styled.ul`
  padding-left: 0;
  li {
    padding-top: 9px;
    list-style: none;
    display: flex;
  }
`;
const ArticleTitle = styled.span`
  display: inline-block;
  width: calc(100% - 80px);
  line-height: 20px;
  color: #222;
`;
const ViewCount = styled.span`
  display: inline-block;
  width: 80px;
  line-height: 20px;
  color: #222;
`;

export default BestBoardCard;