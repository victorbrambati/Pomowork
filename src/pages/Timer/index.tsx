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

const Timer = () => {
  const { id } = useParams();
  const { state, update } = React.useContext(GlobalContext);
  const { productivity, setProductivity } = React.useContext(
    ProductivityContext
  );

  function MinutesDashboard(milliseconds: number) {
    const millisecondsForMinutes = milliseconds / 60000;

    const minutesForPixel =
      millisecondsForMinutes + millisecondsForMinutes * 0.72;
    const minutesDashboard = minutesForPixel * 2;

    return [minutesDashboard] as const;
  }

  const milliseconds = state[id] ? state[id].milliseconds : 0;
  const millisecondsInit = state[id] ? state[id].millisecondsInit : 0;

  const [time, setTime] = useState(milliseconds);

  const [minutesDashboard] = MinutesDashboard(milliseconds - time);
  const increment = useCallback(() => setTime((time) => time - 1000), []);

  const [counter, setCounter] = useState(0);

  const actualDate = new Date();
  const realActualHours = actualDate.getHours();
  const actualHours = realActualHours !== 0 ? realActualHours - 1 : 23;

  function dashboard() {
    if (minutesDashboard > 0) {
      productivity.timeTaskTotal[actualHours].timeLog = [
        ...productivity.timeTaskTotal[actualHours].timeLog,
        minutesDashboard,
      ];

      setProductivity(productivity);
    }
  }

  function start() {
    if (counter) {
      clearInterval(counter);
    }
    setCounter(setInterval(increment, 1000));
  }
  function pause() {
    clearInterval(counter);

    if (state[id]) {
      state[id].milliseconds = time;
    }
    update([...state]);
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
    if (time < 1000) {
      productivity.timeDuration = millisecondsInit;
      productivity.TaskCompleted = productivity.TaskCompleted + 1;
      setProductivity(productivity);
    }
    pause();
    dashboard();
    history.goBack();
    state.splice(id, 1);
    update([...state]);
  }

  function zeroPause() {
    clearInterval(counter);
    if (state[id]) {
      state[id].milliseconds = time;
    }

    dashboard();

    if (time < 1000) {
      productivity.timeDuration = millisecondsInit;
      productivity.TaskCompleted = productivity.TaskCompleted + 1;
      setProductivity(productivity);
      state.splice(id, 1);
    }

    update([...state]);
  }

  id &&
    window.addEventListener('popstate', () => {
      zeroPause();
      console.log('voltou');
    });

  useEffect(start, []);
  useEffect(pause, [time < 1000]);
  useEffect(dashboard, [time < 1000]);

  useEffect(() => {
    document.title = `Pomowork - ${hours < 10 ? '0' : ''}${hours}:${
      minutes < 10 ? '0' : ''
    }${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  }, [state, hours, minutes, seconds, id]);

  return (
    <Container>
      <Wrapper>
        <Package>
          <TopMenu
            title="Timer"
            tagText={state[id] ? state[id].tags[0].name : 'Byeeeee!'}
            tagColor={state[id] ? state[id].icon.color : 'green'}
            tagVariant="transparent"
            end={zeroPause}
          />
          <Content>
            <EllipseText
              text={state[id] ? state[id].name : 'Nice'}
              textColor="gray"
              iconcolor={state[id] ? state[id].icon.color : 'green'}
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
