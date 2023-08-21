import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  gap: 3.2rem;
  @media (min-width: 1100px) {
    display: grid;
    grid-template-columns: 35fr 65fr;
  }
`;
