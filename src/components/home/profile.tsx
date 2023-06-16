import styled from "styled-components";
import { InnerContainer, MsgBox } from "../common/styles";
import { useComponentViewCheck } from "../../hooks/useComponentViewCheck";

export const Profile = () => {
  const { inView } = useComponentViewCheck("profileBox");

  return (
    <InnerContainer
      style={
        inView
          ? { opacity: "1", paddingTop: "0px" }
          : { opacity: "0", paddingTop: "50px" }
      }
    >
      <h2 id="profileBox">Profile</h2>
      <MsgBox>
        <span>Name : John(26)</span>
        <br />
        <br />
        <span>Email : yhl0078@gmail.com</span>
        <br />
        <br />
        <span></span>
      </MsgBox>
    </InnerContainer>
  );
};
