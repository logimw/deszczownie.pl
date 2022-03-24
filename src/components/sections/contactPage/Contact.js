import React from "react";
import { useEffect, useRef } from "react";
import { GridWrapper, Section, TextBox } from "components/layout/Layout.styles";
import Heading from "components/layout/typography/Heading";
import Subheading from "components/elements/Subheading";
import ContactForm from "./ContactForm";
import AddressBox from "./AddressBox";
import { graphql, useStaticQuery } from "gatsby";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Contact = () => {
  const data = useStaticQuery(graphql`
    {
      allContentfulKontakt {
        nodes {
          subtitle
          title
          secondTitle
          greenSubtitle
          childrenContentfulKontaktContactDataJsonNode {
            company {
              data
              title
            }
            email {
              data
              title
            }
            localization {
              data
              title
            }
            phone {
              data
              title
            }
          }
        }
      }
    }
  `);

  const {
    subtitle,
    title,
    secondTitle,
    greenSubtitle,
    childrenContentfulKontaktContactDataJsonNode: [contactData],
  } = data.allContentfulKontakt.nodes[0];

  const ref = useRef(null);
  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    const element = ref.current;
    gsap.fromTo(
      element.querySelectorAll(".fade"),
      {
        opacity: 0,
        y: 50,
      },
      {
        opacity: 1,
        y: 0,
        scrollTrigger: {
          trigger: element.querySelector("h1"),
          start: "bottom bottom",
          end: "top top",
        },
      },
    );
  }, []);

  return (
    <Section>
      <GridWrapper ref={ref}>
        <div className="col-1 fade">
          <Heading>
            <h1>{title}</h1>
          </Heading>
          <TextBox>
            <div className="col">
              <p>{subtitle}</p>
            </div>
          </TextBox>
          <AddressBox data={contactData} />
        </div>

        <div className="col-2 fade">
          <Heading>
            <Subheading color="green" text={greenSubtitle} />
            <h2>{secondTitle}</h2>
          </Heading>
          <ContactForm />
        </div>
      </GridWrapper>
    </Section>
  );
};

export default Contact;
