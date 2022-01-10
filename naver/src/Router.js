import { BrowserRouter, Routes, Route } from "react-router-dom";
import { TopNav } from "./components/organisms";
import { Main, Book, Movie } from "./components/pages";

const Router = () => {
  return (
    <BrowserRouter>
      <TopNav />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/movie" element={<Movie />} />
        <Route path="/book" element={<Book />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
