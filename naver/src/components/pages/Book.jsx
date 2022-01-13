import { useState } from "react";
import styled from "styled-components";
import { getBookList } from "../../apis/book";
import { BtnSubmit, Form, InputText } from "../atoms";
import BookList from "../organisms/BookList";

const Book = () => {
  const [text, settext] = useState("");
  const [bookList, setBookList] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const params = {
      query: text,
    };
    const {items} = await getBookList(params);
    setBookList(items);
  };

  return (
    <div>
      <h1>Book</h1>
      <Form onSubmit={handleSubmit}>
        <InputText
          name="text"
          value={text}
          onChange={(e) => settext(e.target.value)}
        />
        <BtnSubmit>검색</BtnSubmit>
      </Form>
      <BookList data={bookList} />
    </div>
  );
};

export default Book;
