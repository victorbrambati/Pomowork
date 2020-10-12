import React from 'react';

import { Container, Wrapper } from './styles';
import Card from '../Card';
const Today = () => {
  return (
    <Container>
      <Wrapper>
        <h1>Today</h1>
        <button>See All</button>
      </Wrapper>
      <Card
        color="gray"
        icons="Book"
        textTag2="Marcos 1"
        textTag="Salmos 26"
        timer="00:45:32"
        title="Lendo a Bíblia"
      />
      <Card
        color="green"
        icons="Workout"
        textTag2="Perna"
        textTag="Abdomen"
        timer="00:45:32"
        title="Treinando"
      />
      <Card
        color="orange"
        icons="Code"
        textTag2="Pomowork"
        textTag="Commit no Github"
        timer="04:65:32"
        title="Projetos"
      />
      <Card
        color="green"
        icons="Desktop"
        textTag2="Live do Luke"
        textTag="Xandão"
        timer="00:45:32"
        title="Twitch"
      />
    </Container>
  );
};

export default Today;
