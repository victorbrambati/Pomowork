import styled from 'styled-components';
import { PlayFill } from '../../styles/Icons/Icons';

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
