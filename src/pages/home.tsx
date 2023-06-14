import { useEffect, useState } from "react";
import styled from "styled-components";
import { publicImage } from "../util/publicimage";

export const Home = () => {
  return (
    <Container>
      <MainLogo>
        <img src={`${publicImage("mainlogo")}`} alt="profile" />
      </MainLogo>
      <MsgBox>
        안녕하세요. 웹 프론트엔드 개발자 John입니다. 👋
        <br />
        <br />
        다양한 개발 경험을 좋아하며 성장하는 습관을 만들어 가고 있습니다.
      </MsgBox>
    </Container>
  );
};

const Container = styled.div`
  margin: 0 auto;
  width: 80%;
`;
const MainLogo = styled.div`
  display: flex;
  justify-content: center;
  background-color: white;
  border-radius: 20px;
`;

const MsgBox = styled.div`
  margin: 30px 0;
  padding: 30px;
  background-color: ${(props) => props.theme.backgroundColor};
  border-radius: 10px;
  font-weight: 500;
`;
