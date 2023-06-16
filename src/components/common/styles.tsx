import styled from "styled-components";

export const MainContainer = styled.div`
  margin: 0 auto;
  width: 80%;
`;

export const InnerContainer = styled.div`
  margin-top: 50px;
  min-height: 500px;
  transition: 0.6s;
`;

export const MsgBox = styled.div`
  margin: 30px 0;
  padding: 30px;
  background-color: ${(props) => props.theme.backgroundColor};
  border-radius: 10px;
  font-weight: 500;

  & a {
    transition: 0.2s;
    &:hover {
      color: ${(props) => props.theme.mainFontColor};
    }
  }
`;
