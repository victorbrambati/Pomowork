import React from 'react';
import Tag from '../Tag';
import EllipseText from '../EllipseText';
import { Container, Wrapper } from './styles';
import { GlobalContext } from '../../routes';
import { useTime } from '../../hooks/useTime';

const SimpleCard = () => {
  const { state } = React.useContext(GlobalContext);

  const [hours, minutes, seconds] = useTime(
    state[0] ? state[0].milliseconds : 1206000
  );

  return (
    <Container>
      <Wrapper>
        <h1>
          {hours < 10 && 0}
          {hours}:{minutes < 10 && 0}
          {minutes}:{seconds < 10 && 0}
          {seconds}
        </h1>
        <Tag
          tagColor={state[0] ? state[0].tags[0].color : 'green'}
          tagVariant="transparent"
          tagText={state[0] ? state[0].tags[0].name : 'Click'}
        />
      </Wrapper>
      <EllipseText
        text={state[0] ? state[0].name : 'Plus Sign In The Bottom Menu'}
        textColor="white"
        iconcolor={state[0] ? state[0].icon.color : 'purple'}
      />
    </Container>
  );
};

export default SimpleCard;
