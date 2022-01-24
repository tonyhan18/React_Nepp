import { useContext, useEffect } from "react";
import { useNavigate } from "../../../node_modules/react-router-dom/index";
import UserContext from "../../contexts/user";

const LoginCheck = () => {
  const navigate = useNavigate();
  const { isLogin } = useContext(UserContext);

  useEffect(() => {
    if (!isLogin) {
      navigate("/login");
    }
  }, [isLogin, navigate]);
  return <></>;
};

export default LoginCheck;
