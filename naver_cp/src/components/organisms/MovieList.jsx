import styled from "styled-components";

const MovieList = ({ movies }) => {
  return (
    <List>
      {movies.map((list, i) => (
        <Item key={i}>
          <Image src={list.image} /> <MovieTitle>{list.title}</MovieTitle>
          <PubDate>{list.pubDate}</PubDate>
          <UserRating>{list.UserRating}</UserRating>
        </Item>
      ))}
    </List>
  );
};

const List = styled.ul`
  margin-top: 5px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 10px;
`;
const Item = styled.li``;
const Image = styled.img`
  width: 100%;
`;
const MovieTitle = styled.p``;
const PubDate = styled.div``;
const UserRating = styled.div``;

export default MovieList;
