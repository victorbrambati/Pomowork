import React, { useState, useCallback } from 'react';
import { GlobalContext } from '../../routes';
import {
  Container,
  Wrapper,
  Package,
  Content,
  HeaderContent,
  CardWrapper,
  Button,
  DurationWrapper,
  CreateButton,
} from './styles';
import Menu from '../../components/Menu';
import TopMenu from '../../components/TopMenu';
import CardPickColor from '../../components/CardPickColor';
import Input from '../../components/Input';
import Remove from '../../styles/Icons/Remove';
import AddPicker from '../../styles/Icons/AddPicker';
import Duration from '../../components/Duration';
import { useHistory } from 'react-router-dom';
type ColorsEllipseSetTag =
  | 'pink'
  | 'purple'
  | 'orange'
  | 'gray'
  | 'green'
  | undefined;

const Create = () => {
  const history = useHistory();

  const [inputState, setInputState] = useState('Ui Design');

  const [iconState, setIconState] = useState('Book');
  const [colorIconEllipse, setColorIconEllipse] = useState<ColorsEllipseSetTag>(
    'orange'
  );

  const [colorEllipse, setColorEllipse] = useState<ColorsEllipseSetTag>('pink');

  const [colorEllipse2, setColorEllipse2] = useState<ColorsEllipseSetTag>(
    'green'
  );
  const [colorEllipse3, setColorEllipse3] = useState<ColorsEllipseSetTag>(
    'purple'
  );

  const [tagTextState, setTagTextState] = useState('Work');

  const [tagTextState2, setTagTextState2] = useState('Learning ');

  const [tagTextState3, setTagTextState3] = useState('Workout ');

  const [countCard, setCountCard] = useState(0);

  const [time, setTime] = useState(3000000);

  const { state, update } = React.useContext(GlobalContext);
  return (
    <Container>
      <Wrapper>
        <Menu active="chart-add" />
        <Package>
          <TopMenu title="Create" />
          <Content>
            <HeaderContent>
              <div>
                <Input inputState={inputState} setInputState={setInputState} />
              </div>
              <CardPickColor
                variant="icon"
                iconState={iconState}
                setIconState={setIconState}
                colorState={colorIconEllipse}
                setColorState={setColorIconEllipse}
                colorSecondary="purple"
                colorTertiary="pink"
                colorQuaternary="green"
              />
            </HeaderContent>
            <CardWrapper>
              <CardPickColor
                variant="tag"
                tagTextState={tagTextState}
                setTagTextState={setTagTextState}
                colorState={colorEllipse}
                setColorState={setColorEllipse}
                colorPrimary="orange"
                colorSecondary="purple"
                colorTertiary="pink"
                colorQuaternary="green"
              />

              <Button
                onClick={() => countCard <= 1 && setCountCard(countCard + 1)}
              >
                <AddPicker />
              </Button>
            </CardWrapper>

            {countCard >= 1 && (
              <CardWrapper>
                <CardPickColor
                  variant="tag"
                  tagTextState={tagTextState2}
                  setTagTextState={setTagTextState2}
                  colorState={colorEllipse2}
                  setColorState={setColorEllipse2}
                  colorPrimary="orange"
                  colorSecondary="purple"
                  colorTertiary="pink"
                  colorQuaternary="green"
                />

                <Button onClick={() => setCountCard(0)}>
                  <Remove />
                </Button>
              </CardWrapper>
            )}
            {countCard === 2 && (
              <CardWrapper>
                <CardPickColor
                  variant="tag"
                  tagTextState={tagTextState3}
                  setTagTextState={setTagTextState3}
                  colorState={colorEllipse3}
                  setColorState={setColorEllipse3}
                  colorPrimary="orange"
                  colorSecondary="purple"
                  colorTertiary="pink"
                  colorQuaternary="green"
                />
                <Button onClick={() => setCountCard(countCard - 1)}>
                  <Remove />
                </Button>
              </CardWrapper>
            )}

            <DurationWrapper>
              <Button
                onClick={() => time > 600000 && setTime(time - 600000)}
                style={{ marginRight: 9 }}
              >
                <Remove opacity="40%" />
              </Button>
              <Button
                onClick={useCallback(
                  () => setTime((time) => time + 600000),
                  []
                )}
                style={{ marginRight: 10 }}
              >
                <AddPicker opacity="40%" />
              </Button>
              <Duration milliseconds={time} />
            </DurationWrapper>
            <CreateButton
              onClick={() => {
                update([
                  ...state,
                  {
                    name: inputState,
                    milliseconds: time,
                    millisecondsInit: time,
                    tags: [
                      { id: 1, name: tagTextState, color: colorEllipse },
                      { id: 2, name: tagTextState2, color: colorEllipse2 },
                      { id: 3, name: tagTextState3, color: colorEllipse3 },
                    ],
                    icon: {
                      name: iconState,
                      color: colorIconEllipse,
                    },
                    countTagCard: countCard,
                  },
                ]);
                history.goBack();
              }}
            >
              <span>create</span>
            </CreateButton>
          </Content>
        </Package>
      </Wrapper>
    </Container>
  );
};

export default Create;
