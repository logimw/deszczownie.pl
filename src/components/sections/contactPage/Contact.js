import React from "react";
import { GridWrapper, Section, TextBox } from "../../layout/Layout.styles";
import Heading from "../../layout/typography/Heading";
import Subheading from "../../elements/Subheading";
import ContactForm from "./ContactForm";
import AddressBox from "./AddressBox";

const contactData = {
  localization: {
    title: "Siedziba naszej firmy znajduje się",
    data: "ul. Poznańska 20,\n" + "\n" + "Brodowo 63-000 Środa Wlkp.",
  },
  email: {
    title: "Adres e-mail",
    data: "biuro@kmkagro.com",
  },
  company: {
    title: "Firma",
    data:
      "KMK Agro\n" +
      "\n" +
      "D. Kaźmierczak C. Mądry M. Kaźmierczak Sp. j.\n" +
      "\n" +
      "NIP: 786-15-72-061",
  },
  phone: {
    title: "Masz pytania? Zadzwoń do nas",
    data: "61 285 01 79",
  },
};

const Contact = () => {
  return (
    <Section>
      <GridWrapper>
        <div className="col-1">
          <Heading>
            <h1>Kontakt</h1>
          </Heading>
          <TextBox>
            <div className="col">
              <p>
                Chcesz nawiązać współpracę? Szukasz podpowiedzi? Masz pytania?
                Jesteśmy tu dla Ciebie! Zapraszamy do kontaktu.
              </p>
            </div>
          </TextBox>
          <AddressBox data={contactData} />
        </div>

        <div className="col-2">
          <Heading>
            <Subheading color="green" text="Zapraszamy do kontaktu" />
            <h2>Masz pytania? Napisz do nas!</h2>
          </Heading>
          <ContactForm />
        </div>
      </GridWrapper>
    </Section>
  );
};

export default Contact;
