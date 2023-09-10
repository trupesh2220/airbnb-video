"use client";

import { FieldError, FieldValues, UseFormRegister } from "react-hook-form";
import { BiDollar } from "react-icons/bi";

interface InputProps {
  id: string;
  label: string;
  type?: string;
  disabled?: boolean;
  formatePrice?: boolean;
  required?: boolean;
  register: UseFormRegister<FieldValues>;
  errors: FieldError;
}
const Input: React.FC<InputProps> = ({
  id,
  label,
  type = "text",
  disabled,
  formatePrice,
  register,
  required,
  errors,
}) => {
  return <div className="w-full relative">
    {formatePrice &&(<BiDollar></BiDollar>)}
  </div>;
};

export default Input;
