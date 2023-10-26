import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
`;

const Titulo = styled.h1`
  font-size: 24px;
  text-transform: uppercase;
  color: #ffffff;
  z-index: 1;
  position: relative;
  text-align: center;
  font-weight: 400;
`;

const TracoBranco = styled.img`
  width: 100%;
  max-width: 500px;
  height: 30px;
  
  position: absolute;
  top: 120px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 0;
  position: absolute;
`;

const Paragrafo = styled.p`
  font-size: 16px;
  margin: 16px 0;
  color: #ffffff;
  z-index: 1;
  margin: 1em 4em 1em 1em;
  font-weight: 100;
`;

const TituloSeguros = ({ titulo, texto, imagemSrc }) => {
  return (
    <Container>
      <Titulo>{titulo}</Titulo>
      <TracoBranco src={imagemSrc} alt="Traco Branco" />
      <Paragrafo>{texto}</Paragrafo>
      <br></br>
    </Container>
  );
};

export default TituloSeguros;
