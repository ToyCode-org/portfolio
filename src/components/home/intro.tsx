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
        안녕하세요. 웹 프론트엔드 개발자 John입니다. 👋
        <br />
        <br />
        다양한 개발 경험을 좋아하며 성장하는 습관을 만들어 가고 있습니다.
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
