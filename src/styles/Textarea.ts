import styled, { css } from "styled-components";
import { InputProps } from "interfaces/Style.interface";

const Textarea = styled.textarea<InputProps>`
  height: 83px;
  border-radius: 8px;
  border: 1px solid var(--main);
  font-size: 16px;
  padding: 1rem;
  ::placeholder {
    color: var(--black);
    font-weight: 500;
    font-size: 14px;
  }
  &:focus {
    outline: none;
    border-color: var(--black);
  }
  ${props =>
    props.error &&
    css`
      &:focus {
        background: var(--white);
        color: var(--white);
        border-color: var(--border-error);
      }
    `}
`;
export default Textarea;