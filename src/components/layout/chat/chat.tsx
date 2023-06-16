import styled from "styled-components";

export const Chat = () => {
  return (
    <ChatWrap>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="50"
        height="50"
        viewBox="0 0 50 50"
      >
        <rect width="50" height="50" rx="4" fill="#e9ecef" />
        <circle cx="25" cy="25" r="20" fill="#ffd700" />
        <path d="M35 45L45 45L45 35L35 45Z" fill="#ffd700" />
        <g transform="translate(15, 12)">
          <circle cx="3" cy="8" r="3" fill="#000" />
          <circle cx="15" cy="8" r="3" fill="#000" />
          <path d="M6 15L12 15L12 22Z" fill="#000" />
        </g>
      </svg>
    </ChatWrap>
  );
};

const ChatWrap = styled.div`
  position: fixed;
  right: 50px;
  bottom: 50px;
  cursor: pointer;
  transition: 0.2s;

  & svg {
    transition: 0.1s;
    transform: scale(1);
    &:hover {
      transform: scale(1.1);
    }
  }
`;
