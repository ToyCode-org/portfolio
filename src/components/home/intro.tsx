import styled from "styled-components";
import { InnerContainer, MsgBox } from "../common/styles";
import { publicImage } from "../../util/publicimage";

export const Intro = () => {
  return (
    <InnerContainer view={`true`}>
      <MainLogo>
        <img src={`${publicImage("mainlogo")}`} alt="profile" />
      </MainLogo>
      <MsgBox>
        안녕하세요. 웹 프론트엔드 개발자 요한입니다. 👋
        <br />
        <br />
        항상 어제보다 더 나은 오늘을 만들기 위해 노력하고 있습니다.
      </MsgBox>
    </InnerContainer>
  );
};
const MainLogo = styled.div`
  margin-bottom: 60px;
  display: flex;
  justify-content: center;
  background-color: white;
  border-radius: 20px;
`;
