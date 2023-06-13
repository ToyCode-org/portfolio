import styled, { keyframes } from "styled-components";
import { useState, useEffect } from "react";
import { LoadingSpinner } from "../../util/loadingSpinner";

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
    <>
      {isLoading ? (
        <Greeting>
          <LoadingSpinner />
        </Greeting>
      ) : (
        <LayoutWrap>
          <Content>{children}</Content>
        </LayoutWrap>
      )}
    </>
  );
};

const greetingFadeout = keyframes`
    0% {
        background-color:black;
    }  75% {
        background-color:black;
    } 100% {
        background-color:white;
    }
`;

const Greeting = styled.div`
  animation: ${greetingFadeout} 2s;
`;

const LayoutWrap = styled.div`
  width: 100vw;
  height: 100vh;
`;

const contentFadein = keyframes`
    0% {
        opacity:0;
    } 100% {
        opacity:1;
    }
`;
const Content = styled.div`
  margin: 0 auto;
  padding-top: 10%;
  width: 90%;
  animation: ${contentFadein} 1s;
`;
