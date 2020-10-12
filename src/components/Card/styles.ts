import styled, { css } from 'styled-components';
import { PlayFill } from '../../styles/Icons/Icons';
import { Desktop, Book, Barbell, CodeSlash } from '../../styles/Icons/Icons';
import { IconProps } from './index';

const BackgroundIcons = {
  Desktop: css`
    background: linear-gradient(135.96deg, #7012cf 5.78%, #cd9cff 107.51%);
  `,
  Workout: css`
    background: linear-gradient(
      133.43deg,
      #f2994a -0.19%,
      #ffb878 98.99%,
      rgba(242, 153, 74, 0) 103.87%
    );
  `,
  Code: css`
    background: linear-gradient(140.04deg, #fd5b71 -5.68%, #ff788b 111.13%);
  `,
  Book: css`
    background: linear-gradient(139.21deg, #27ae60 0%, #50ff9a 108.54%);
  `,
};

export const Container = styled.div`
  height: 84px;
  border-radius: 12px;
  background-color: var(--secondary);
  margin-top: 16px;
`;

export const Wrapper = styled.div`
  display: flex;
  padding: 16px 16px;
`;

export const EllipseIcon = styled.div<IconProps>`
  ${({ icons }) => css`
    width: 44px;
    height: 44px;
    border-radius: 100%;
    display: flex;
    justify-content: center;
    ${icons && BackgroundIcons[icons]};
  `}
`;

export const FlexDiv = styled.div`
  display: flex;
  flex-direction: column;
  > div {
    display: flex;
    padding: 0 0px 8px 16px;
    justify-content: space-between;
    width: 265px;

    > h1 {
      padding: 0;
      font-size: 14px;
      font-weight: 500;
    }
    > span {
      padding: 0;
      font-size: 12px;
      color: var(--gray);
    }
  }
`;

export const TagsAndPlay = styled.div`
  display: flex;

  > div {
    display: flex;

    > div {
      margin-right: 8px;
    }
  }
`;

export const Play = styled(PlayFill)`
  width: 34px;
  height: 34px;
  margin-top: -5px;
  margin-right: -3px;

  > path {
    color: var(--gray-dark);
  }
`;

const iconsCSS = css`
  width: 24px;
  height: 24px;
  margin-top: 10px;
  }
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
