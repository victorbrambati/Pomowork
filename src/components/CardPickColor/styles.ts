import styled, { css } from 'styled-components';
import { Variants } from './index';

const Variant = {
  tag: css`
    width: 267px;
    height: 48px;
  `,
  icon: css`
    width: 141px;
    height: 53px;
  `,
};

const VariantMargin = {
  tag: css`
    margin-left: 48px;
  `,
  icon: css`
    display: flex;
    justify-content: flex-end;
    margin-left: 16px;
  `,
};

export const Container = styled.div<Variants>`
  ${({ variant }) => css`
    background-color: var(--secondary);
    border-radius: 8px;
    margin-right: 13px;
    ${variant && Variant[variant]};
  `}
`;

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CollorDiv = styled.div<Variants>`
  ${({ variant }) => css`
    ${variant && VariantMargin[variant]};
  `}
`;

export const Button = styled.button`
  outline: none;
  cursor: pointer;
`;
