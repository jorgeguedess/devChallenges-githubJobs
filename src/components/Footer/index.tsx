import React from "react";
import styled from "styled-components";

const Container = styled.footer`
  width: 100%;
  font-family: sans-serif;
  font-size: 1.4rem;
  font-weight: 500;
  margin-top: clamp(1rem, 15%, 8rem);
  padding-bottom: 1rem;
  text-align: center;
  color: var(--text-3);

  a {
    font-family: inherit;
    color: inherit;
    font-weight: bold;
    transition: 0.3s;

    &:hover,
    &:focus {
      color: var(--primary-2);
    }
  }
`;

const Footer: React.FC = () => {
  return (
    <Container>
      <span>
        created by{" "}
        <a href="https://github.com/jorgeguedess" target="_blank">
          Jorge Guedes
        </a>{" "}
        - devChallenges.io
      </span>
    </Container>
  );
};

export default Footer;
