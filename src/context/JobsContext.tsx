/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useContext, useState } from "react";
import useFetch, { IJob } from "../hooks/useFetch";

type IJobsContext = {
  companie: string;
  setCompanie: React.Dispatch<React.SetStateAction<string>>;
  location: string;
  setLocation: React.Dispatch<React.SetStateAction<string>>;
  optionsTime: string[];
  setOptionsTime: React.Dispatch<React.SetStateAction<string[]>>;
  searchCompanie: string;
  setSearchCompanie: React.Dispatch<React.SetStateAction<string>>;
  filterInputValue: (itemPrev: string, itemNext: string) => boolean;
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  data: IJob;
  loading: boolean;
  error: string | null;
};

const JobsContext = createContext<IJobsContext | null>(null);

export const useJobs = () => {
  const context = useContext(JobsContext);
  if (!context) throw new Error("useJobs precisa estar em JobsContextProvider");
  return context;
};

export const JobsContextProvider = ({ children }: React.PropsWithChildren) => {
  const [companie, setCompanie] = useState("");
  const [location, setLocation] = useState("");
  const [optionsTime, setOptionsTime] = useState<string[]>([]);
  const [searchCompanie, setSearchCompanie] = useState("");
  const [currentPage, setCurrentPage] = useState(0);

  const filterInputValue = (itemPrev: string, itemNext: string) => {
    return itemPrev.toLowerCase().includes(itemNext.toLowerCase());
  };

  const BASE_URL = `https://himalayas.app/jobs/api`;

  const { data, loading, error } = useFetch(BASE_URL, 50, 0);

  return (
    <JobsContext.Provider
      value={{
        companie,
        setCompanie,
        location,
        setLocation,
        optionsTime,
        setOptionsTime,
        searchCompanie,
        setSearchCompanie,
        filterInputValue,
        currentPage,
        setCurrentPage,
        data,
        loading,
        error,
      }}
    >
      {children}
    </JobsContext.Provider>
  );
};
