import React from 'react';

import { Container } from './styles';
import ContentEditable from 'react-contenteditable';

export type TagProps = {
  tagVariant?: 'primary' | 'transparent';
  tagColor?: 'pink' | 'purple' | 'orange' | 'gray' | 'green';
};
export type TextProps = {
  setTagTextInputState: React.Dispatch<React.SetStateAction<string>>;
  tagTextInputState: string;
};

const InputTag = ({
  tagColor,
  tagVariant,
  tagTextInputState,
  setTagTextInputState,
}: TagProps & TextProps) => {
  const handleChange = (evt: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setTagTextInputState(evt.target.value);
  };

  const ready = tagTextInputState.match('&nbsp;') ? 12 : 0;
  tagTextInputState.length >= 18 + ready && setTagTextInputState('');
  tagTextInputState.match('<br>') && setTagTextInputState('');
  return (
    <Container tagVariant={tagVariant} tagColor={tagColor}>
      <ContentEditable
        onClick={() => setTagTextInputState('')}
        html={tagTextInputState}
        onChange={handleChange}
        tagName="span"
        spellCheck={false}
      />
    </Container>
  );
};

export default InputTag;
