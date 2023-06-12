import styled, { keyframes } from "styled-components";

export const LoadingSpinner = () => {
  return (
    <LoadingContainer>
      <LoadingIcon />
      <LoadingMsg>Loading...</LoadingMsg>
    </LoadingContainer>
  );
};

const LoadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const spinAnimation = keyframes`
  0% {
    transform: rotate(0deg);
    border-top-color: #000000;
    border-right-color: #000000;
  } 75% {
    border-top-color: #000000;
    border-right-color: #000000;
  } 100% {
    transform: rotate(360deg);
    border-top-color: #fff;
    border-right-color: #fff;
  }
`;

const LoadingIcon = styled.div`
  margin-bottom: 10px;
  width: 50px;
  height: 50px;
  border: 4px solid #fff;
  border-radius: 50%;
  animation: ${spinAnimation} 2s;
`;

const LoadingMsg = styled.div`
  font-weight: bold;
  color: white;
`;
