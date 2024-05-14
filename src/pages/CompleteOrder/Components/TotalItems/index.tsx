import React from "react";
import { Subtitle } from "./styles";

interface TotalItemsProps {
  title: string;
  subtitle: string;
  hasTitle?: boolean;
}
export const TotalItems: React.FC<TotalItemsProps> = ({
  title,
  subtitle,
  hasTitle = false,
}) => {
  return (
    <div className="flex items-center justify-between">
      <Subtitle hasTitle={hasTitle}>{title} </Subtitle>
      <Subtitle hasTitle={hasTitle}> {subtitle}</Subtitle>
    </div>
  );
};
