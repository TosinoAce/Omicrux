import React from "react";
import AboutIntro from "../components/AboutIntro";
import MV from "../components/MV";
import Team from "../components/Team";
import MainLayout from "../layout/MainLayout";

const AboutPage = () => {
  return (
    <MainLayout>
      <AboutIntro />
      <MV />
      <Team />
    </MainLayout>
  );
};

export default AboutPage;
