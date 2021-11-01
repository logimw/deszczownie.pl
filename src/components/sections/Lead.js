import React from "react";
import { GridContainer, Section, TextBox } from "../layout/Layout.styles";
import Heading from "../layout/typography/Heading";
import { StaticImage } from "gatsby-plugin-image";
import { ImgWrapper, LeadWrapper } from "./Lead.styles";
import Button from "../button/Button";
import IconWrapper from "../layout/IconWrapper";

const Lead = () => {
  return (
    <Section>
      <GridContainer>
        <LeadWrapper isPrimary>
          <IconWrapper>sprawdzone rozwiązania</IconWrapper>
          <IconWrapper isBottom isLogo>
            <StaticImage
              src="../../assets/images/rm-logo.png"
              alt="RM logo"
              layout="fullWidth"
            />{" "}
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
            <div className="subheading green">
              <p>Dystrybucja maszyn RM</p>
            </div>
            <h1> Oferujemy sprawdzone rozwiązania w nawadnianiu!</h1>
          </Heading>
          <TextBox>
            <p>
              <b>
                Oferujemy sprawdzone rozwiązania w nawadnianiu rolnictwa!
                Oferujemy sprawdzone rozwiązania w nawadnianiu rolnictwa!
                Oferujemy sprawdzone rozwiązania w nawadnianiu rolnictwa!
                Oferujemy sprawdzone rozwiązania w nawadnianiu rolnictwa!
              </b>
            </p>
            <p>
              Oferujemy sprawdzone rozwiązania w nawadnianiu rolnictwa!
              Oferujemy sprawdzone rozwiązania w nawadnianiu rolnictwa!
              Oferujemy sprawdzone rozwiązania w nawadnianiu rolnictwa!
              Oferujemy sprawdzone rozwiązania w nawadnianiu rolnictwa!
              Oferujemy sprawdzone rozwiązania w nawadnianiu rolnictwa!
              Oferujemy sprawdzone rozwiązania w nawadnianiu rolnictwa!
              Oferujemy sprawdzone rozwiązania w nawadnianiu rolnictwa!
              Oferujemy sprawdzone rozwiązania w nawadnianiu rolnictwa!
            </p>
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
          </TextBox>
          <Button page="/oferta">Spawdź ofertę</Button>
        </LeadWrapper>
      </GridContainer>
    </Section>
  );
};

export default Lead;
