import React from 'react';
import Tag from '../Tag';
import EllipseText from '../EllipseText';
import { Container, Wrapper } from './styles';

const SimpleCard = () => {
  return (
    <Container>
      <Wrapper>
        <h1>00:32:10</h1>
        <Tag color="pink" variant="transparent" text="Work" />
      </Wrapper>
      <EllipseText text="Rasion Project" textColor="white" />
    </Container>
  );
};

export default SimpleCard;
