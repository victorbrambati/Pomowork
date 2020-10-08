import React from 'react';

import { Container } from './styles';

export type TagProps = {
  variant: 'primary' | 'transparent';
  color: 'pink' | 'purple' | 'orange' | 'gray' | 'green';
};
type TextProps = {
  text: string;
};
const Tag = ({ color, variant, text }: TagProps & TextProps) => {
  return (
    <Container variant={variant} color={color}>
      <span>{text}</span>
    </Container>
  );
};

export default Tag;
