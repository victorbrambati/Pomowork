import styled, { css } from 'styled-components';
import AddCircle from '../../styles/Icons/AddCircle';
import Time from '../../styles/Icons/Time';
import Add from '../../styles/Icons/Add';
import PieChart from '../../styles/Icons/PieChart';
import PieChartActive from '../../styles/Icons/PieChartActive';
import TimeCircle from '../../styles/Icons/TimeCircle';

export const Container = styled.div`
  background: var(--primary);
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 2;
  width: 100%;
  box-shadow: 0px -8px 100px rgba(130, 130, 130, 0.15);
  border-radius: 30px 30px 0px 0px;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 14px 58px 14px 58px;
`;

const iconCSS = css`
  width: 24px;
  height: 24px;
`;
const iconActiveCSS = css`
  width: 24px;
  height: 24px;
`;

export const ClockActive = styled(TimeCircle)`
  ${iconActiveCSS}
`;
export const Clock = styled(Time)`
  ${iconCSS}
`;
export const AddActive = styled(AddCircle)`
  width: 32px;
  height: 32px;
`;
export const Addz = styled(Add)`
  width: 32px;
  height: 32px;
`;
export const ChartActive = styled(PieChartActive)`
  ${iconActiveCSS}
`;
export const Chart = styled(PieChart)`
  ${iconCSS}
`;
