import styled, { css } from 'styled-components';
import { Desktop, Book, Barbell, CodeSlash } from '../../styles/Icons/Icons';
import { EllipseColorProps } from './index';

const EllipseBackground = {
  purple: css`
    background: linear-gradient(135.96deg, #7012cf 5.78%, #cd9cff 107.51%);
  `,
  orange: css`
    background: linear-gradient(
      133.43deg,
      #f2994a -0.19%,
      #ffb878 98.99%,
      rgba(242, 153, 74, 0) 103.87%
    );
  `,
  pink: css`
    background: linear-gradient(140.04deg, #fd5b71 -5.68%, #ff788b 111.13%);
  `,
  green: css`
    background: linear-gradient(139.21deg, #27ae60 0%, #50ff9a 108.54%);
  `,
  gray: css``,
};

export const Container = styled.div``;

export const EllipseBackgroundColor = styled.div<EllipseColorProps>`
  ${({ ellipseColor }) => css`
    width: 44px;
    height: 44px;
    border-radius: 100%;
    display: flex;
    justify-content: center;
    ${ellipseColor && EllipseBackground[ellipseColor]};
  `}
`;

const iconsCSS = css`
  width: 24px;
  height: 24px;
  margin-top: 10px;
`;

export const DesktopIcon = styled(Desktop)`
  ${iconsCSS}
`;
export const BarbellIcon = styled(Barbell)`
  ${iconsCSS}
`;
export const CodeIcon = styled(CodeSlash)`
  ${iconsCSS}
`;
export const BookIcon = styled(Book)`
  ${iconsCSS}
`;
