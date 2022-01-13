import styled from "styled-components";

const Pagination = ({ onPageChange }) => {
  const onHandleChange = (e) => {
    console.log(e.target.value);
    onPageChange((prev) => {
      if (prev.value !== e.target.value) return e.target.value;
    });
  };
  return (
    <List>
      <Item onClick={onHandleChange} value={1}>
        1
      </Item>
      <Item onClick={onHandleChange} value={2}>
        2
      </Item>
      <Item onClick={onHandleChange} value={3}>
        3
      </Item>
      <Item onClick={onHandleChange} value={4}>
        4
      </Item>
    </List>
  );
};

const List = styled.ul`
  display: flex;
  justify-content: center;
`;
const Item = styled.li`
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #000;
  border-radius: 50%;
  margin: 5px;
  cursor: pointer;
  :hover {
    background: #000;
    color: white;
  }
`;

export default Pagination;
