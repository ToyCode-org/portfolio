import styled, { keyframes } from "styled-components";

const MainContainerFadein = keyframes`
  0%{
    opacity:0;
  }
  100% {
    opacity:1;
  }
`;

export const MainContainer = styled.div`
  position: relative;
  margin: 0 auto;
  padding-bottom: 80px;
  width: 80%;
  animation: ${MainContainerFadein} 0.6s;
`;

export const InnerContainer = styled.div<{ view: string }>`
  margin-bottom: 150px;
  min-height: 200px;
  opacity: ${(props) => (props.view === "true" ? 1 : 0)};
  padding-top: ${(props) => (props.view === "true" ? 0 : 80)}px;
  transition: 0.6s;
`;

export const ContentBox = styled.div`
  margin: 30px 0;
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
