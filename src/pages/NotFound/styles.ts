import styled from "styled-components";

import { Link } from "react-router-dom";

export const Container = styled.div`
width: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.h1`
  font-size: clamp(3.2rem, 50vw, 6.4rem);
  color: var(----text-3);
  margin-bottom: 0.5rem;
`;

export const SubTitle = styled.h2`
  font-size: clamp(1.8rem, 20vw, 2.4rem);
  margin-bottom: 3.6rem;
`;

export const Description = styled.p`
  margin-bottom: 2rem;
`;

export const Button = styled(Link)`
  border: 0;
  outline: 0;
  background: var(--text-1);
  color: var(--white);
  padding: 1rem 2rem;
  font-size: 1.6rem;
  text-decoration: none;
  transition: 0.3s;

  &:hover {
    background: var(--text-2);
  }
`;
