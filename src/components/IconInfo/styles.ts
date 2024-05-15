import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  justify-content: center;
`;

interface IconProps {
  bgColor: string;
}

export const ContentIcon = styled.div<IconProps>`
  background-color: ${({ bgColor }) => bgColor};
`;
