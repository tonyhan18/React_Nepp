import { useEffect, useState } from "react";
import styled from "styled-components";
//import { PostList } from "../organisms";
import { getRecentBoardArticleList } from "../../apis/board";
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
      const { data } = await getRecentBoardArticleList();

      if (data.error) {
        return;
      }
      setMainContent(data.content);
    })();
  }, []);

  return (
    <MainContainer>
      <MainContent>
        <Searchbar />
        {mainContent.map((b) => (
          <BestBoardCard
            key={b.slug}
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
