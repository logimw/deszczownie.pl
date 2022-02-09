import React from "react";
import Layout from "../components/layout/Layout";
import { Section } from "../components/layout/Layout.styles";
import Map from "../components/sections/Map";

const ContactPage = () => {
  return (
    <Layout>
      <Map />
      <Section>kontakt</Section>
    </Layout>
  );
};

export default ContactPage;
