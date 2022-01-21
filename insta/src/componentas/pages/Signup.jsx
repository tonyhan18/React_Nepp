import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { addUser } from "../../apis/user";
import {
  Box,
  BtnSubmit,
  Form,
  InputText,
  Logo,
  Main,
  PageWrapper,
  SignupWrapper,
} from "../atoms/login";

const Signup = () => {
  const [userInfo, setUserInfo] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserInfo({ ...userInfo, [name]: value });
    console.log(userInfo);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addUser(userInfo);
  };

  return (
    <PageWrapper>
      <Main>
        <Box>
          <Logo src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png" />
          <Form onSubmit={handleSubmit}>
            <InputText
              name="username"
              placeholder="사용자이름"
              value={userInfo.username}
              onChange={handleChange}
            />
            <InputText
              name="password"
              placeholder="비밀번호"
              type="password"
              value={userInfo.password}
              onChange={handleChange}
            />
            <InputText
              name="passwordConfirm"
              placeholder="비밀번호 확인"
              type="password"
              value={userInfo.passwordConfirm}
              onChange={handleChange}
            />
            <BtnSubmit>가입</BtnSubmit>
          </Form>
          <FBLogin>Facebook으로 로그인</FBLogin>
          <ForgotPassword>비밀번호를 잊으셨나요?</ForgotPassword>
        </Box>
        <Box>
          <SignupWrapper>
            계정이 있으신가요? <Link to="/login">로그인</Link>
          </SignupWrapper>
        </Box>
      </Main>
    </PageWrapper>
  );
};

const FBLogin = styled.div`
  margin: 10px 40px 18px;
  font-size: 14px;
  color: #385185;
  font-weight: bold;
`;
const ForgotPassword = styled.div`
  font-size: 12px;
`;

export default Signup;
