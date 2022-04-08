import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { GridContainer, Section } from "../components/layout/Layout.styles";
import SEO from "../components/Seo";
import Layout from "../components/layout/Layout";

const PrivatePolicyPage = () => {
  const data = useStaticQuery(graphql`
    {
      allContentfulPolitykaPrywatnosci {
        nodes {
          content {
            raw
          }
        }
      }
    }
  `);
  const [content] = data.allContentfulPolitykaPrywatnosci.nodes;
  const obj = JSON.parse(content.content.raw);
  return (
    <Layout>
      <SEO title="Polityka prywatności" />
      <Section>
        <GridContainer>
          <div className="content">
            <div
              dangerouslySetInnerHTML={{
                __html: obj.content[0].content[0].value,
              }}
            />
          </div>
        </GridContainer>
      </Section>
    </Layout>
  );
};

export default PrivatePolicyPage;
