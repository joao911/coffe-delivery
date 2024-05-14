import styled from "styled-components";

interface SubtitleProps {
  hasTitle?: boolean;
}

export const Subtitle = styled.span<SubtitleProps>`
  font-weight: ${({ hasTitle }) => (hasTitle ? 700 : 400)};
  font-size: ${({ hasTitle }) => (hasTitle ? "1.25rem" : "0.875rem")};
`;
