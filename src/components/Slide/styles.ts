import React from "react";
import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  margin-top: 3.2rem;
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-end;
  gap: 1.2rem;
`;

type IButton = React.ComponentPropsWithoutRef<"button"> & {
  active?: boolean;
};

export const Button = styled.button<IButton>`
  width: 3.6rem;
  height: 3.6rem;
  font-family: "Roboto", sans-serif;
  font-size: 1.2rem;
  font-weight: 400;

  border: 0.1rem solid var(--text-3);
  border-radius: 0.4rem;
  padding: 1rem 1.4rem;
  transition: 0.3s;
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;

  background: ${(props) => (props.active ? "var(--primary-1)" : "transparent")};
  color: ${(props) => (props.active ? "var(--white)" : "var(--text-3)")};
  border-color: ${(props) =>
    props.active ? "var(--primary-1)" : "var(--text-3)"};

  &:hover,
  &:focus {
    border-color: var(--primary-1);
    color: ${(props) => (props.active ? "var(--white)" : "var(--primary-1)")};
    * {
      stroke: var(--primary-1);
    }
  }
`;

export const Icon = styled.div`
  display: flex;
  font-size: 2rem;
  * {
    stroke: var(--text-3);
  }
`;

export const NotFoundSlide = styled.p`
  color: red;
  margin-top: 3rem;
`;
