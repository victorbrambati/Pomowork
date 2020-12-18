import React from 'react';
import Tag, { TagProps } from '../Tag';

import { Container, TagsAndPlay, Wrapper, Play, FlexDiv } from './styles';
import EllipseIcon, { EllipseIconProps } from '../EllipseIcon';
import ScrollContainer from 'react-indiana-drag-scroll';
import { useTime } from '../../hooks/useTime';
import { Link } from 'react-router-dom';

type CardProps = TagProps & {
  title: string;
  textTag: string;
  textTag2: string;
  textTag3: string;
  tagColor2?: 'pink' | 'purple' | 'orange' | 'gray' | 'green';
  tagColor3?: 'pink' | 'purple' | 'orange' | 'gray' | 'green';
  timer: number;
  id: number;
};

const Card = ({
  icons,
  title,
  textTag,
  textTag2,
  textTag3,
  timer,
  ellipseColor,
  tagColor,
  tagColor2,
  tagColor3,
  id,
}: CardProps & EllipseIconProps) => {
  const [hours, minutes, seconds] = useTime(timer);

  return (
    <Container>
      <Wrapper>
        <EllipseIcon ellipseColor={ellipseColor} icons={icons} />
        <FlexDiv>
          <div>
            <h1>{title}</h1>
            <span>
              {hours < 10 && 0}
              {hours}:{minutes < 10 && 0}
              {minutes}:{seconds < 10 && 0}
              {seconds}
            </span>
          </div>

          <TagsAndPlay>
            <ScrollContainer
              style={{
                display: 'flex',
                flexDirection: 'row',
              }}
            >
              {tagColor && (
                <Tag
                  tagText={textTag}
                  tagColor={tagColor}
                  tagVariant="primary"
                />
              )}

              {tagColor2 && textTag2 !== 'Learning ' && (
                <Tag
                  tagText={textTag2}
                  tagColor={tagColor2}
                  tagVariant="primary"
                />
              )}
              {tagColor3 && textTag3 !== 'Workout ' && (
                <Tag
                  tagText={textTag3}
                  tagColor={tagColor3}
                  tagVariant="primary"
                />
              )}
            </ScrollContainer>
            <Link to={`/timer/${id}`}>
              <Play />
            </Link>
          </TagsAndPlay>
        </FlexDiv>
      </Wrapper>
    </Container>
  );
};

export default Card;
