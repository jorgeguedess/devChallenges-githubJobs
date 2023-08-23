import React from "react";
import Card from "../Card";
import { useJobs } from "../../context/JobsContext";

import { IJob } from "../../hooks/useFetch";
import Slide from "../Slide";

const MenuJobs: React.FC = () => {
  const { location, searchCompanie, filterInputValue, currentPage, data } =
    useJobs();

  const cardsPerPage = 4;

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
      <Slide cardsPerPage={cardsPerPage} companies={companies} />
    </div>
  );
};

export default MenuJobs;
