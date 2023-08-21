import styled from "styled-components";

import { AiOutlineLoading3Quarters } from "../../styles/Icons";

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Icon = styled(AiOutlineLoading3Quarters)`
  width: 10rem;
  height: 10rem;
  animation: spin 1s linear infinite;

  @keyframes spin {
    0% {
      transform: rotateY(0);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

const Loading = () => {
  return (
    <Container>
      <Icon />
    </Container>
  );
};

export default Loading;
