import React from 'react';

import { Container } from './styles';

type InputProps = {
  setInputState: React.Dispatch<React.SetStateAction<string>>;
  inputState: string;
};

const Input = ({ setInputState, inputState }: InputProps) => {
  return (
    <Container>
      <input
        maxLength={17}
        id="Task Name"
        value={inputState}
        onClick={() => setInputState('')}
        onChange={(event) => setInputState(event.target.value)}
        spellCheck={false}
      />
    </Container>
  );
};

export default Input;
