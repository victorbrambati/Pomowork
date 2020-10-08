import React from 'react';
import DotsNav from '../DotsNav';
import SimpleCard from '../SimpleCard';
import { Container, Wrapper } from './styles';

const Task = () => {
  return (
    <Container>
      <Wrapper>
        <h1>Task</h1>
        <DotsNav />
      </Wrapper>
      <SimpleCard />
    </Container>
  );
};

export default Task;
