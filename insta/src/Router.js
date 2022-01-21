import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./componentas/pages/Login";
import Main from "./componentas/pages/Main";
import Signup from "./componentas/pages/Signup";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
