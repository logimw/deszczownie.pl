import React from "react";
import { Section } from "components/layout/Layout.styles";
import Layout from "components/layout/Layout";
import SEO from "components/Seo";
import { GridContainer } from "../components/layout/Layout.styles";
import Button from "../components/button/Button";
import Heading from "../components/layout/typography/Heading";

const ErrorPage = () => {
  return (
    <Layout>
      <SEO title="Strona nie istnieje." />
      <Section>
        <GridContainer>
          <div className="not-found-page">
            <Heading>
              <h1>Nie znaleziono strony.</h1>
            </Heading>
            <h5>Kliknij, by wrócić na stronę główną:</h5>

            <Button page="/">Powrót na stronę główną</Button>
          </div>
        </GridContainer>
      </Section>
    </Layout>
  );
};

export default ErrorPage;
