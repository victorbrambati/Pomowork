import React from 'react';

import { Container, Icon } from './styles';

export type TextColorProps = {
  textColor: 'white' | 'gray';
};
export type IconColor = {
  iconcolor?: 'pink' | 'purple' | 'orange' | 'gray' | 'green';
};

type EllipseProps = {
  text: string;
};

const EllipseText = ({
  text,
  textColor,
  iconcolor,
}: EllipseProps & TextColorProps & IconColor) => {
  return (
    <Container textColor={textColor}>
      <Icon iconcolor={iconcolor} />
      <span>{text}</span>
    </Container>
  );
};

export default EllipseText;
