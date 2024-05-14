import styled, { css } from "styled-components";

export const Container = styled.div`
  input {
    visibility: hidden;
    appearance: none;
  }
  /* background-color: red; */
  height: 3rem;

  input:checked + label div {
    ${css`
      background: #ebe5f9;
      border-color: #8047f8;

      &:hover {
        background: #ebe5f9;
      }
    `}
  }
`;
