import React, { useEffect, useRef } from "react";
import Layout from "../components/layout/Layout";
import Partners from "../components/sections/Partners";
import {
  GridContainer,
  Section,
  TextBox,
} from "../components/layout/Layout.styles";
import SectionTitle from "../components/sections/SectionTitle";
import { SectionGrayStyles } from "../components/sections/SectionGray.styles";
import Heading from "../components/layout/typography/Heading";
import Subheading from "../components/elements/Subheading";
import AboutImages from "../components/sections/AboutImages";
import SEO from "../components/Seo";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const AboutPage = () => {
  const ref = useRef(null);
  const el = useRef(null);
  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    const element = ref.current;
    const anotherElement = el.current;
    gsap.from(element.querySelectorAll(".fade-top"), {
      opacity: 0,
      y: 50,
      duration: 0.5,
    });
    gsap.from(anotherElement.querySelectorAll(".fade"), {
      opacity: 0,
      y: 50,
      duration: 0.5,
    });
  }, []);

  return (
    <Layout>
      <SEO title="O nas" />
      <Section ref={ref}>
        <div className="hero">
          <SectionTitle
            title="O nas"
            lead="Oferujemy sprawdzone rozwiązania w nawadnianiu rolnictwa! Oferujemy sprawdzone rozwiązania w nawadnianiu rolnictwa!"
          />
        </div>
      </Section>
      <SectionGrayStyles ref={el}>
        <GridContainer className="fade">
          <div className="col-1">
            <Heading>
              <Subheading color={"green"} text="Kim jesteśmy?" />
              <h2 className="gray">O firmie</h2>
            </Heading>
            <TextBox>
              <div className="full-col">
                <p>
                  <b>
                    Oferujemy sprawdzone rozwiązania w nawadnianiu rolnictwa!
                    Oferujemy sprawdzone rozwiązania w nawadnianiu
                    rolnictwa!Oferujemy sprawdzone rozwiązania w nawadnianiu
                    rolnictwa! Oferujemy sprawdzone rozwiązania w nawadnianiu
                    rolnictwa!
                  </b>
                </p>
              </div>
            </TextBox>
          </div>

          <div className="col-2">
            <TextBox>
              <div className="full-col">
                <p>
                  Oferujemy sprawdzone rozwiązania w nawadnianiu rolnictwa!
                  Oferujemy sprawdzone rozwiązania w nawadnianiu rolnictwa!
                  Oferujemy sprawdzone rozwiązania w nawadnianiu rolnictwa!
                  Oferujemy sprawdzone rozwiązania w nawadnianiu rolnictwa!
                </p>
                <p>
                  Oferujemy sprawdzone rozwiązania w nawadnianiu rolnictwa!
                  Oferujemy sprawdzone rozwiązania w nawadnianiu rolnictwa!
                  Oferujemy sprawdzone rozwiązania w nawadnianiu rolnictwa!
                  Oferujemy sprawdzone rozwiązania w nawadnianiu rolnictwa!
                </p>
                <ul className="product-features-list">
                  <li>
                    <div>
                      Nemo enim ipsam voluptatem quia voluptas sit aspernatur
                      aut odit aut fugit, sed quia consequuntur magni dolores
                      eos qui ratione voluptatem sequi nesciunt.
                    </div>
                  </li>
                  <li>
                    <div>
                      Nemo enim ipsam voluptatem quia voluptas sit aspernatur
                      aut odit aut fugit, sed quia consequuntur magni dolores
                      eos qui ratione voluptatem sequi nesciunt.
                    </div>
                  </li>
                  <li>
                    <div>
                      Nemo enim ipsam voluptatem quia voluptas sit aspernatur
                      aut odit aut fugit, sed quia consequuntur magni dolores
                      eos qui ratione voluptatem sequi nesciunt.
                    </div>
                  </li>
                </ul>
              </div>
            </TextBox>
          </div>
        </GridContainer>
        <AboutImages />
      </SectionGrayStyles>
      <Partners />
    </Layout>
  );
};

export default AboutPage;
