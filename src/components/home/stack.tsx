import styled from "styled-components";
import React from "react";
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
  mkStack("nestjs", "70"),
  mkStack("postgreSQL", "50"),
  mkStack("jest", "30"),
];

const rc = Math.ceil(stackArr.length);
const testBubblePosition = new Array(rc).fill(new Array(rc).fill(null));

const center = Math.floor(rc / 2);

stackArr.forEach((v) => {});

console.log(testBubblePosition);

const bubblePositions = [
  [null, null, null, null, null, null, null],
  [
    null,
    mkStack("nestjs", "70"),
    mkStack("postgreSQL", "50"),
    mkStack("jest", "30"),
    null,
    null,
    null,
  ],
  [
    null,
    mkStack("git", "50"),
    mkStack("javascript", "100"),
    mkStack("typescript", "95"),
    null,
    null,
    null,
  ],
  [
    null,
    mkStack("css", "70"),
    mkStack("react", "100"),
    mkStack("nextjs", "100"),
    mkStack("styledcomponents", "90"),
    null,
    null,
  ],
  [
    null,
    mkStack("vercel", "70"),
    mkStack("reduxToolkit", "80"),
    mkStack("html", "80"),
    null,
    null,
    null,
  ],
  [null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null],
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
        {/* {stackArr.map((v, i) => {
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
        })} */}
        <BubbleChart>
          {bubblePositions.map((row, rowIndex) => {
            return (
              <div className="row" key={rowIndex}>
                {row.map((col, colIndex) => {
                  const position = [rowIndex, colIndex];
                  const dataIndex = bubblePositions[position[0]][position[1]];
                  if (dataIndex !== null) {
                    return (
                      <BubbleElement key={colIndex}>
                        <img
                          src={dataIndex.imageSrc}
                          alt={dataIndex.stack}
                          width={`${+dataIndex.importance * 2}px`}
                          height={`${+dataIndex.importance * 2}px`}
                        />
                      </BubbleElement>
                    );
                  }
                  return null;
                })}
              </div>
            );
          })}
        </BubbleChart>
      </ContentBox>
    </InnerContainer>
  );
};

const BubbleChart = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 10px;

  & .row {
    display: flex;
    justify-content: center;
  }
`;

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
