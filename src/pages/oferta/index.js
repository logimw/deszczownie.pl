import React, { useEffect, useRef } from "react";
import Layout from "components/layout/Layout";
import { Section } from "components/layout/Layout.styles";
import Partners from "components/sections/Partners";
import SectionTitle from "components/sections/SectionTitle";
import SectionOffer from "components/sections/SectionOffer";
import SEO from "components/Seo";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const OffersPage = () => {
  const ref = useRef(null);
  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    const element = ref.current;
    gsap.from(element.querySelectorAll(".fade-top"), {
      opacity: 0,
      y: 50,
      duration: 0.5,
    });
  }, []);

  return (
    <Layout>
      <SEO title="Oferta" />
      <Section ref={ref}>
        <div className="hero">
          <SectionTitle title="Oferta" />
        </div>
      </Section>
      <SectionOffer />
      <Partners />
    </Layout>
  );
};

export default OffersPage;
