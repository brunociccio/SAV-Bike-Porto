import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  justify-content: center;
  background-color: #01a1fd; /* Cor de fundo azul claro */
  padding: 1em;
  color: #fff; /* Cor do texto branca */
`;

const Title = styled.h1`
  font-size: 20px;
  font-weight: bold;
  margin: 0 0 1em 0;
`;

const Paragraph = styled.p`
  font-size: 16px;
  font-weight: 500;
  margin: 0 0 1em 0;
`;

const SearchInput = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #fff; /* Borda branca fina */
  border-radius: 8px;
  margin-top: 10px;
  background-color: transparent; /* Fundo transparente */
  color: #fff; /* Cor do texto branca */
  &::placeholder {
    color: #fff; /* Cor do texto de espaço reservado branca */
  }
`;

const CaixaPesquisa = () => {
  return (
    <Container>
      <Title>Já sabe por onde começar?</Title>
      <Paragraph>Encontre em nossa plataforma o seguro de bicicleta ideal para você!</Paragraph>
      <SearchInput type="text" placeholder="Qual a sua dúvida?" />
    </Container>
  );
};

export default CaixaPesquisa;
