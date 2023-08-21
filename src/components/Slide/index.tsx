import React from "react";

import { Container, ButtonContainer, Button, Icon } from "./styles";

import { GrFormNext, GrFormPrevious } from "../../styles/Icons";
import { IJob } from "../../hooks/useFetch";

type SlideProps = {
  companies: IJob[];
  cardsPerPage: number;
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
};

const Slide: React.FC<SlideProps> = ({
  cardsPerPage,
  currentPage,
  setCurrentPage,
  companies,
}) => {
  const totalCards = companies.reduce((total) => total + 1, 0);
  const totalPages = Math.ceil(totalCards / cardsPerPage);

  const handleClick = (page: number) => {
    setCurrentPage(page);
  };

  const handlePrevClick = () => {
    if (currentPage <= 0) return;
    setCurrentPage((prevIndex) => prevIndex - 1);
  };

  const handleNextClick = () => {
    if (currentPage >= totalPages - 1) return;
    setCurrentPage((nextIndex) => nextIndex + 1);
    return;
  };

  if (companies.length === 0)
    return <p>We were unable to find companies with this search.</p>;
  return (
    <Container>
      <ButtonContainer>
        <Button onClick={handlePrevClick}>
          <Icon>
            <GrFormPrevious />
          </Icon>
        </Button>
        {Array.from({ length: totalPages }).map((_, index) => (
          <Button
            key={index}
            onClick={() => handleClick(index)}
            active={index === currentPage}
          >
            {index + 1}
          </Button>
        ))}
        <Button onClick={handleNextClick}>
          <Icon>
            <GrFormNext />
          </Icon>
        </Button>
      </ButtonContainer>
    </Container>
  );
};

export default Slide;
