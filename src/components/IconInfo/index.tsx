import React from "react";

import { Container } from "./styles";

interface IconInfoProps {
  bgColor: "brand-yellow-dark" | "brand-yellow" | "base-text" | "brand-purple";
  icon: React.ReactNode;
  text: string;
}
export const IconInfo: React.FC<IconInfoProps> = ({ bgColor, icon, text }) => {
  return (
    <Container>
      <div
        className={`w-[1.93rem] h-[1.93rem] rounded-full bg-${bgColor} flex items-center justify-center`}
      >
        {icon}
      </div>
      <span className="text-base-text">{text}</span>
    </Container>
  );
};
