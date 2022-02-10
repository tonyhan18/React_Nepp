import { useEffect, useState } from "react";
import styled from "styled-components";
//import { PostList } from "../organisms";
import { getBoardList } from "../../apis/board";
import { BestBoardCard, BoardCard, Searchbar } from "../organisms/Main";

const Main = () => {
  const [mainContent, setMainContent] = useState([]);
  useEffect(() => {
    (async () => {
      const { data } = await getBoardList();
      console.log("content");
      console.log(data);
      console.log(data.content);
      console.log(data.content[0]);
      // console.log(data.content[0]._doc);
      // console.log(data.content[0].content);

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
        <BestBoardCard />
        <BoardCardContainer>
          {mainContent.map((b) => (
            <BoardCard key={b.slug} title={b.title} slug={b.slug} />
          ))}
        </BoardCardContainer>
      </MainContent>
    </MainContainer>
  );
};

const MainContainer = styled.div`
  margin: auto;
  display: flex;
  max-width: 1100px;
`;
const MainContent = styled.main`
  width: 100%;
  max-width: 736px;
`;
const BoardCardContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 45px 20px;
`;

export default Main;
