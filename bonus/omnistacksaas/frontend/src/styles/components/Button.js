import styled, { css } from "styled-components";

const sizes = {
  small: css`
    height: 2.8rem;
    font-size: 1.2rem;
  `,
  default: css`
    height: 3.6rem;
    font-size: 1.4rem;
  `,
  big: css`
    height: 4.4rem;
    font-size: 1.8rem;
  `,
};

const colors = {
  default: css`
    background-color: #7289da;
    transition: background-color 200ms;
    &:hover {
      background-color: #5f73bc;
    }
  `,
  danger: css`
    background-color: #e04848;
    transition: background-color 200ms;
    &:hover {
      background-color: #a43d3d;
    }
  `,
  gray: css`
    background-color: #b9bbbe;
    color: #666;
    transition: background-color 200ms;
    &:hover {
      background-color: #999;
    }
  `,
};

const Button = styled.button`
  border-radius: 0.3rem;
  transition: background-color 0.15s ease;
  background-color: #7289da;
  border: 0;
  color: #fff;
  font-size: 1.2rem;
  padding: 0 1rem;
  text-transform: uppercase;
  font-weight: 700;

  ${(props) => sizes[props.size || "default"]}
  ${(props) => colors[props.color || "default"]}

  ${(props) =>
    props.filled === false &&
    css`
      background: none;
      &:hover {
        background: none;
        opacity: 0.6;
      }
    `}
`;

export default Button;
