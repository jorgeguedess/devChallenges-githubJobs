import React, { FC, ChangeEvent } from "react";

type RadioProps = React.ComponentProps<"input"> & {
  options: string[];
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
};

import { InputStyles } from "../../../styles/GlobalStyles";
import { useJobs } from "../../../context/JobsContext";

const Radio: FC<RadioProps> = ({ options, value, setValue, ...props }) => {
  const { setCurrentPage } = useJobs();

  const handleChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    setCurrentPage(0);

    setValue(target.value);
  };

  return (
    <>
      {options.map((option) => (
        <InputStyles key={option}>
          <input
            type="radio"
            value={option}
            checked={value === option}
            onChange={handleChange}
            {...props}
          />
          {option}
        </InputStyles>
      ))}
    </>
  );
};

export default Radio;
