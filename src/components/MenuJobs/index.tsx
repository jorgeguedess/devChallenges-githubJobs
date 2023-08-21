import React from "react";
import Card from "../Card";
import Slide from "../Slide";
import { useJobs } from "../../context/JobsContext";

import { IJob } from "../../hooks/useFetch";

const MenuJobs: React.FC = () => {
  const cardsPerPage = 4;
  const {
    location,
    searchCompanie,
    filterInputValue,
    currentPage,
    setCurrentPage,
    data,
  } = useJobs();

  const companies: IJob[] = data?.filter((companie: IJob) => {
    if (!location && !searchCompanie) return true;
    if (location && searchCompanie)
      return (
        companie.locationRestrictions[0] === location &&
        filterInputValue(companie.title, searchCompanie)
      );
    if (location && !searchCompanie) {
      return companie.locationRestrictions[0] === location;
    }
    if (searchCompanie) {
      return (
        filterInputValue(companie.companyName, searchCompanie) ||
        filterInputValue(companie.title, searchCompanie)
      );
    }
  });

  if (!data) return null;
  return (
    <div>
      {companies &&
        companies
          .slice(currentPage * cardsPerPage, (currentPage + 1) * cardsPerPage)
          .map((companie, index) => (
            <Card key={`${companie.title} + + ${index}`} {...companie} />
          ))}
      <Slide
        cardsPerPage={cardsPerPage}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        companies={companies}
      />
    </div>
  );
};

export default MenuJobs;
