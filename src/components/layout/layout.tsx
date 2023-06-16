import styled, { keyframes } from "styled-components";
import { useState, useEffect } from "react";
import { LoadingSpinner } from "../../util/loadingSpinner";
import { Header } from "./header";
import { Chat } from "./chat/chat";

interface Props {
  children: React.ReactNode;
}

export const Layout = ({ children }: Props) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);
  return (
    <LayoutWrap>
      <Header />
      <Content>{children}</Content>
      {isLoading ? (
        <Greeting>
          <LoadingSpinner />
        </Greeting>
      ) : null}
      <Chat />
    </LayoutWrap>
  );
};

const greetingFadeout = keyframes`
    0% {
        background-color:black;
    }  75% {
        background-color:black;
    } 100% {
        background-color:transparent;
    }
`;

const Greeting = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vw;
  animation: ${greetingFadeout} 2s;
  z-index: 999;
`;

const LayoutWrap = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ${(props) => props.theme.mainBackgroundColor};
  color: ${(props) => props.theme.mainFontColor};
`;

const contentFadein = keyframes`
    0% {
        opacity:0;
    } 75% {
        opacity:0.5;
    } 100% {
        opacity:1;
    }
`;
const Content = styled.div`
  margin: 0 auto;
  padding-top: 5%;
  width: 90%;
  animation: ${contentFadein} 2s;
`;
