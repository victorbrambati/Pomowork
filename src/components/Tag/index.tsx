import React from 'react';

import { Container } from './styles';

export type TagProps = {
  tagVariant?: 'primary' | 'transparent';
  tagColor?: 'pink' | 'purple' | 'orange' | 'gray' | 'green';
};
export type TextProps = {
  tagText?: string;
};
const Tag = ({ tagColor, tagVariant, tagText }: TagProps & TextProps) => {
  return (
    <Container tagVariant={tagVariant} tagColor={tagColor}>
      <span>{tagText}</span>
    </Container>
  );
};

export default Tag;
