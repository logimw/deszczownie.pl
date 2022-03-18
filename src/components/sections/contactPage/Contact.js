import React from "react";
import { GridWrapper, Section, TextBox } from "components/layout/Layout.styles";
import Heading from "components/layout/typography/Heading";
import Subheading from "components/elements/Subheading";
import ContactForm from "./ContactForm";
import AddressBox from "./AddressBox";
import { graphql, useStaticQuery } from "gatsby";

// const contactData = {
//   localization: {
//     title: "Siedziba naszej firmy znajduje się",
//     data: "ul. Poznańska 20,\n" + "\n" + "Brodowo 63-000 Środa Wlkp.",
//   },
//   email: {
//     title: "Adres e-mail",
//     data: "biuro@kmkagro.com",
//   },
//   company: {
//     title: "Firma",
//     data:
//       "KMK Agro\n" +
//       "\n" +
//       "D. Kaźmierczak C. Mądry M. Kaźmierczak Sp. j.\n" +
//       "\n" +
//       "NIP: 786-15-72-061",
//   },
//   phone: {
//     title: "Masz pytania? Zadzwoń do nas",
//     data: "61 285 01 79",
//   },
// };

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

  return (
    <Section>
      <GridWrapper>
        <div className="col-1">
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

        <div className="col-2">
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
