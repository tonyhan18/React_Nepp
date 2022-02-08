import React from "react";
import styled from "styled-components";

const Login = () => {
  return (
    <PageWrapper>
      <Main>
        <Box>
          <Logo />
          <Form>
            <InputText></InputText>
            <InputText></InputText>
            <BtnSubmit>로그인</BtnSubmit>
          </Form>
        </Box>
      </Main>
    </PageWrapper>
  );
};

const LoginBlock = styled.div``;

export default Login;
