import styled, { css } from 'styled-components';
import { TagProps } from './index';

const colors = {
  pink: css`
    border: 1px solid var(--pink);
    background: var(--pink-background);

    > span {
      color: var(--pink);
    }
  `,
  purple: css`
    border: 1px solid var(--purple);
    background: var(--purple-background);

    > span {
      color: var(--purple);
    }
  `,

  orange: css`
    border: 1px solid var(--orange);
    background: var(--orange-background);

    > span {
      color: var(--orange);
    }
  `,

  gray: css`
    border: 1px solid var(--gray);
    background: var(--gray-background);

    > span {
      color: var(--gray);
    }
  `,

  green: css`
    border: 1px solid var(--green);
    background: var(--green-background);

    > span {
      color: var(--green);
    }
  `,
};

const variants = {
  primary: css`
    border: none;
  `,
  transparent: css`
    background: none;
  `,
};

export const Container = styled.div<TagProps>`
  ${({ variant, color }) => css`
    border-radius: 6px;
    height: 24px;
    > span {
      font-size: 12px;
      padding: 6px 8px;
    }
    ${color && colors[color]};
    ${variant && variants[variant]};
  `}
`;
