import React from "react";
import Layout from "../components/layout/Layout";
import { Section } from "../components/layout/Layout.styles";
import WrapperMap from "../components/sections/WrapperMap";

const ContactPage = () => {
  return (
    <Layout>
      <WrapperMap />
      <Section>kontakt</Section>
    </Layout>
  );
};

export default ContactPage;
