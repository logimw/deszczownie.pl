import React from "react";
import Button from "../../button/Button";
import Input from "./Input";
import Checkbox from "./Checkbox";
import { VscArrowRight } from "react-icons/vsc";

const ContactForm = () => {
  return (
    <div>
      <form>
        <Input
          id="name"
          type="text"
          label="Imię i nazwisko"
          placeholder="Np. Jan Kowalski"
          required
        />
        <Input
          id="email"
          type="email"
          label="Adres e-mail"
          placeholder="Np. jan.kowalski@gmail.com"
          required
        />
        <Input
          id="tel"
          type="tel"
          label="Numer kontaktowy"
          placeholder="Np. 500 600 500"
        />
        <Input
          id="message"
          type="textarea"
          label="Treść wiadomości"
          placeholder="Wiadomość..."
          required
        />
        <Checkbox
          id="agree"
          name="agree"
          label="            Akceptuję politykę prywatności i wyrażam zgodę na przetrwarzanie
            danych osobowych."
          required
        />

        <Button secondary>
          Wyślij wiadomość <VscArrowRight />
        </Button>
      </form>
    </div>
  );
};

export default ContactForm;
