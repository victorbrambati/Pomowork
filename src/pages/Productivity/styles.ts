import styled, { css, keyframes } from 'styled-components';
import { DayWeek } from './index';

const slideInLeft = keyframes`
0% {
  transform: translate(-100%);
  visibility: visible;
  }
  100% {
  transform: translateX(0);
  }
`;
const slideInRight = keyframes`
0% {
  transform: translateX(100%);
  visibility: visible;
  }
  100% {
  transform: translateX(0);
  }
`;

const HandlerDayWeek = {
  Day: css`
    > span:first-child {
      background-color: var(--gray-dark);
      opacity: 1;
      cursor: pointer;
      animation-name: ${slideInRight};
      animation-duration: 1s;
      animation-fill-mode: both;
    }
  `,
  Week: css`
    > span:last-child {
      background-color: var(--gray-dark);
      opacity: 1;
      cursor: pointer;
      animation-name: ${slideInLeft};
      animation-duration: 1s;
      animation-fill-mode: both;
    }
  `,
};

export const Container = styled.div`
  background: var(--primary);
  height: 100%;
  width: 100%;
`;

export const Wrapper = styled.div`
  height: 100%;
  max-width: 1280px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
`;

export const Package = styled.div`
  display: flex;
  flex-direction: column;
  width: 375px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  margin-top: 42px;
`;

export const Cards = styled.div`
  display: flex;
  width: 91%;
  justify-content: space-between;
`;

export const Card = styled.div`
  width: 164px;
  height: 132px;
  background-color: var(--secondary);
  border-radius: 16px;

  > div {
    display: flex;
    margin-top: 16px;
    margin-left: 16px;
    > span {
      font-size: 16px;
      font-weight: 400;
      margin-left: 12px;
    }
  }
  > h1 {
    font-size: 32px;
    font-weight: 500;
    margin-left: 16px;
    margin-top: 24px;
  }

  > div:nth-child(2n) {
    margin-top: 24px;
  }
`;

export const DayAndWeek = styled.button<DayWeek>`
  ${({ handler }) => css`
    width: 279px;
    height: 44px;
    margin-top: 40px;
    display: flex;
    outline: none;
    background-color: var(--secondary);
    border-radius: 10px;

    > span {
      font-size: 16px;
      width: 132px;
      height: 36px;
      display: flex;
      justify-content: center;
      align-items: center;
      opacity: 0.4;
      border-radius: 8px;
      margin: 4px 4px 0 4px;
    }

    ${handler && HandlerDayWeek[handler]};
  `}
`;
