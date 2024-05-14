import styled from "styled-components";

interface ContainerProps {
  width?: number;
}

export const Container = styled.div<ContainerProps>`
  width: ${({ width = 15 }) => `${width}rem`};

  @media (max-width: 768px) {
    width: 100%;
  }
`;
