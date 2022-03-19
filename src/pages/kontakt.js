import React from "react";
import Layout from "components/layout/Layout";
import WrapperMap from "components/sections/contactPage/WrapperMap";
import Contact from "components/sections/contactPage/Contact";
import SEO from "components/Seo";

const ContactPage = () => {
  return (
    <Layout>
      <SEO title="Kontakt" />
      <WrapperMap />
      <Contact />
    </Layout>
  );
};

export default ContactPage;
