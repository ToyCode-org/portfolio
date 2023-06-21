import { MainContainer } from "../components/common/styles";
import { Intro } from "../components/home/intro";
import { Profile } from "../components/home/profile";
import { Stack } from "../components/home/stack";
import { Educations } from "../components/home/educations";

export const Home = () => {
  return (
    <MainContainer>
      <Intro />
      <Profile />
      <Stack />
      <Educations />
    </MainContainer>
  );
};
