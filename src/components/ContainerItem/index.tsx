import React from "react";
import { Container } from "./styles";

export interface ContainerItemProps {
  children: React.ReactNode;
}
const ContainerItem: React.FC<ContainerItemProps> = ({ children }) => {
  return <Container>{children}</Container>;
};

export default ContainerItem;
