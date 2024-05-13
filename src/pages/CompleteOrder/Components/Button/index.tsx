import React, { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon: React.ReactNode;
  name: string;
}
export const Button: React.FC<ButtonProps> = ({ icon, name, ...rest }) => {
  return (
    <button
      className="flex items-center justify-center w-full gap-3 p-2 py-4 border-0 rounded-md text-text-bold-s bg-base-button hover:bg-base-hover text-base-subtitle"
      {...rest}
    >
      {icon}
      {name.toLocaleUpperCase()}
    </button>
  );
};

export default Button;
