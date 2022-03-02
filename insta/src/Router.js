import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Signup, Main, Login, Logout } from "./components/pages/";
import { TopNav, LoginCheck } from "./components/organisms/index";
import _id from "./components/pages/topics/_id";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginCheck />}>
          <Route path="/" element={<TopNav />}>
            <Route path="/" element={<Main />} />
            <Route path="/topics/:slug" element={<_id />} />
          </Route>
          <Route path="/logout" element={<Logout />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
