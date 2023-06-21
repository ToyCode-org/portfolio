import React from "react";
import { InnerContainer, MsgBox } from "../common/styles";
import { useComponentViewCheck } from "../../hooks/useComponentViewCheck";

const mkInfo = (isLink: boolean, info: string, content: string) => {
  return {
    isLink,
    info,
    content,
  };
};

const infoArray = [
  mkInfo(false, "Name", "John(26)"),
  mkInfo(false, "Email", "yhl0078@gmail.com"),
  mkInfo(true, "Github", "https://github.com/LEE-YO-HAN"),
  mkInfo(true, "Blog", "https://lee-yo-han.github.io"),
];

export const Profile = () => {
  const { inView } = useComponentViewCheck("profileBox");

  return (
    <InnerContainer view={`${inView}`}>
      <h2 id="profileBox">Profile 🧾</h2>
      <MsgBox>
        {infoArray.map((v, i) => {
          return (
            <React.Fragment key={i}>
              <span>
                {v.info} :{" "}
                {v.isLink ? <a href={v.content}>{v.content}</a> : v.content}
              </span>
              <br />
              <br />
            </React.Fragment>
          );
        })}
      </MsgBox>
    </InnerContainer>
  );
};
