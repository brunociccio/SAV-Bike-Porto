import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  margin-left: 2em;
  padding-top: 2em;
`;

const Title = styled.h1`
  font-weight: bold;
  color: black;
  margin-right: 3em;
  font-size: 20px;
`;

const BlueLightText = styled.span`
  color: #007BFF; /* Azul claro */
`;

const BlueDarkText = styled.span`
  color: #00008B; /* Azul escuro */
`;

const Description = styled.p`
  font-weight: 300;
  color: black;
  font-size: 16px;
  margin: 1em 2em 2em 0;
`;

const TextoCarrossel = () => {
  return (
    <Container>
      <Title>
        Utilizando a <BlueLightText>Porto-SAV</BlueLightText>, além de simples e prático, você define as coberturas que seu <BlueDarkText>Seguro</BlueDarkText> irá cobrir!
      </Title>
      <Description>
        Se preocupe apenas em pedalar enquanto nós cuidamos de você e sua bike!
      </Description>
    </Container>
  );
};

export default TextoCarrossel;
