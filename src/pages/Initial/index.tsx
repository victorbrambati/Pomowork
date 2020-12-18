import React from 'react';

import { Container, Wrapper, Package } from './styles';
import Menu from '../../components/Menu';
import Task from '../../components/Task';
import Today from '../../components/Today';

function Initial() {
  return (
    <Container>
      <Wrapper>
        <Package>
          <Menu active="clock" />
          <Task />
          <Today />
        </Package>
      </Wrapper>
    </Container>
  );
}

export default Initial;
