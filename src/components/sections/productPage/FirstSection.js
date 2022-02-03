import React from "react";
import { GridContainer, Section, TextBox } from "../../layout/Layout.styles";
import Heading from "../../layout/typography/Heading";
import { ImgWrapper, LeadWrapper } from "../Lead.styles";
import IconWrapper from "../../layout/IconWrapper";
import Drops from "../../../assets/svg/water-drops.svg";
import { StaticImage } from "gatsby-plugin-image";

const FirstSection = () => {
  return (
    <Section>
      <GridContainer>
        <div className="first-col">
          <Heading>
            <div className="stripes">
              <span className="stripe" />
              <span className="stripe" />
              <span className="stripe" />
              <h2>Zalety deszczowni RM</h2>
            </div>
          </Heading>
          <TextBox>
            <div className="full-col">
              <p>
                Oferujemy sprawdzone rozwiązania w nawadnianiu rolnictwa!
                Oferujemy sprawdzone rozwiązania w nawadnianiu rolnictwa!
                Oferujemy sprawdzone rozwiązania w nawadnianiu rolnictwa!
                Oferujemy sprawdzone rozwiązania w nawadnianiu rolnictwa!
              </p>
              <p>
                Oferujemy sprawdzone rozwiązania w nawadnianiu rolnictwa!
                Oferujemy sprawdzone rozwiązania w nawadnianiu rolnictwa!
                Oferujemy sprawdzone rozwiązania w nawadnianiu rolnictwa!
                Oferujemy sprawdzone rozwiązania w nawadnianiu rolnictwa!
              </p>
              <ul className="product-features-list">
                <li>
                  <div>
                    Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
                    odit aut fugit, sed quia consequuntur magni dolores eos qui
                    ratione voluptatem sequi nesciunt.
                  </div>
                </li>
                <li>
                  <div>
                    Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
                    odit aut fugit, sed quia consequuntur magni dolores eos qui
                    ratione voluptatem sequi nesciunt.
                  </div>
                </li>
                <li>
                  <div>
                    Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
                    odit aut fugit, sed quia consequuntur magni dolores eos qui
                    ratione voluptatem sequi nesciunt.
                  </div>
                </li>
              </ul>
            </div>
          </TextBox>
        </div>
        <LeadWrapper>
          <IconWrapper>
            <img src={Drops} alt="water drops" />
            <h5>Sprawdzone rozwiązania</h5>
          </IconWrapper>
          <IconWrapper isBottom isLogo>
            <StaticImage
              src="../../assets/images/rm-logo.png"
              alt="RM logo"
              layout="fullWidth"
            />{" "}
          </IconWrapper>
          <ImgWrapper>
            <StaticImage
              src="../../assets/images/d1.png"
              alt="Deszczownia"
              layout="fullWidth"
            />
          </ImgWrapper>
        </LeadWrapper>
      </GridContainer>
    </Section>
  );
};

export default FirstSection;
