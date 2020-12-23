import React, { useState, useCallback, useEffect } from 'react';

import {
  Container,
  Wrapper,
  Package,
  Content,
  FinishButton,
  QuitButton,
} from './styles';
import TopMenu from '../../components/TopMenu';
import EllipseText from '../../components/EllipseText';
import { GlobalContext, ProductivityContext } from '../../routes';
import { useParams } from 'react-router-dom';
import { useTime } from '../../hooks/useTime';
import { useHistory } from 'react-router-dom';

type IDRouteParams = {
  id?: string;
};

const Timer = () => {
  const { id } = useParams<IDRouteParams>();
  const { state, update } = React.useContext(GlobalContext);
  const { productivity, setProductivity } = React.useContext(
    ProductivityContext
  );

  const ID = id ? Number.parseInt(id, 10) : -1;

  function MinutesDashboard(milliseconds: number) {
    const millisecondsForMinutes = milliseconds / 60000;

    const minutesForPixel =
      millisecondsForMinutes + millisecondsForMinutes * 0.72;
    const minutesDashboard = minutesForPixel * 2;

    return [minutesDashboard] as const;
  }

  const newState = [...state];

  const milliseconds = newState[ID] ? newState[ID].milliseconds : 0;
  const millisecondsInit = newState[ID] ? newState[ID].millisecondsInit : 0;

  const [time, setTime] = useState(milliseconds);

  const [minutesDashboard] = MinutesDashboard(milliseconds - time);
  const increment = useCallback(() => setTime((time) => time - 1000), []);

  const [counter, setCounter] = useState(0);

  const actualDate = new Date();
  const realActualHours = actualDate.getHours();
  const actualHours = realActualHours !== 0 ? realActualHours - 1 : 23;

  const [newTimeTaskTotal, setNewTimeTaskTotal] = useState([
    ...productivity.timeTaskTotal[actualHours].timeLog,
  ]);
  const [taskTotal, setTaskTotal] = useState([...productivity.timeTaskTotal]);
  const [newTimeDuration, setNewTimeDuration] = useState(
    productivity.timeDuration
  );
  const [newTaskCompleted, setNewTaskCompleted] = useState(
    productivity.TaskCompleted
  );

  function dashboard() {
    if (minutesDashboard > 0) {
      setNewTimeTaskTotal([
        ...productivity.timeTaskTotal[actualHours].timeLog,
        minutesDashboard,
      ]);

      setTaskTotal([
        ...productivity.timeTaskTotal,
        { timeLog: newTimeTaskTotal },
      ]);
    }

    if (time < 1000) {
      setNewTimeDuration(productivity.timeDuration + millisecondsInit);
      setNewTaskCompleted(productivity.TaskCompleted + 1);
    }

    setProductivity({
      timeTaskTotal: taskTotal,
      TaskCompleted: newTaskCompleted,
      timeDuration: newTimeDuration,
    });
  }

  function start() {
    if (counter) {
      clearInterval(counter);
    }
    setCounter(setInterval(increment, 1000));
  }
  function pause() {
    clearInterval(counter);

    if (newState[ID]) {
      newState[ID].milliseconds = time;
      update([...newState]);
    }
  }

  const [hours, minutes, seconds] = useTime(time);

  const history = useHistory();

  function QuitClick() {
    setProductivity(productivity);
    history.goBack();
    pause();
    dashboard();
  }

  function finish() {
    clearInterval(counter);
    dashboard();
    if (state[ID]) {
      newState.splice(ID, 1);
      update([...newState]);
    }
    history.goBack();
  }

  function zeroPause() {
    clearInterval(counter);
    if (state[ID]) {
      state[ID].milliseconds = time;
    }

    dashboard();

    if (time < 1000) {
      newState.splice(ID, 1);
    }
  }

  ID &&
    window.addEventListener('popstate', () => {
      zeroPause();
    });

  useEffect(start, []);
  useEffect(pause, [time < 1000]);
  useEffect(dashboard, [time < 1000]);

  useEffect(() => {
    document.title = `Pomowork - ${hours < 10 ? '0' : ''}${hours}:${
      minutes < 10 ? '0' : ''
    }${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  }, [hours, minutes, seconds, ID]);

  return (
    <Container>
      <Wrapper>
        <Package>
          <TopMenu
            title="Timer"
            tagText={newState[ID] ? newState[ID].tags[0].name : 'Byeeeee!'}
            tagColor={newState[ID] ? newState[ID].icon.color : 'green'}
            tagVariant="transparent"
            end={zeroPause}
          />
          <Content>
            <EllipseText
              text={newState[ID] ? newState[ID].name : 'Nice'}
              textColor="gray"
              iconcolor={newState[ID] ? newState[ID].icon.color : 'green'}
            />
            <time>
              {hours < 10 && 0}
              {hours}:{minutes < 10 && 0}
              {minutes}:{seconds < 10 && 0}
              {seconds}
            </time>
            <FinishButton onClick={finish}>
              <span>Finish</span>
            </FinishButton>
            {time > 1000 && <QuitButton onClick={QuitClick}>Quit</QuitButton>}
          </Content>
        </Package>
      </Wrapper>
    </Container>
  );
};

export default Timer;
