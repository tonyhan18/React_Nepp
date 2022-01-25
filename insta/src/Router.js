import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Signup, Main, Login, Logout } from "./componentas/pages/";
import { LoginCheck } from "./componentas/organisms";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginCheck />}>
          <Route path="/" element={<Main />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Route>
        <Route path="/logout" element={<Logout />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
