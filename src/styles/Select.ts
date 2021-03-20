import styled, { css } from "styled-components";
import { InputProps } from "interfaces/Style.interface";

const Select = styled.select<InputProps>`
  height: 40px;
  border-radius: 8px;
  border: 1px solid var(--main);
  font-size: 16px;
  padding: 0 1rem;
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
export default Select;