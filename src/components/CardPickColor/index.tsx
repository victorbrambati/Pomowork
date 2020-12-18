import React, { useState } from 'react';

import { Container, Wrapper, CollorDiv, Button } from './styles';
import ColorButton, { ColorsButton } from '../../components/ColorButton';
import InputTag from '../InputTag';
import EllipseIcon from '../EllipseIcon';

export type Variants = {
  variant: 'tag' | 'icon';
};

type CardPickColorProps = ColorsButton &
  Variants & {
    colorState?: 'pink' | 'purple' | 'orange' | 'gray' | 'green';
    setTagTextState?: React.Dispatch<React.SetStateAction<string>>;
    tagTextState?: string;
    setIconState?: React.Dispatch<React.SetStateAction<string>>;
    iconState?: string;
  };

const CardPickColor = ({
  colorPrimary,
  colorSecondary,
  colorTertiary,
  colorQuaternary,
  setColorState,
  colorState,
  setTagTextState,
  tagTextState,
  variant,
  setIconState,
  iconState,
}: CardPickColorProps) => {
  const [carouselIcon, setCarouselIcon] = useState(0);
  const [undefinedText, setUndefinedText] = useState('');

  function Carousel() {
    const icons = ['Desktop', 'Workout', 'Code', 'Book'];
    carouselIcon <= 2 ? setCarouselIcon(carouselIcon + 1) : setCarouselIcon(0);

    const searchIcons = icons[carouselIcon];
    setIconState && setIconState(searchIcons);
  }

  return (
    <Container variant={variant}>
      <Wrapper>
        {variant === 'icon' && (
          <Button onClick={Carousel}>
            <EllipseIcon ellipseColor={colorState} icons={iconState} />
          </Button>
        )}

        {variant === 'tag' && (
          <InputTag
            tagTextInputState={tagTextState ? tagTextState : undefinedText}
            setTagTextInputState={
              setTagTextState ? setTagTextState : setUndefinedText
            }
            tagColor={colorState}
          />
        )}
        <CollorDiv variant={variant}>
          <ColorButton
            setColorState={setColorState}
            colorPrimary={colorPrimary}
            colorSecondary={colorSecondary}
            colorTertiary={colorTertiary}
            colorQuaternary={colorQuaternary}
          />
        </CollorDiv>
      </Wrapper>
    </Container>
  );
};

export default CardPickColor;
