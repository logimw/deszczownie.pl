import React from "react";
import Button from "../../button/Button";

const ContactForm = () => {
  return (
    <div>
      <form>
        <div className="form-group">
          <label htmlFor="name">Imię i nazwisko*</label>
          <input type="text" id="name" name="name" />
        </div>
        <div className="form-group">
          <label htmlFor="email">Adres e-mail*</label>
          <input type="email" id="email" name="email" />
        </div>
        <div className="form-group">
          <label htmlFor="tel">Numer kontaktowy</label>
          <input type="text" id="tel" name="tel" />
        </div>
        <div className="form-group">
          <label htmlFor="message">Treść wiadomości</label>
          <textarea id="message" name="message" />
        </div>
        <div className="form-group">
          <label htmlFor="agree">
            Akceptuję politykę prywatności i wyrażam zgodę na przetrwarzanie
            danych osobowych.
          </label>
          <input id="agree" name="agree" type="checkbox" />
        </div>
        <Button secondary>Wyślij wiadomość</Button>
      </form>
    </div>
  );
};

export default ContactForm;
