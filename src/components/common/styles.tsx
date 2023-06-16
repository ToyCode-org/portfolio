import styled from "styled-components";

export const MainContainer = styled.div`
  margin: 0 auto;
  padding-bottom: 80px;
  width: 80%;
`;

export const InnerContainer = styled.div`
  margin-top: 50px;
  min-height: 400px;
  transition: 0.6s;
`;

export const ContentBox = styled.div`
  margin-top: 30px;
  padding: 30px;
  background-color: ${(props) => props.theme.backgroundColor};
  border-radius: 10px;
  border: 2px solid ${(props) => props.theme.boxShadow};
`;

export const MsgBox = styled.div`
  margin: 30px 0;
  padding: 30px;
  background-color: ${(props) => props.theme.backgroundColor};
  border-radius: 10px;
  border: 2px solid ${(props) => props.theme.boxShadow};
  font-weight: 500;
  & a {
    transition: 0.2s;
    &:hover {
      color: ${(props) => props.theme.mainFontColor};
    }
  }
`;
