import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
`;

export const Options = styled.div``;

export const Form = styled.form``;

export const Title = styled.h2`
  font-size: 1.4rem;
  font-weight: 700;
  color: var(--text-3);
  margin-bottom: 1.4rem;
  text-transform: uppercase;
`;

export const LocationOptions = styled.div`
  @media (min-width: 376px) and (max-width: 1100px) {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(35vw, 1fr));
    margin-bottom: 3rem;
  }

  margin-top: 2.4rem;
  > label {
    margin-bottom: 1.6rem;
  }
`;

export const Location = styled.label``;
