import styled from 'styled-components';
export const Container = styled.div`
  margin-top: 26px;
  height: 24px;
  margin-bottom: 34px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 90%;

  > button {
    margin-top: 1.4px;
    outline: none;
    cursor: pointer;
  }

  > h1 {
    color: var(--tertiary);
    font-size: 24px;
    font-weight: 500;
  }
  @media (max-width: 325px) {
    width: 70%;
  }
  @media (max-width: 290px) {
    width: 70%;
    margin-left: 40px;
  }
`;
