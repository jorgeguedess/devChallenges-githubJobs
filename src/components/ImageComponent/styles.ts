import styled from "styled-components";

export interface ImageWrapperProps {
  width?: number;
  height?: number;
}

export const ImageWrapper = styled.div<ImageWrapperProps>`
  width: ${(props) => (props.width ? `${props.width / 10}rem` : "10rem")};
  height: ${(props) => (props.height ? `${props.height / 10}rem` : "10rem")};

  background: #f2f2f2;
  text-align: center;

  border-radius: 0.4rem;
  pointer-events: none;
  z-index: 10;

  display: grid;
  place-items: center;
`;

export const NotFoundText = styled.p`
  font-family: "Roboto", sans-serif;
  font-size: 1.2rem;
  font-weight: 500;
  color: #bdbdbd;
`;
