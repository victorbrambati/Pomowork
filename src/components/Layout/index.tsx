import React from 'react';

import { Container, Wrapper } from './styles';
import Task from '../Task';

function Layout() {
  return (
    <Container>
      <Wrapper>
        <Task />
      </Wrapper>
    </Container>
  );
}

export default Layout;
