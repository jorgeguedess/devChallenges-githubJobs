import styled from "styled-components";

import { Link } from "react-router-dom";

export const Container = styled.header`
  width: 100%;
  padding-top: clamp(2rem, 3vh, 3.2rem);
  margin-bottom: 3.2rem;
`;

export const Logo = styled(Link)`
  font-family: "Poppins", sans-serif;
  color: var(--text-1);
  text-decoration: none;
  font-size: 2.4rem;
  line-height: 1.5;
  font-weight: 300;

  span {
    font-weight: 700;
  }
`;
