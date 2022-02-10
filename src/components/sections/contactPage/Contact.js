import React from "react";
import { GridWrapper, Section } from "../../layout/Layout.styles";
import Heading from "../../layout/typography/Heading";
import Subheading from "../../elements/Subheading";
import ContactForm from "./ContactForm";
import { BsEnvelope, BsFillTelephoneFill, BsPinAngle } from "react-icons/bs";
import { FaRegAddressCard } from "react-icons/fa";

const Contact = () => {
  return (
    <Section>
      <GridWrapper>
        <div>
          <Heading>
            <h1>Kontakt</h1>
          </Heading>
          <p>
            Chcesz nawiązać współpracę? Szukasz podpowiedzi? Masz pytania?
            Jesteśmy tu dla Ciebie! Zapraszamy do kontaktu.
          </p>
          <BsPinAngle />
          <BsEnvelope />
          <FaRegAddressCard />
          <BsFillTelephoneFill />
        </div>

        <div>
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
