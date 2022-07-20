import React, { useState } from "react";
import Register from "./register";
import Login from "./login";
import { Card, Divider } from "antd";
import styled from "@emotion/styled";
import Logo from "../assets/img/logo.svg";
import Left from "../assets/img/left.svg";
import Right from "../assets/img/right.svg";

export default function UnauthenticatedApp() {
  const [isRegister, setIsRegister] = useState(false);

  return (
    <Container>
      <Header />
      <BackGround></BackGround>
      <ShadowCard>
        <Title>{isRegister ? "请注册" : "请登录"}</Title>
        {isRegister ? <Register /> : <Login />}
        <Divider />
        <a onClick={() => setIsRegister(!isRegister)}>
          {isRegister ? "已经有账号了？直接登录" : "没有账号，注册新账号"}
        </a>
      </ShadowCard>
    </Container>
  );
}
const BackGround = styled.div`
  left: 0;
  top: 0;
  position: absolute;
  width: 100vw;
  height: 100vh;
  background-size: calc(((100vw - 40rem) / 2) - 3.2rem),
    calc(((100vw - 40rem) / 2) - 3.2rem), cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: left bottom, right bottom;
  background-image: url(${Left}), url(${Right});
`;
const Title = styled.h2`
  margin-bottom: 2.4rem;
  color: rgb(94, 108, 132);
`;
const Header = styled.header`
  background: url(${Logo}) no-repeat center;
  padding: 5rem 0;
  background-size: 8rem;
  width: 100%;
`;
const Container = styled.div`
  width: 40%;
  margin: 0 auto;
`;
const ShadowCard = styled(Card)`
  margin: 0 auto;
  width: 40rem;
  min-height: 56rem;
  padding: 3.2rem 4rem;
  border-radius: 0.3rem;
  box-sizing: border-box;
  box-shadow: rgb(212 212 212) 0 0 5px 0px;
  text-align: center;
`;
