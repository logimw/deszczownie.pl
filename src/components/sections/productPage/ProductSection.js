import React, { useEffect, useRef } from "react";
import {
  GridContainer,
  Section,
  TextBox,
} from "components/layout/Layout.styles";
import Heading from "components/layout/typography/Heading";
import { ImgWrapper, LeadWrapper } from "../Lead.styles";
import IconWrapper from "components/layout/IconWrapper";
import { StaticImage } from "gatsby-plugin-image";
import PropTypes from "prop-types";
import { WaterDropsIcon } from "assets/icons/Icons";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const ProductSection = ({ title, lead, isSecondary, text }) => {
  const ref = useRef(null);
  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    const element = ref.current;
    gsap.fromTo(
      element.querySelector(".fade"),
      {
        opacity: 0,
        y: 50,
      },
      {
        opacity: 1,
        y: 0,
        scrollTrigger: {
          trigger: element.querySelector(".fade"),
          start: "start 90%",
          end: "top top",
        },
      },
    );
  }, []);
  if (isSecondary) {
    return (
      <Section ref={ref}>
        <GridContainer className="fade">
          <div className="full-col">
            <Heading>
              <div className="stripes">
                <span className="stripe" />
                <span className="stripe" />
                <span className="stripe" />
                <h2>{title}</h2>
              </div>
            </Heading>
            {lead && (
              <TextBox>
                <div className="full-col">
                  <p>
                    Oferujemy sprawdzone rozwiązania w nawadnianiu rolnictwa!
                    Oferujemy sprawdzone rozwiązania w nawadnianiu rolnictwa!
                    Oferujemy sprawdzone rozwiązania w nawadnianiu rolnictwa!
                    Oferujemy sprawdzone rozwiązania w nawadnianiu rolnictwa!
                  </p>
                </div>
              </TextBox>
            )}
          </div>
          <div className="col-1">
            <TextBox>
              <div className="full-col">
                <table>
                  <thead>
                    <th />
                    <th>Deszczownia 1</th>
                    <th>Deszczownia 2</th>
                    <th>Deszczownia 3</th>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Parametr 1</td>
                      <td>Wartość X</td>
                      <td>Wartość X</td>
                      <td>Wartość X</td>
                    </tr>
                    <tr>
                      <td>Parametr 2</td>
                      <td>Wartość X</td>
                      <td>Wartość X</td>
                      <td>Wartość X</td>
                    </tr>
                    <tr>
                      <td>Parametr 3</td>
                      <td>Wartość X</td>
                      <td>Wartość X</td>
                      <td>Wartość X</td>
                    </tr>
                    <tr>
                      <td>Parametr 4</td>
                      <td>Wartość X</td>
                      <td>Wartość X</td>
                      <td>Wartość X</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </TextBox>
          </div>
          <div className="col-2">
            <StaticImage
              src="../../../assets/images/preview.jpeg"
              alt="Deszczownia"
              height={350}
              width={560}
            />{" "}
          </div>
        </GridContainer>
      </Section>
    );
  } else {
    return (
      <Section ref={ref}>
        <GridContainer className="fade">
          <div className="col-1">
            <Heading>
              <div className="stripes">
                <span className="stripe" />
                <span className="stripe" />
                <span className="stripe" />
                <h2>{title}</h2>
              </div>
            </Heading>
            {lead && (
              <div className="full-col">
                <p>
                  Oferujemy sprawdzone rozwiązania w nawadnianiu rolnictwa!
                  Oferujemy sprawdzone rozwiązania w nawadnianiu rolnictwa!
                  Oferujemy sprawdzone rozwiązania w nawadnianiu rolnictwa!
                  Oferujemy sprawdzone rozwiązania w nawadnianiu rolnictwa!
                </p>
              </div>
            )}
            <TextBox>
              <div className="full-col">
                <p>{text}</p>
              </div>
            </TextBox>
          </div>
          <div className="col-2">
            <LeadWrapper>
              <IconWrapper>
                <WaterDropsIcon />
                <h5>Sprawdzone rozwiązania</h5>
              </IconWrapper>
              <IconWrapper isBottom isLogo>
                <StaticImage
                  src="../../../assets/images/rm-logo.png"
                  alt="RM logo"
                />{" "}
              </IconWrapper>
              <ImgWrapper>
                <StaticImage
                  src="../../../assets/images/preview.jpeg"
                  alt="Deszczownia"
                  layout="fullWidth"
                />
              </ImgWrapper>
            </LeadWrapper>
          </div>
        </GridContainer>
      </Section>
    );
  }
};

ProductSection.propTypes = {
  title: PropTypes.string,
  lead: PropTypes.bool,
  isSecondary: PropTypes.bool,
  text: PropTypes.string,
};

export default ProductSection;
