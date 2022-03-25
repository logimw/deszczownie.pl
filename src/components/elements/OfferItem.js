import React from "react";
import PropTypes from "prop-types";
import { BsArrowRight } from "react-icons/bs";
import { StyledOfferItem } from "./OfferItem.styles";
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";
import Button from "../button/Button";
import slugify from "slugify";

const OfferItem = ({ img, title, description, noLink }) => {
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

  const ConditionalLink = ({ children }) => {
    if (noLink) {
      return <>{children}</>;
    } else {
      return <Link to={link}>{children}</Link>;
    }
  };

  return (
    <StyledOfferItem className="fade-group">
      <ConditionalLink>
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
      </ConditionalLink>
    </StyledOfferItem>
  );
};

OfferItem.propTypes = {
  img: PropTypes.string,
  title: PropTypes.string.isRequired,
  description: PropTypes.bool,
  noLink: PropTypes.bool,
};

export default OfferItem;
