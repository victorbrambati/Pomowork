import styled, { css } from 'styled-components';
import { TextColorProps } from './index';

const colors = {
  white: css`
    > span {
      color: var(--tertiary);
    }
  `,
  gray: css`
    > span {
      color: var(--gray);
    }
  `,
};

export const Container = styled.div<TextColorProps>`
  ${({ textColor }) => css`
    display: flex;
    align-items: center;
    padding-left: 16px;
    > span {
      font-size: 16px;
      padding-left: 12px;
    }
    ${textColor && colors[textColor]};
  `}
`;
