import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { StyledOfferItem } from "./OfferItem.styles";
import { StaticImage } from "gatsby-plugin-image";
import Button from "../button/Button";

const OfferItem = ({ img, description }) => {
  return (
    <StyledOfferItem>
      <a href="/oferta">
        {img && (
          <div className="img-container">
            <StaticImage
              src={"../../assets/images/d3.png"}
              alt="Test"
              quality={60}
              placeholder="blurred"
              height={300}
            />
          </div>
        )}

        <div className="offer-item-container">
          <div className="offer-item-header">
            <h5>Skuteczne nawadanianie roślin</h5>
          </div>
          <div className="offer-item-text">
            <p>
              Oferujemy sprawdzone rozwiązania w nawadnianiu rolnictwa!
              Oferujemy sprawdzone rozwiązania w nawadnianiu rolnictwa!
              Oferujemy sprawdzone rozwiązania w nawadnianiu rolnictwa!
            </p>
          </div>
          {!description && (
            <Button page={"/oferta"} secondary>
              Zobacz produkt <BsArrowRight />
            </Button>
          )}
        </div>
      </a>
    </StyledOfferItem>
  );
};

export default OfferItem;
