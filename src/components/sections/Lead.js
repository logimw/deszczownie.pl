import React, { useEffect, useRef } from "react";
import { GridContainer, Section, TextBox } from "../layout/Layout.styles";
import Heading from "../layout/typography/Heading";
import { StaticImage } from "gatsby-plugin-image";
import { ImgWrapper, LeadWrapper } from "./Lead.styles";
import Button from "../button/Button";
import IconWrapper from "../layout/IconWrapper";
import { BsArrowRight } from "react-icons/bs";
import Subheading from "../elements/Subheading";
import PropTypes from "prop-types";
import { WaterDropsIcon } from "assets/icons/Icons";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Lead = ({ text }) => {
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
  return (
    <Section ref={ref}>
      <GridContainer className="fade">
        <LeadWrapper isPrimary>
          <IconWrapper>
            <WaterDropsIcon />
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

Lead.propTypes = {
  text: PropTypes.string,
};

export default Lead;
