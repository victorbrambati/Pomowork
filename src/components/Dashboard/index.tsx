import React, { useRef, useEffect, MutableRefObject, useState } from 'react';

import {
  Container,
  TaskHours,
  Hours,
  Points,
  Button,
  SpotLight,
  Ball,
  AbsoluteBall,
} from './styles';
import { ResponsiveLine } from '@nivo/line';
import ScrollContainer from 'react-indiana-drag-scroll';
import Line from '../../styles/Icons/Line';
import { ProductivityContext } from '../../routes';

export type ButtonLight = {
  active?: boolean;
};

export type BallProps = {
  marginBottom: number;
};

const Dashboard = () => {
  const HoursData = [
    '12h0m',
    '11h30m',
    '11h0m',
    '10h30m',
    '10h0m',
    '9h30m',
    '9h0m',
    '8h30m',
    '8h0m',
    '7h30m',
    '7h0m',
    '6h30m',
    '6h0m',
    '5h30m',
    '5h0m',
    '4h30m',
    '4h0m',
    '3h30m',
    '3h0m',
    '2h30m',
    '2h0m',
    '1h30m',
    '1h0m',
    '0h30m',
    '0h0m',
  ];

  const HoursDay = [
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '10',
    '11',
    '12',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '10',
    '11',
    '12',
  ];

  const myRef = useRef() as MutableRefObject<HTMLDivElement>;
  const RefAmPm = useRef() as MutableRefObject<HTMLDivElement>;

  const actualDate = new Date();
  const realActualHours = actualDate.getHours();
  const actualHours = realActualHours !== 0 ? realActualHours - 1 : 23;

  useEffect(() => {
    myRef.current.scrollTo(0, Math.random() * 50000);

    RefAmPm.current.scrollTo(
      actualHours < 9 ? (actualHours - 2) * 52 : (actualHours - 2) * 53.5,
      0
    );
  }, [myRef, RefAmPm, actualHours]);

  const [positionAmPm, setPositionAmPm] = useState(actualHours);

  const { productivity } = React.useContext(ProductivityContext);

  const timeMinus3 = productivity.timeTaskTotal[positionAmPm - 3]
    ? productivity.timeTaskTotal[positionAmPm - 3].timeLog.reduce((a, b) => {
        return a + b;
      }, 0)
    : 0;
  const timeMinus2 = productivity.timeTaskTotal[positionAmPm - 2]
    ? productivity.timeTaskTotal[positionAmPm - 2].timeLog.reduce((a, b) => {
        return a + b;
      }, 0)
    : 0;
  const timeMinus1 = productivity.timeTaskTotal[positionAmPm - 1]
    ? productivity.timeTaskTotal[positionAmPm - 1].timeLog.reduce((a, b) => {
        return a + b;
      }, 0)
    : 0;
  const time = productivity.timeTaskTotal[positionAmPm]
    ? productivity.timeTaskTotal[positionAmPm].timeLog.reduce((a, b) => {
        return a + b;
      }, 0)
    : 0;
  const timePlus1 = productivity.timeTaskTotal[positionAmPm + 1]
    ? productivity.timeTaskTotal[positionAmPm + 1].timeLog.reduce((a, b) => {
        return a + b;
      }, 0)
    : 0;
  const timePlus2 = productivity.timeTaskTotal[positionAmPm + 2]
    ? productivity.timeTaskTotal[positionAmPm + 2].timeLog.reduce((a, b) => {
        return a + b;
      }, 0)
    : 0;
  const timePlus3 = productivity.timeTaskTotal[positionAmPm + 3]
    ? productivity.timeTaskTotal[positionAmPm + 3].timeLog.reduce((a, b) => {
        return a + b;
      }, 0)
    : 0;

  const data = [
    {
      id: 'japan',
      data: [
        {
          x: 0,
          y: timeMinus3,
        },
        {
          x: 0.25,
          y: timeMinus2,
        },
        {
          x: 1.2,
          y: timeMinus1,
        },
        {
          x: 2.1,
          y: time,
        },
        {
          x: 3.2,
          y: timePlus1,
        },
        {
          x: 4.1,
          y: timePlus2,
        },
        {
          x: 5,
          y: timePlus3,
        },
      ],
    },
  ];

  const currentPosition = data[0].data[3];

  return (
    <Container>
      <ScrollContainer
        innerRef={myRef}
        style={{ position: 'relative' }}
        horizontal={true}
      >
        <Points>
          <ResponsiveLine
            data={data}
            xScale={{ type: 'linear' }}
            yScale={{ type: 'linear', stacked: true, min: 0, max: 2500 }}
            margin={{ bottom: 15 }}
            curve="natural"
            axisTop={null}
            axisRight={null}
            axisBottom={null}
            axisLeft={null}
            enableGridX={false}
            enableGridY={false}
            colors="url(#gradientA)"
            defs={[
              {
                id: 'gradientA',
                type: 'linearGradient',
                colors: [
                  { offset: 0, color: '#b99bd8' },
                  { offset: 25, color: '#9F5FDE' },
                  { offset: 50, color: '#7012CE' },
                ],
              },
            ]}
            lineWidth={4.75}
            enablePoints={false}
            useMesh={true}
            enableCrosshair={true}
            legends={[]}
            tooltip={() => <div />}
          />
        </Points>
        <SpotLight>
          <svg
            width="1"
            height="207"
            viewBox="0 0 1 207"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line
              x1="0.5"
              y1="-2.18557e-08"
              x2="0.500009"
              y2="207"
              stroke="white"
              strokeDasharray="8 8"
            />
          </svg>
        </SpotLight>
        <AbsoluteBall>
          <Ball style={{ marginBottom: currentPosition.y / 2.15 }}>
            <div />
          </Ball>
        </AbsoluteBall>
        <TaskHours>
          {HoursData.map((hours, index) => {
            return (
              <div key={index}>
                <span>{hours}</span>
                <Line />
              </div>
            );
          })}
        </TaskHours>
      </ScrollContainer>

      <ScrollContainer
        style={{ marginLeft: 75, marginRight: 14 }}
        vertical={false}
        innerRef={RefAmPm}
      >
        <Hours>
          {HoursDay.map((hours, index) => {
            return (
              <Button
                key={index}
                onClick={() => {
                  RefAmPm.current.scrollTo(
                    index < 9 ? (index - 2) * 52 : (index - 2) * 53.5,
                    0
                  );
                  setPositionAmPm(index);
                }}
                active={index === positionAmPm && true}
              >
                {hours}
                <span>{index > 11 ? 'PM' : 'AM'}</span>
              </Button>
            );
          })}
        </Hours>
      </ScrollContainer>
    </Container>
  );
};

export default Dashboard;
