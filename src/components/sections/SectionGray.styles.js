import styled from "styled-components";
import { Section } from "../layout/Layout.styles";
import BgImage from "../../assets/images/bg_gray.png";

export const SectionGrayStyles = styled(Section)`
  background-color: ${({ theme }) => theme.colors.greySecondary};
  background-image: url(${BgImage});
  background-size: cover;
  background-repeat: no-repeat;

  h2.gray {
    color: ${({ theme }) => theme.colors.secondary};
    max-width: 70rem;
  }
`;

export const GridWrapper = styled.div`
  grid-template-rows: repeat(3, 1fr);
  column-gap: 4rem;
`;
