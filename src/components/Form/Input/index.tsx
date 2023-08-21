import React from "react";

import { InputProps } from "../../../types/InputType";
import { LabelGroup, InputField } from "./styles";
import { MdWorkOutline, BsGlobeAmericas } from "../../../styles/Icons";

const Input: React.FC<InputProps> = ({ icon, setValue, ...props }) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue && setValue(event.target.value);
  };

  return (
    <LabelGroup>
      {icon && icon === "mdwork" && <MdWorkOutline />}
      {icon && icon === "bsglobe" && <BsGlobeAmericas />}
      <InputField type="text" onChange={handleChange} {...props} />
    </LabelGroup>
  );
};

export default Input;
