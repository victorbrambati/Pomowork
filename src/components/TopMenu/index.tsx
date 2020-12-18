import React from 'react';

import { Container, Wrapper } from './styles';
import ArrowBack from '../../styles/Icons/ArrowBack';
import { useHistory } from 'react-router-dom';
import Tag, { TagProps, TextProps } from '../../components/Tag';

type TopMenuProps = TagProps &
  TextProps & {
    title: string;
    end?: Function;
  };

const TopMenu = ({
  title,
  tagVariant,
  tagColor,
  tagText,
  end,
}: TopMenuProps) => {
  const history = useHistory();

  function ArrowClick() {
    history.goBack();
    if (end) {
      end();
    }
  }
  return (
    <Container>
      <Wrapper>
        <button onClick={ArrowClick}>
          <ArrowBack />
        </button>

        <h1>{title}</h1>

        {tagText ? (
          <div>
            <Tag
              tagVariant={tagVariant}
              tagColor={tagColor}
              tagText={tagText}
            />
          </div>
        ) : (
          <div style={{ width: '40px' }} />
        )}
      </Wrapper>
    </Container>
  );
};

export default TopMenu;
