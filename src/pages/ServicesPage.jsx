import React from "react";
import MainLayout from "../layout/MainLayout";
import ServicesIntro from "../components/ServicesIntro";
import Services from "../components/Services";
import Packages from "../components/Packages";

const ServicesPage = () => {
  return (
    <MainLayout>
      <ServicesIntro />
      <Services />
      <Packages />
    </MainLayout>
  );
};

export default ServicesPage;
