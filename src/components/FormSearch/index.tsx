import React from "react";

import { Container, Banner, Form, Button } from "./styles";
import { useJobs } from "../../context/JobsContext";

// Components
import Input from "../Form/Input";

const FormSearch: React.FC = () => {
  const { companie, setCompanie, setSearchCompanie } = useJobs();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSearchCompanie(companie);
    if (!companie) return;
    setCompanie("");
  };

  return (
    <Container>
      <Banner />
      <Form onSubmit={handleSubmit}>
        <Input
          placeholder="Title, companies, expertise or benefits"
          value={companie}
          setValue={setCompanie}
          icon="bsglobe"
        />
        <Button>Search</Button>
      </Form>
    </Container>
  );
};

export default FormSearch;
