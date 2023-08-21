import React, { useState } from "react";

import { Container, Options, Form, Title, LocationOptions } from "./styles";

// Components
import Checkbox from "../Form/Checkbox";
import Radio from "../Form/Radio";
import Input from "../Form/Input";
import { useJobs } from "../../context/JobsContext";
import { IJob } from "../../hooks/useFetch";
import { findMostFrequent } from "../../utils/location";

// const listCountry = ["London", "Amsterdam", "New York", "Berlin"];
const listOptions = ["Full time"];

const MenuLocation: React.FC = () => {
  const { location, setLocation, optionsTime, setOptionsTime, data } =
    useJobs();

  const listCountry =
    data && Array.isArray(data)
      ? data
          .map(
            (item: IJob) =>
              item.locationRestrictions !== undefined &&
              item.locationRestrictions[0]
          )
          .filter(Boolean)
      : [];

  const newListCountry = findMostFrequent(listCountry, 5).map(
    (item) => item.value
  );

  const [checkboxes, setCheckBoxes] = useState<string[]>(newListCountry);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const text = event.target.value;

    const matchingCheckboxes = newListCountry.filter((country) =>
      country.toLowerCase().includes(text.toLowerCase())
    );

    setCheckBoxes(matchingCheckboxes);
  };

  return (
    <Container>
      <Options>
        <Checkbox
          options={listOptions}
          value={optionsTime}
          setValue={setOptionsTime}
        />
      </Options>
      <Form onSubmit={(event) => event.preventDefault()}>
        <Title>Location</Title>
        <Input
          placeholder="City, state, zip code or country"
          icon="mdwork"
          onChange={handleInputChange}
        />

        <LocationOptions>
          <Radio options={checkboxes} value={location} setValue={setLocation} />
        </LocationOptions>
      </Form>
    </Container>
  );
};

export default MenuLocation;
