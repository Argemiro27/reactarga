import styled, { css } from "styled-components";
import { LinkProps } from "interfaces/Style.interface";

const sizeVariations = {
  default: css`
    height: 35px;
    width: 150px;
    font-size: 16px;
  `
}
const colorVariations = {
  default: css`
    background: var(--main);
    color: var(--white);
    &.hover {
      background: var(--main-hover);
    }
  `,
  primary: css`
    background: var(--primary);
    color: var(--white);
    &.hover {
      background: var(--primary-hover);
    }
  `,
  danger: css`
    background: var(--danger);
    color: var(--white);
    &.hover {
      background: var(--danger-hover);
    }
  `,
  warning: css`
    background: var(--warning);
    color: var(--white);
    &.hover {
      background: var(--warning-hover);
    }
  `,
  success: css`
    background: var(--success);
    color: var(--white);
    &.hover {
      background: var(--success-hover);
    }
  `,
}
const Button = styled.button<LinkProps>`
  transition: background-color 0.15s ease;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  padding: 6px;
  font-weight: 700;
  text-decoration: none;
  display: flex;
  align-items: center;
  margin: 0 10px;
  color: var(--black);
  border: 0;
  border-radius: 5px;
  cursor: pointer;
  ${(props) => sizeVariations[props.size || "default"]}
  ${(props) => colorVariations[props.bgColor || "default"]}
  &:focus {
    outline: none;
  }
`
export default Button;