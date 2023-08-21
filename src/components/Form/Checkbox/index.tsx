import React, { FC, ChangeEvent } from "react";

interface CheckboxProps {
  options: string[];
  value: string[];
  setValue: React.Dispatch<React.SetStateAction<string[]>>;
}

import { InputStyles } from "../../../styles/GlobalStyles";

const Checkbox: FC<CheckboxProps> = ({ options, value, setValue }) => {
  const handleChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    if (target.checked) {
      setValue([...value, target.value]);
    } else {
      setValue(value.filter((item) => item !== target.value));
    }
  };

  return (
    <>
      {options.map((option) => (
        <InputStyles key={option}>
          <input
            type="checkbox"
            value={option}
            checked={value.includes(option)}
            onChange={handleChange}
          />
          {option}
        </InputStyles>
      ))}
    </>
  );
};

export default Checkbox;
