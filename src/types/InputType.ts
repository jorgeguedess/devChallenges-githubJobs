import { InputHTMLAttributes } from "react";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  placeholder: string;
  setValue?: React.Dispatch<React.SetStateAction<string>>;
  icon?: "bsglobe" | "mdwork";
}
