import styled, { css } from 'styled-components';
import { ColorButton } from './index';

const Colors = {
  purple: css`
    background-color: var(--purple);
  `,
  orange: css`
    background-color: var(--orange);
  `,
  pink: css`
    background-color: var(--pink);
  `,
  green: css`
    background-color: var(--green);
  `,
};

export const Container = styled.div``;

export const ColorfulButton = styled.button<ColorButton>`
  ${({ color }) => css`
    width: 14px;
    height: 14px;
    border-radius: 14px;
    margin-right: 7px;
    outline: none;
    cursor: pointer;
    ${color && Colors[color]};
  `}
`;
