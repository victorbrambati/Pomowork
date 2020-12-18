import React, { useState } from 'react';

import {
  Container,
  Wrapper,
  Package,
  Content,
  Card,
  Cards,
  DayAndWeek,
} from './styles';
import TopMenu from '../../components/TopMenu';
import IconCheck from '../../styles/Icons/IconCheck';
import StopWatch from '../../styles/Icons/Stopwatch';
import Duration from '../../components/Duration';
import Dashboard from '../../components/Dashboard';
import Menu from '../../components/Menu';
import { ProductivityContext } from '../../routes';

export type DayWeek = {
  handler: 'Day' | 'Week';
};

const Productivity = () => {
  const { productivity } = React.useContext(ProductivityContext);
  const [DayWeek, setDayWeek] = useState<DayWeek>({ handler: 'Day' });

  return (
    <Container>
      <Wrapper>
        <Menu active="chart-add" />
        <Package>
          <TopMenu title="Productivity" />
          <Content>
            <Cards>
              <Card>
                <div>
                  <IconCheck />
                  <span>
                    Task <br />
                    Completed
                  </span>
                </div>
                <h1>{productivity.TaskCompleted}</h1>
              </Card>
              <Card>
                <div>
                  <StopWatch />
                  <span>
                    Time <br />
                    Duration
                  </span>
                </div>
                <div>
                  <Duration milliseconds={productivity.timeDuration} />
                </div>
              </Card>
            </Cards>
            <DayAndWeek
              handler={DayWeek.handler}
              onClick={() =>
                DayWeek.handler === 'Day'
                  ? setDayWeek({ handler: 'Week' })
                  : setDayWeek({ handler: 'Day' })
              }
            >
              <span>Day</span>
              <span>Week</span>
            </DayAndWeek>
            <Dashboard />
          </Content>
        </Package>
      </Wrapper>
    </Container>
  );
};

export default Productivity;
