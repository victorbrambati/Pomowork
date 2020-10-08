import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 24px;
  width: 343px;
  height: 112px;
  background-color: var(--secondary);
  border-radius: 12px;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 16px 16px;

  > h1 {
    font-size: 32px;
    font-weight: 500;
  }
`;
