import styled, { css } from 'styled-components';
import { ButtonLight } from './index';

const ButtonActive = css`
  opacity: 1;
`;

export const Container = styled.div`
  width: 343px;
  height: 312px;
  background-color: var(--secondary);
  border-radius: 16px;
  margin-top: 24px;
  margin-bottom: 72px;
  display: flex;
  flex-direction: column;
`;

export const TaskHours = styled.div`
  display: flex;
  flex-direction: column;
  height: 312px;
  margin-left: 16px;

  > div {
    > span {
      opacity: 0.4;
    }
    margin-top: 30px;
    width: 311px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

export const Hours = styled.div`
  display: flex;
  margin-bottom: 32px;
  margin-top: 16px;
  width: 271px;
`;

export const Button = styled.button<ButtonLight>`
  ${({ active }) => css`
    cursor: pointer;
    outline: none;
    opacity: 0.4;
    font-size: 16px;
    font-weight: 400;
    margin-right: 24px;
    ${active && ButtonActive};

    > span {
      font-size: 13px;
      font-weight: 400;
    }

    :hover {
      opacity: 1;
    }
  `}
`;

export const Points = styled.div`
  position: absolute;
  left: 75px;
  bottom: -972.5px;
  width: 268px;
  height: 1178px;
  display: flex;
  align-items: flex-end;
  z-index: 5;
`;

export const SpotLight = styled.div`
  position: absolute;
  width: 44px;
  height: 210px;
  left: 166.2px;
  top: 1006px;

  background: linear-gradient(
    180deg,
    rgba(233, 233, 255, 0) 0%,
    rgba(233, 233, 255, 0.4) 100%
  );
  border-radius: 8px 8px 0px 0px;

  display: flex;
  justify-content: center;
  z-index: 1;

  > svg {
    margin-top: 8px;
    opacity: 0.72;
  }
`;

export const AbsoluteBall = styled.div`
  position: absolute;
  left: 176px;
  bottom: -972.5px;
  width: 167px;
  height: 1178px;
  display: flex;
  align-items: flex-end;
  z-index: 10;
  pointer-events: none;
`;

export const Ball = styled.div`
  width: 24px;
  height: 24px;
  background: radial-gradient(
    100% 100% at 142.5% 13.75%,
    #ffffff 0%,
    #7012ce 100%
  );
  backdrop-filter: blur(24px);

  display: flex;

  justify-content: center;
  align-items: center;
  border-radius: 100%;
  z-index: 10;

  transition: margin-bottom 0.4s;

  > div {
    width: 10px;
    height: 10px;
    border-radius: 100%;
    background: #ffffff;
  }
`;
