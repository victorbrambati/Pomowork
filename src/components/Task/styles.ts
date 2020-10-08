import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 343px;
  flex-direction: column;
  padding-top: 40px;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;

  > h1 {
    color: var(--tertiary);
    font-size: 24px;
    font-weight: 500;
  }
`;
