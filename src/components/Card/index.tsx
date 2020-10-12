import React from 'react';
import Tag, { TagProps } from '../Tag';

import {
  Container,
  EllipseIcon,
  TagsAndPlay,
  Wrapper,
  Play,
  FlexDiv,
  DesktopIcon,
  BarbellIcon,
  CodeIcon,
  BookIcon,
} from './styles';

export type IconProps = {
  icons: 'Desktop' | 'Workout' | 'Code' | 'Book';
};

type CardProps = TagProps & {
  title: string;
  textTag: string;
  textTag2: string;
  timer: string;
};

const Card = ({
  icons,
  title,
  textTag,
  textTag2,
  timer,
  color,
}: CardProps & IconProps) => {
  return (
    <Container>
      <Wrapper>
        <EllipseIcon icons={icons}>
          <div>
            {icons === 'Desktop' && <DesktopIcon />}
            {icons === 'Workout' && <BarbellIcon />}
            {icons === 'Code' && <CodeIcon />}
            {icons === 'Book' && <BookIcon />}
          </div>
        </EllipseIcon>

        <FlexDiv>
          <div>
            <h1>{title}</h1>
            <span>{timer}</span>
          </div>

          <TagsAndPlay>
            <div>
              <div>
                <Tag text={textTag2} color={color} variant="primary" />
              </div>

              {icons === 'Desktop' && (
                <Tag text={textTag} color="purple" variant="primary" />
              )}
              {icons === 'Workout' && (
                <Tag text={textTag} color="orange" variant="primary" />
              )}
              {icons === 'Code' && (
                <Tag text={textTag} color="pink" variant="primary" />
              )}
              {icons === 'Book' && (
                <Tag text={textTag} color="green" variant="primary" />
              )}
            </div>
            <Play />
          </TagsAndPlay>
        </FlexDiv>
      </Wrapper>
    </Container>
  );
};

export default Card;
