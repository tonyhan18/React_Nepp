import React, { useRef, useState } from "react";
import styled from "styled-components";

const Todo = () => {
  const [value, setValue] = useState("");
  const [todos, setTodos] = useState([
    { id: 1, text: "함해보자", checked: true },
  ]);
  const nextId = useRef(2);

  const changeValue = (e) => {
    setValue(e.target.value);
  };

  const handleAddTodo = (e) => {
    e.preventDefault();
    setTodos([...todos, { id: nextId, text: value, checked: "false" }]);
    nextId.current = nextId.current + 1;
  };

  return (
    <Container>
      <Title>일정관리</Title>
      <InputWrapper>
        <InputText
          value={value}
          placeholder="할 일을 입력해주세요"
          onChange={changeValue}
        />
        <BtnSubmit onClick={handleAddTodo}>+</BtnSubmit>
      </InputWrapper>
      <List>
        {todos.map((e, i) => (
          <Item key={i}>
            <label>
              <Checkbox
                type="checkbox"
                checked={() => {
                  return e.checked ? true : false;
                }}
              />
              <Content>{e.text}</Content>
            </label>
            <BtnDelete>X</BtnDelete>
          </Item>
        ))}
      </List>
    </Container>
  );
};

const Container = styled.div`
  // 1. 위치
  margin: 0 auto;
  margin-top: 6rem;
  // 2. 크기
  width: 512px;
  // 3. 꾸미기
  background-color: grey;
  border-radius: 5px;
  overflow: hidden;
`;
const Title = styled.div`
  // 1. 위치
  display: flex;
  justify-content: center;
  align-items: center;
  // 2. 크기
  height: 4rem;
  font-size: 1.5rem;
  font-family: sans-serif;
  color: white;
  // 3. 꾸미기
  background-color: #22b8cf;
`;

const InputWrapper = styled.div`
  //1. 위치
  display: flex;
  //2. 크기
  // 3. 꾸미기
  background-color: #495057;
`;
const InputText = styled.input`
  //1. 위치
  flex: 1;
  padding: 0.5rem;
  padding-left: 1rem;

  //2. 크기
  font-size: 1.125rem;
  //3. 꾸미기
  background: none;
  border: none;
  outline: none;
  line-height: 1.5;
  color: white;
  &::placeholder {
    color: #dee2e6;
  }
`;
const BtnSubmit = styled.button`
  //1. 위치
  padding-left: 1rem;
  padding-right: 1rem;
  //2. 크기
  //3. 꾸미기
  border: none;
  background: none;
  outline: none;
  color: white;
  cursor: pointer;
  background-color: #868e96;
  font-size: 1.5rem;
  transition: 0.1s background ease-in;
  &:hover {
    background: #adb5bd;
  }
`;
const List = styled.ul`
  //1. 위치설정
  //2. 크기
  //3. 꾸미기
`;
const Item = styled.li`
  //1. 위치설정
  display: flex;
  padding: 10px;

  //2. 크기
  //3. 꾸미기
  label {
    flex: 1;
    display: flex;
    align-items: center;
  }
  & + & {
    border-top: 1px solid #efefef;
  }
`;
const Checkbox = styled.input`
  //1. 위치설정
  //2. 크기
  //3. 꾸미기
  background: none;
  border: none;
  outline: none;
`;
const Content = styled.div`
  //1. 위치설정
  padding-left: 0.5rem;
  //2. 크기
  //3. 꾸미기
`;
const BtnDelete = styled.button`
  //1. 위치설정
  border-radius: 15px;
  //2. 크기
  //3. 꾸미기
  background: none;
  border: none;
  outline: none;
`;

export default Todo;
