import React from "react";

import { Container, ContentIcon } from "./styles";

interface IconInfoProps {
  bgColor: string;
  icon: React.ReactNode;
  text: string;
}
export const IconInfo: React.FC<IconInfoProps> = ({ bgColor, icon, text }) => {
  return (
    <Container>
      <ContentIcon
        bgColor={bgColor}
        className="w-[1.93rem] h-[1.93rem] rounded-full  flex items-center justify-center"
      >
        {icon}
      </ContentIcon>
      <span className="text-base-text">{text}</span>
    </Container>
  );
};
