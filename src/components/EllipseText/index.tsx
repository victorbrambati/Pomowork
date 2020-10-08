import React from 'react';
import EllipseIcon from '../../styles/Icons/EllipseIcon';

import { Container } from './styles';

export type TextColorProps = {
  textColor: 'white' | 'gray';
};

type EllipseProps = {
  text: string;
};

const EllipseText = ({ text, textColor }: EllipseProps & TextColorProps) => {
  return (
    <Container textColor={textColor}>
      <EllipseIcon />
      <span>{text}</span>
    </Container>
  );
};

export default EllipseText;
