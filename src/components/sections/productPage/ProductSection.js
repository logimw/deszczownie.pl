import React from "react";
import { GridContainer, Section, TextBox } from "../../layout/Layout.styles";
import Heading from "../../layout/typography/Heading";
import { ImgWrapper, LeadWrapper } from "../Lead.styles";
import IconWrapper from "../../layout/IconWrapper";
import Drops from "../../../assets/svg/water-drops.svg";
import { StaticImage } from "gatsby-plugin-image";

const ProductSection = ({ title, lead, isSecondary }) => {
  if (isSecondary) {
    return (
      <Section>
        <GridContainer>
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
          <div className="first-col">
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
          <div className="second-col">
            <StaticImage
              src="../../../assets/images/d5.png"
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
      <Section>
        <GridContainer>
          <div className="first-col">
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
                      Nemo enim ipsam voluptatem quia voluptas sit aspernatur
                      aut odit aut fugit, sed quia consequuntur magni dolores
                      eos qui ratione voluptatem sequi nesciunt.
                    </div>
                  </li>
                  <li>
                    <div>
                      Nemo enim ipsam voluptatem quia voluptas sit aspernatur
                      aut odit aut fugit, sed quia consequuntur magni dolores
                      eos qui ratione voluptatem sequi nesciunt.
                    </div>
                  </li>
                  <li>
                    <div>
                      Nemo enim ipsam voluptatem quia voluptas sit aspernatur
                      aut odit aut fugit, sed quia consequuntur magni dolores
                      eos qui ratione voluptatem sequi nesciunt.
                    </div>
                  </li>
                </ul>
              </div>
            </TextBox>
          </div>
          <div className="second-col">
            <LeadWrapper>
              <IconWrapper>
                <img src={Drops} alt="water drops" />
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
                  src="../../../assets/images/d4.png"
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

export default ProductSection;
