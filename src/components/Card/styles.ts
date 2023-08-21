import styled from "styled-components";

import { Link } from "react-router-dom";

export const Container = styled(Link)`
  font-family: "Roboto", sans-serif;
  width: 100%;
  box-shadow: 0 0.2rem 0.4rem 0 #0000000d;
  padding: 1.2rem;
  background: var(--white);

  display: flex;
  gap: 1.6rem;
  @media (max-width: 360px) {
    flex-direction: column;
  }

  text-decoration: none;

  &:not(:last-child) {
    margin-bottom: 3.2rem;
  }
  cursor: pointer;
`;

export const CardDetails = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  color: var(--primary-2);
`;

export const Title = styled.span`
  font-size: 1.2rem;
  font-weight: 700;
  display: inline-block;
  margin-bottom: 0.8rem;
`;

export const Expertise = styled.h3`
  font-size: clamp(1.6rem, 2vw, 1.8rem);
  font-weight: 400;
  margin-bottom: 1.2rem;
`;

export const Benefits = styled.span`
  display: inline-block;
  width: fit-content;
  font-size: 1.2rem;
  font-weight: 700;
  margin-bottom: 2.4rem;
  @media (min-width: 800px) {
    margin-bottom: 0;
  }

  padding: 0.6rem 0.8rem;
  border: 0.1rem solid var(--primary-2);
  border-radius: 0.4rem;
`;

export const CardInfo = styled.div`
  display: flex;
  gap: 0.5rem 3rem;
  @media (min-width: 800px) {
    justify-self: flex-end;
    align-self: flex-end;
  }
`;

export const Info = styled.p`
  font-size: 1.2rem;
  font-weight: 500;
  color: #b7bcce;

  display: flex;
  align-items: center;
  gap: 0.6rem;

  > svg {
    font-size: 1.8rem;
  }
`;
