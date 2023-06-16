import styled from "styled-components";
import { InnerContainer, ContentBox } from "../common/styles";
import { useComponentViewCheck } from "../../hooks/useComponentViewCheck";
import { publicImage } from "../../util/publicimage";

const mkStack = (stack: string, importance: string) => {
  const imageSrc = publicImage(stack);
  return {
    stack,
    importance,
    imageSrc,
  };
};
const stackArr = [
  mkStack("nextjs", "100"),
  mkStack("react", "100"),
  mkStack("javascript", "100"),
  mkStack("typescript", "95"),
  mkStack("styledcomponents", "90"),
  mkStack("html", "80"),
  mkStack("reduxToolkit", "80"),
  mkStack("vercel", "70"),
  mkStack("css", "70"),
  mkStack("git", "50"),
  mkStack("nestjs", "40"),
  mkStack("postgreSQL", "20"),
  mkStack("jest", "10"),
];

export const Stack = () => {
  const { inView } = useComponentViewCheck("stackBox");

  return (
    <InnerContainer
      style={
        inView
          ? { opacity: "1", paddingTop: "0px" }
          : { opacity: "0", paddingTop: "80px" }
      }
    >
      <h2 id="stackBox">Stack</h2>
      <ContentBox>
        {stackArr.map((v, i) => {
          return (
            <BubbleElement key={i}>
              <img
                src={v.imageSrc}
                alt={v.stack}
                width={`${+v.importance * 2}px`}
                height={`${+v.importance * 2}px`}
              />
            </BubbleElement>
          );
        })}
      </ContentBox>
    </InnerContainer>
  );
};

const BubbleElement = styled.span`
  & img {
    position: relative;
    border-radius: 50%;
    object-fit: cover;
    cursor: pointer;
    transform: scale(1);
    transition: 0.3s;
    &:hover {
      transform: scale(1.1);
    }
  }
`;
