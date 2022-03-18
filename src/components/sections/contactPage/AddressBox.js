import React from "react";
import { AddressItem, StyledAddressBox } from "./AddressBox.styles";
import {
  LoadingIcon,
  PhoneIcon,
  EmailIcon,
  AccountIcon,
} from "assets/icons/Icons";

const AddressBox = ({ data }) => {
  const { email, company, localization, phone } = data;
  return (
    <StyledAddressBox>
      <AddressItem>
        <LoadingIcon />
        <div>
          <p className="title">{localization.title}:</p>
          <p>{localization.data}</p>
        </div>
      </AddressItem>
      <AddressItem>
        <EmailIcon />
        <div>
          <p className="title">{email.title}:</p>
          <p>
            <a href={`mailto:${email.data}`}>{email.data}</a>
          </p>
        </div>
      </AddressItem>
      <AddressItem>
        <AccountIcon />
        <div>
          <p className="title">{company.title}:</p>
          <p>{company.data}</p>
        </div>
      </AddressItem>
      <AddressItem>
        <PhoneIcon />
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
