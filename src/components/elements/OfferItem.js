import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { StyledOfferItem } from "./OfferItem.styles";
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";
import Button from "../button/Button";
import slugify from "slugify";

const OfferItem = ({ img, title, description }) => {
  const slug = slugify(title, {
    replacement: "-",
    lower: true,
  });
  const link = `/oferta/${slug}` || "/oferta";
  const getHeader = () => {
    return (
      <div className="offer-item-header">
        {description ? (
          <h1>{title}</h1>
        ) : (
          <h5>{title || "Skuteczne nawadanianie roślin"}</h5>
        )}
      </div>
    );
  };
  return (
    <StyledOfferItem>
      <Link to={link}>
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
          {getHeader()}
          <div className="offer-item-text">
            <p>
              Oferujemy sprawdzone rozwiązania w nawadnianiu rolnictwa!
              Oferujemy sprawdzone rozwiązania w nawadnianiu rolnictwa!
              Oferujemy sprawdzone rozwiązania w nawadnianiu rolnictwa!
            </p>
          </div>
          {!description && (
            <Button page={link} secondary>
              Zobacz produkt <BsArrowRight />
            </Button>
          )}
        </div>
      </Link>
    </StyledOfferItem>
  );
};

export default OfferItem;
