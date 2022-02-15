import React from "react";
import { BsEnvelope, BsFillTelephoneFill, BsPinAngle } from "react-icons/bs";
import { FaRegAddressCard } from "react-icons/fa";
import { AddressItem, StyledAddressBox } from "./AddressBox.styles";

const AddressBox = ({ data }) => {
  const { email, company, localization, phone } = data;
  return (
    <StyledAddressBox>
      <AddressItem>
        <BsPinAngle />
        <div>
          <p className="title">{localization.title}:</p>
          <p>{localization.data}</p>
        </div>
      </AddressItem>
      <AddressItem>
        <BsEnvelope />
        <div>
          <p className="title">{email.title}:</p>
          <p>
            <a href={`mailto:${email.data}`}>{email.data}</a>
          </p>
        </div>
      </AddressItem>
      <AddressItem>
        <FaRegAddressCard />
        <div>
          <p className="title">{company.title}:</p>
          <p>KMK Agro</p>
          <p>D. Kaźmierczak C. Mądry M. Kaźmierczak Sp. j.</p>
          <p>NIP: 786-15-72-061</p>
        </div>
      </AddressItem>
      <AddressItem>
        <BsFillTelephoneFill />
        <div>
          <p className="title">{phone.title}:</p>
          <p>
            <a href={`tel:${phone.data.replace(/ /g, "")}`}>{phone.data}</a>
          </p>
        </div>
      </AddressItem>
    </StyledAddressBox>
  );
};

export default AddressBox;
