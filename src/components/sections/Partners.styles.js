import styled from "styled-components";
import { Container } from "../layout/Layout.styles";

export const PartnersStyles = styled(Container)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
  grid-gap: 2rem;
  padding: 7.5rem 1.5rem 0;
`;
export const StyledPartnersLogo = styled.div`
  img {
    width: 100%;
  }
`;
