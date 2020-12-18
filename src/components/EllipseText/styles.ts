import styled, { css } from 'styled-components';
import { TextColorProps, IconColor } from './index';
import EllipseIcon from '../../styles/Icons/EllipseIcon';

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

const iconColors = {
  pink: css`
    stop-color: #e44258;
  `,
  purple: css`
    stop-color: #7012ce;
  `,
  orange: css`
    stop-color: #e56e02;
  `,
  gray: css`
    stop-color: #7a7777;
  `,
  green: css`
    stop-color: #009660;
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

export const Icon = styled(EllipseIcon)<IconColor>`
  ${({ iconcolor }) => css`
    > defs {
      > radialGradient {
        > stop:nth-child(2n) {
          ${iconcolor && iconColors[iconcolor]};
        }
      }
    }
  `}
`;
