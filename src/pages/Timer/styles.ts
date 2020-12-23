import styled from 'styled-components';

export const Container = styled.div`
  background: var(--primary);
  height: 100%;
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  overflow: hidden;
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
  justify-content: center;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  margin-top: 140px;
  > time {
    font-size: 48px;
    font-weight: 500;
    margin-top: 48px;
  }
`;

export const FinishButton = styled.button`
  width: 295px;
  height: 60px;
  background-color: var(--dark-blue);
  display: flex;
  justify-content: center;
  align-items: center;
  outline: none;
  cursor: pointer;
  margin-top: 273px;
  @media (max-height: 737px) {
    margin-top: 240px;
  }
  @media (max-height: 710px) {
    margin-top: 220px;
  }
  @media (max-height: 695px) {
    margin-top: 200px;
  }

  @media (max-height: 665px) {
    margin-top: 180px;
  }

  @media (max-height: 635px) {
    margin-top: 150px;
  }

  > span {
    font-size: 18px;
    font-weight: 500;
  }
`;

export const QuitButton = styled.button`
  margin-top: 24px;
  outline: none;
  cursor: pointer;
  font-size: 18px;
  opacity: 70%;
`;
