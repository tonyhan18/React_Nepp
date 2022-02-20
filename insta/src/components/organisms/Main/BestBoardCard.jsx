import React, { useEffect, useState } from "react";
import { FiThumbsUp } from "react-icons/fi";
import { BiComment } from "react-icons/bi";
import { Link } from "react-router-dom";
import styled from "styled-components";
import {
  ArticleList,
  ArticleTitle,
  BoardIcon,
  Body,
  CountDisplay,
  CountIcon,
  CountItem,
  Head,
  TitleSide,
  Wrapper,
} from "../../atoms/board";
import { getBoardList } from "../../../apis/board";

const BestBoardCard = ({ title, slug, articleList }) => {
  const [boardList, setBoardList] = useState({});
  useEffect(() => {
    (async () => {
      const data = await getBoardList();
      console.log(data);
      //setBoardList(data.content);
    })();
  }, []);
  return (
    <Wrapper>
      <Head>
        <TitleSide>
          <BoardIcon></BoardIcon>
          <h2>알럼 베스트</h2>
        </TitleSide>
        <Link to="/">더보기 +</Link>
      </Head>
      <Body>
        <ArticleList>
          {articleList.map((a) => (
            <li key={a.id + a.slug}>
              <ArticleTitle>{a.title}</ArticleTitle>
              <CountDisplay>
                <CountItem>
                  <FiThumbsUp size="16" className="icon" />
                  <span>10</span>
                </CountItem>
                <CountItem>
                  <BiComment size="16" className="icon" />
                  <span>10</span>
                </CountItem>
              </CountDisplay>
            </li>
          ))}
        </ArticleList>
      </Body>
    </Wrapper>
  );
};

export default BestBoardCard;
