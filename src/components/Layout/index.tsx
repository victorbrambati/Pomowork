import React from 'react';

import { Container, Wrapper, Package } from './styles';
import Menu from '../Menu';
import Task from '../Task';
import Today from '../Today';
function Layout() {
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

export default Layout;
