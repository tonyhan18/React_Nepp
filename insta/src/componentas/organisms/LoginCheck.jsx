import { useContext, useEffect } from "react";
import {
  Outlet,
  useNavigate,
} from "../../../node_modules/react-router-dom/index";
import UserContext from "../../contexts/user";

const LoginCheck = () => {
  const navigate = useNavigate();
  const { isLogin } = useContext(UserContext);

  useEffect(() => {
    if (!isLogin) {
      //navigate("/login");
    }
  }, [isLogin, navigate]);
  return (
    <>
      <Outlet />
    </>
  );
};

export default LoginCheck;
