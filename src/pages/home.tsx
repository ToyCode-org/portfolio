import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import { LoadingSpinner } from "../util/loadingSpinner";

export const Home = () => {
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
        <div>
          <p>content</p>
        </div>
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
