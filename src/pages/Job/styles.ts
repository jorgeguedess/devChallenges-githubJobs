import { Link } from "react-router-dom";
import styled from "styled-components";
import { Grid } from "../../styles/GlobalStyles";

export const Container = styled.div`
  width: 100%;
  font-family: "Poppins", sans-serif;

  @media (min-width: 480px) {
    display: flex;
    flex: 1;
  }
`;

export const JobMenu = styled.div`
  flex: 30;

  > h3 {
    font-size: 1.4rem;
    font-weight: 700;
    color: var(--text-3);
    text-transform: uppercase;
    margin-bottom: 1.6rem;
  }

  > p {
    font-size: 1.4rem;
    font-weight: 500;
    color: var(--text-2);
    line-height: 1.5;
    max-width: 25ch;
    margin-bottom: 2rem;

    a {
      display: inline-block;
      text-decoration: none;
      color: var(--primary-1);
      max-width: inherit;
      margin-right: 0.2rem;
    }
  }
`;

export const LinkBack = styled(Link)`
  font-size: 1.4rem;
  font-weight: 500;
  color: var(--primary-1);
  text-decoration: none;

  margin-bottom: 3.2rem;

  display: flex;
  width: fit-content;
  align-items: center;
  gap: 1.2rem;
`;

export const JobInfo = styled.div`
  font-family: "Roboto", sans-serif;
  flex: 70;

  > * {
    font-family: inherit;
  }
`;

export const LinkJob = styled.a`
  display: inline-block;
  color: var(--primary-1);
  margin-bottom: 3.6rem;
`;

export const Header = styled(Grid)`
  color: var(--primary-2);
`;

export const Title = styled.h1`
  font-weight: 700;
  font-size: 2.4rem;
  margin-right: 1.6rem;
  margin-bottom: 1rem;
`;

export const Benefits = styled.span`
  font-size: 1.2rem;
  font-weight: 700;
  border: 0.1rem solid var(--primary-2);
  padding: 0.6rem 0.8rem;
  border-radius: 0.4rem;
`;

export const Info = styled.div`
  font-size: 1.2rem;
  font-weight: 500;
  color: var(--text-3);
  margin-bottom: 3.2rem;

  display: flex;
  align-items: center;
  gap: 0.6rem;

  > svg {
    width: 1.8rem;
    height: 1.8rem;
  }
`;
export const CompanyContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 3rem;
`;

export const Company = styled.div`
  margin-left: 1.2rem;
`;

export const Subtitle = styled.h2`
  color: var(--primary-2);
  font-size: 1.8rem;
  font-weight: 700;
  margin-bottom: 0.8rem;
`;

export const Location = styled.div`
  font-size: 1.2rem;
  color: var(--text-3);

  display: flex;
  align-items: center;
  gap: 0.6rem;
`;

export const Description = styled.div`
  width: 100%;
  font-size: 1.6rem;
  font-weight: 400;
  line-height: 1.5;
  color: var(--primary-2);

  h1,
  h2,
  h3,
  h4,
  h5 {
    margin-top: 3rem;
    margin-bottom: 1rem;
  }

  p {
    margin-bottom: 3rem;
  }

  li {
    margin-bottom: 1rem;
  }

  a {
    color: var(--primary-1);
  }
`;
