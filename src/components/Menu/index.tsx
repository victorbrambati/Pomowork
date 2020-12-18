import React from 'react';

import {
  Container,
  ClockActive,
  Clock,
  Addz,
  AddActive,
  Chart,
  ChartActive,
  Wrapper,
} from './styles';
import { Link } from 'react-router-dom';

type Active = {
  active: 'clock' | 'chart-add';
};

const Menu = ({ active }: Active) => {
  return (
    <Container>
      <Wrapper>
        <Link to="/">{active === 'clock' ? <ClockActive /> : <Clock />}</Link>

        <Link to="/create">
          {active === 'chart-add' ? <AddActive /> : <Addz />}
        </Link>

        <Link to="/productivity">
          {active === 'chart-add' ? <ChartActive /> : <Chart />}
        </Link>
      </Wrapper>
    </Container>
  );
};

export default Menu;
