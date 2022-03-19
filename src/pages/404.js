import React from "react";
import { Section } from "components/layout/Layout.styles";
import Layout from "components/layout/Layout";
import SEO from "components/Seo";

const ErrorPage = () => {
  return (
    <Layout>
      <SEO title="Strona nie istnieje." />
      <Section>404</Section>
    </Layout>
  );
};

export default ErrorPage;
