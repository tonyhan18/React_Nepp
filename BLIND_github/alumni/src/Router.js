import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login } from "./components/pages";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
