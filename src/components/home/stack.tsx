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
  mkStack("nestjs", "70"),
  mkStack("postgreSQL", "50"),
  mkStack("jest", "30"),
];

const rc = Math.floor(stackArr.length / 2);

// let testBubblePosition = new Array(rc).fill(new Array(rc).fill(null));
// TODO: make set bubble position algorithm

const center = Math.floor(rc / 2);

const bubblePositions = [
  [null, null, null, null, null, null, null],
  [
    null,
    mkStack("postgreSQL", "50"),
    mkStack("git", "50"),
    mkStack("jest", "30"),
    null,
    null,
    null,
  ],
  [
    null,
    mkStack("nestjs", "70"),
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
    <InnerContainer view={`${inView}`}>
      <h2 id="stackBox">Stack 🎨</h2>
      <ContentBox>
        <BubbleChart>
          {bubblePositions.map((row, rowIndex) => {
            return (
              <div
                className="row"
                key={rowIndex}
                style={
                  rowIndex <= center
                    ? { alignItems: "flex-end" }
                    : { alignItems: "flex-start" }
                }
              >
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
  position: relative;
  & img {
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
