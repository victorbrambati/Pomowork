import React from 'react';

import { Container } from './styles';
import { useTime } from '../../hooks/useTime';

type DurationProps = {
  milliseconds: number;
};

const Duration = ({ milliseconds }: DurationProps) => {
  const [hours, minutes] = useTime(milliseconds);

  return (
    <Container>
      <time>{hours}</time>
      <span>h</span>
      <time>{minutes}</time>
      <span>m</span>
    </Container>
  );
};

export default Duration;
