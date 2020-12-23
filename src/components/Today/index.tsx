import React from 'react';

import { Container, Wrapper } from './styles';
import Card from '../Card';
import { GlobalContext } from '../../routes';

const Today = () => {
  const { state } = React.useContext(GlobalContext);

  return (
    <Container>
      <Wrapper>
        <h1>Today</h1>
        <button>See All</button>
      </Wrapper>
      {state.map((e, index) => {
        const textTag = e.tags.map((e) => e.name);
        const tagColor = e.tags.map((e) => e.color);
        return (
          <Card
            key={index}
            id={index}
            ellipseColor={e.icon.color}
            tagColor={tagColor[0]}
            tagColor2={tagColor[1]}
            tagColor3={tagColor[2]}
            icons={e.icon.name}
            textTag3={textTag[2]}
            textTag2={textTag[1]}
            textTag={textTag[0]}
            timer={e.milliseconds}
            title={e.name}
          />
        );
      })}
      <div style={{ marginBottom: 72 }} />
    </Container>
  );
};

export default Today;
