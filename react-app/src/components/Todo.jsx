import styled from "styled-components";

const Todo = () => {
  return (
    <Container>
      <Title>일정관리</Title>
      <InputWrapper>
        <InputText />
        <BtnSubmit>추가</BtnSubmit>
      </InputWrapper>
      <List>
        <Item>
          <label>
            <Checkbox />
            <Content>할일1</Content>
          </label>
          <BtnDelete>삭제</BtnDelete>
        </Item>
      </List>
    </Container>
  );
};

const Title = styled.div``;
const Container = styled.div``;
const InputWrapper = styled.div``;
const InputText = styled.input``;
const BtnSubmit = styled.button``;
const List = styled.ul``;
const Item = styled.li``;
const Checkbox = styled.input``;
const Content = styled.div``;
const BtnDelete = styled.buton``;

export default Todo;
