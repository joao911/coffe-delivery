import React, { ReactNode } from "react";
import { IconContainer } from "./styles";

interface InfoIconProps {
  color: string;
  icon: ReactNode;
  text: ReactNode;
}
export const InfoIcon: React.FC<InfoIconProps> = ({ color, icon, text }) => {
  return (
    <div className="flex items-center gap-2">
      <IconContainer color={color}>{icon}</IconContainer>
      {text}
    </div>
  );
};
