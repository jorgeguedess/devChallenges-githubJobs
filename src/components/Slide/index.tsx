import React from "react";

import { Container, ButtonContainer, Button, Icon } from "./styles";

import { GrFormNext, GrFormPrevious } from "../../styles/Icons";
import { useJobs } from "../../context/JobsContext";
import { IJob } from "../../hooks/useFetch";

type SlideProps = {
  companies: IJob[];
  cardsPerPage: number;
};

const Slide: React.FC<SlideProps> = ({ companies, cardsPerPage }) => {
  const { currentPage, setCurrentPage } = useJobs();

  const totalCards = companies.reduce((total) => total + 1, 0);
  const totalPages = Math.ceil(totalCards / cardsPerPage) - 1;
  const visiblePageButtons = 5;

  const renderPageButtons = () => {
    const pageButtons = [];

    let startPage = Math.max(
      0,
      currentPage - Math.floor(visiblePageButtons / 2)
    );
    const endPage = Math.min(totalPages, startPage + visiblePageButtons - 1);

    if (endPage - startPage < visiblePageButtons - 1) {
      startPage = Math.max(1, endPage - visiblePageButtons + 1);
    }

    for (let indice = startPage; indice <= endPage; indice++) {
      pageButtons.push(
        <Button
          key={indice}
          active={indice === currentPage}
          onClick={() => setCurrentPage(indice)}
        >
          {indice + 1}
        </Button>
      );
    }

    return pageButtons;
  };

  const handlePrevClick = () => {
    if (currentPage <= 0) return;
    setCurrentPage((prevIndex) => prevIndex - 1);
  };

  const handleNextClick = () => {
    if (currentPage >= totalPages) return;
    setCurrentPage((nextIndex) => nextIndex + 1);
    return;
  };

  return (
    <Container>
      <ButtonContainer>
        <Button onClick={handlePrevClick}>
          <Icon>
            <GrFormPrevious />
          </Icon>
        </Button>
        {renderPageButtons()}
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
