import React from "react";
import { GridContainer, Section, TextBox } from "../layout/Layout.styles";
import Heading from "../layout/typography/Heading";
import { StaticImage } from "gatsby-plugin-image";
import { ImgWrapper, LeadWrapper } from "./Lead.styles";
import Button from "../button/Button";
import IconWrapper from "../layout/IconWrapper";
import { BsArrowRight } from "react-icons/bs";
import Drops from "../../assets/svg/water-drops.svg";
import Subheading from "../elements/Subheading";

const Lead = ({ text }) => {
  return (
    <Section>
      <GridContainer>
        <LeadWrapper isPrimary>
          <IconWrapper>
            <img src={Drops} alt="water drops" />
            <h5>Sprawdzone rozwiązania</h5>
          </IconWrapper>
          <IconWrapper isBottom isLogo>
            <StaticImage src="../../assets/images/rm-logo.png" alt="RM logo" />{" "}
          </IconWrapper>
          <ImgWrapper>
            <StaticImage
              src="../../assets/images/KMK-zdjecie-60.jpg"
              alt="Deszczownia"
              width="632"
              height="720"
            />
          </ImgWrapper>
        </LeadWrapper>
        <LeadWrapper>
          <Heading>
            <Subheading color={"green"} />
            <h1> Oferujemy sprawdzone rozwiązania w nawadnianiu!</h1>
          </Heading>
          <TextBox>
            <p>
              <b>{text}</b>
            </p>
            <div>
              <p>
                Oferujemy sprawdzone rozwiązania w nawadnianiu rolnictwa!
                Oferujemy sprawdzone rozwiązania w nawadnianiu rolnictwa!
                Oferujemy sprawdzone rozwiązania w nawadnianiu rolnictwa!
                Oferujemy sprawdzone rozwiązania w nawadnianiu rolnictwa!
              </p>
              <p>Oferujemy sprawdzone rozwiązania w nawadnianiu rolnictwa!</p>
            </div>
            <div className="second-col">
              <p>Oferujemy sprawdzone rozwiązania w nawadnianiu rolnictwa!</p>
            </div>
            <ul>
              <li>
                <span>sprawdzone rozwiązania</span>
              </li>
              <li>
                <span>sprawdzone rozwiązania</span>
              </li>
              <li>
                <span>sprawdzone rozwiązania</span>
              </li>
              <li>
                <span>sprawdzone rozwiązania</span>
              </li>
            </ul>
            <Button secondary page="/oferta">
              Spawdź ofertę <BsArrowRight />
            </Button>
          </TextBox>
        </LeadWrapper>
      </GridContainer>
    </Section>
  );
};

export default Lead;
