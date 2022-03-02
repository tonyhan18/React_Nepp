import { useEffect, useState } from "react";
import styled from "styled-components";
//import { PostList } from "../organisms";
import { getBoardList, getRecentBoardArticleList } from "../../apis/board";
import {
  BestBoardCard,
  BoardCard,
  Searchbar,
  RealtimeFamousCompany,
} from "../organisms/Main";

const Main = () => {
  const [mainContent, setMainContent] = useState([]);

  useEffect(() => {
    (async () => {
      let { content } = await getRecentBoardArticleList();
      setMainContent(
        content.sort(
          (a, b) =>
            new Date(a.createdAt).getTime() > new Date(b.createdAt).getTime()
        )
      );
    })();
  }, []);

  return (
    <MainContainer>
      <MainContent>
        <Searchbar />
        {mainContent
          .filter((v) => v.title === "오늘의 인기글")
          .map((b) => (
            <BestBoardCard
              key={b._id}
              title={b.title}
              slug={b.slug}
              articleList={b.content}
            />
          ))}
        <BoardCardContainer>
          {mainContent.map((b) => (
            <BoardCard
              key={b.slug}
              title={b.title}
              slug={b.slug}
              articleList={b.content}
            />
          ))}
        </BoardCardContainer>
      </MainContent>
      <RealtimeFamousCompany />
    </MainContainer>
  );
};

const MainContainer = styled.div`
  margin: auto;
  display: flex;
  max-width: 1100px;
`;
const MainContent = styled.div`
  width: 100%;
  max-width: 736px;
`;
const BoardCardContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 45px 40px;
`;

export default Main;
