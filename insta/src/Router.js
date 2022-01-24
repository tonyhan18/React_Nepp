import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginCheck from "./componentas/organisms/index";
import Login from "./componentas/pages/Login";
import Logout from "./componentas/pages/Logout";
import Main from "./componentas/pages/Main";
import Signup from "./componentas/pages/Signup";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginCheck />}>
          <Route path="/" element={<Main />} />
          <Route path="/login" element={<Login />} />
        </Route>
        <Route path="/signup" element={<Signup />} />
        <Route path="/logout" element={<Logout />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
