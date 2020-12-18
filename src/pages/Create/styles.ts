import styled from 'styled-components';

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
`;

export const HeaderContent = styled.div`
  display: flex;
  width: 84%;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 32px;
`;

export const Button = styled.button`
  outline: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CardWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 14px;
`;

export const DurationWrapper = styled.div`
  display: flex;
  margin-right: 25px;
  position: absolute;
  bottom: 150px;
  @media (min-height: 600px) {
    bottom: 180px;
  }
  @media (min-height: 700px) {
    bottom: 250px;
  }
  @media (min-height: 800px) {
    bottom: 310px;
  }
  @media (min-height: 900px) {
    bottom: 500px;
  }
`;

export const CreateButton = styled.button`
  width: 92px;
  height: 39px;
  display: flex;
  justify-content: center;
  align-items: center;
  outline: none;
  background-color: var(--tertiary);
  cursor: pointer;
  border-radius: 16px;
  position: absolute;

  @media (min-height: 400px) {
    bottom: 90px;
  }
  @media (min-height: 700px) {
    bottom: 105px;
  }
  @media (min-height: 815px) {
    bottom: 135px;
  }
  @media (min-height: 1000px) {
    bottom: 140px;
  }
  > span {
    color: var(--primary);
    font-size: 18px;
    font-weight: 400;
  }
  transition: 0.1s;
  :hover {
    box-shadow: 0px 0px 27px rgba(255, 255, 255, 0.59);
  }
`;
