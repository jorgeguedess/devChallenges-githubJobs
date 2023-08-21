import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 13.8rem;
  position: relative;
  margin-bottom: 4rem;

  display: grid;
  place-items: center;
`;

export const Banner = styled.div`
  position: absolute;
  width: 100%;
  height: inherit;

  background: url("https://images.pexels.com/photos/162539/architecture-building-amsterdam-blue-sky-162539.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")
    no-repeat center / cover;
  filter: brightness(0.5);
  z-index: -1;
`;

export const Form = styled.form`
  width: 95%;
  max-width: 80rem;
  height: 5.5rem;
  margin-inline: auto;
  background: #fff;
  box-shadow: 0 0.2rem 0.8rem 0 #0000001a;
  border-radius: 0.4rem;
  padding-inline: 0.4rem;

  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;

  > * {
    flex: 65;
    @media (min-width: 37.6rem) {
      flex: 80;
    }
  }
`;

export const Button = styled.button`
  flex: 35;
  @media (min-width: 37.6rem) {
    flex: 20;
  }

  border: 0;
  outline: none;

  width: 14.6rem;
  font-size: 1.6rem;
  font-weight: 500;
  background: var(--primary-1);
  color: var(--white);

  border-radius: 0.4rem;
  padding-block: 1.4rem;
  cursor: pointer;
  transition: all 0.3s;

  &:hover,
  &:focus {
    background: var(--primary-2);
  }
`;
