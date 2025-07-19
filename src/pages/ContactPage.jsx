import React from "react";
import MainLayout from "../layout/MainLayout";
import ContactIntro from "../components/ContactIntro";
import ContactDetails from "../components/ContactDetails";

const ContactPage = () => {
  return (
    <MainLayout>
      <ContactIntro />
      <ContactDetails />
    </MainLayout>
  );
};

export default ContactPage;
