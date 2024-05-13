import { toString } from "lodash";
import React, { InputHTMLAttributes } from "react";
import { useFormContext } from "react-hook-form";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
}
export const Input: React.FC<InputProps> = ({ name, ...rest }) => {
  const {
    formState: { errors },
  } = useFormContext();

  const error = errors[name]?.message;

  console.log(error);

  return (
    <div className="flex flex-col gap-1 min-h-[3.75rem] w-full">
      <input
        className={`p-[6px] bg-base-input rounded-md border  focus:outline-none focus:border-brand-yellow  text-base-label ${
          error ? "border-base-error" : "border-base-button"
        }`}
        {...rest}
      />
      <p className="text-xs text-base-error">{toString(error)}</p>
    </div>
  );
};
