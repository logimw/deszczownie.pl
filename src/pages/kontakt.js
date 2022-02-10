import React from "react";
import Layout from "../components/layout/Layout";
import WrapperMap from "../components/sections/contactPage/WrapperMap";
import Contact from "../components/sections/contactPage/Contact";

const ContactPage = () => {
  return (
    <Layout>
      <WrapperMap />
      <Contact />
    </Layout>
  );
};

export default ContactPage;
