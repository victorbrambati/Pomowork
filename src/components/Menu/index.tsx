import React from 'react';

import {
  Container,
  ClockActive,
  Clock,
  Addz,
  AddActive,
  ChartActive,
  Chart,
  Wrapper,
} from './styles';

type Active = {
  active: 'clock' | 'chart-add';
};

const Menu = ({ active }: Active) => {
  return (
    <Container>
      <Wrapper>
        {active === 'clock' ? <ClockActive /> : <Clock />}
        {active === 'chart-add' ? <AddActive /> : <Addz />}
        {active === 'chart-add' ? <ChartActive /> : <Chart />}
      </Wrapper>
    </Container>
  );
};

export default Menu;
