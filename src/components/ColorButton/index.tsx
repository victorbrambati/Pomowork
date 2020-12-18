import React from 'react';

import { Container, ColorfulButton } from './styles';

type Colors = 'purple' | 'orange' | 'pink' | 'green';

export type ColorButton = {
  color?: Colors;
};
export type ColorsButton = {
  colorPrimary?: Colors;
  colorSecondary?: Colors;
  colorTertiary: Colors;
  colorQuaternary: Colors;
  setColorState: React.Dispatch<
    React.SetStateAction<
      'pink' | 'purple' | 'orange' | 'gray' | 'green' | undefined
    >
  >;
};

const ColorButton = ({
  colorPrimary,
  colorSecondary,
  colorTertiary,
  colorQuaternary,
  setColorState,
}: ColorsButton) => {
  return (
    <Container>
      {colorPrimary && (
        <ColorfulButton
          color={colorPrimary}
          onClick={() => setColorState(colorPrimary)}
        />
      )}

      {colorSecondary && (
        <ColorfulButton
          color={colorSecondary}
          onClick={() => setColorState(colorSecondary)}
        />
      )}
      {colorTertiary && (
        <ColorfulButton
          color={colorTertiary}
          onClick={() => setColorState(colorTertiary)}
        />
      )}

      {colorQuaternary && (
        <ColorfulButton
          color={colorQuaternary}
          onClick={() => setColorState(colorQuaternary)}
        />
      )}
    </Container>
  );
};

export default ColorButton;
