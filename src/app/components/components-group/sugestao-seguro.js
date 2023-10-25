"use client";
import React from 'react';
import styled from 'styled-components';

const Titulo = styled.h1`
  font-size: 20px;
  text-transform: uppercase;
  text-decoration: underline;
  color: #ffffff;
  font-weight: 600;
  text-align: center;
  margin: 1em 1em 1em 2em;
`;

const Paragrafo = styled.p`
  font-size: 16px;
  font-weight: 300;
  color: #ffffff;
  margin: 0 1em 1em 2em;
`;

const TextoEmNegritoAzulClaro = styled.span`
  font-weight: bold;
  color: #01a1fd;
`;

const TextoEmNegritoAzulEscuro = styled.span`
  font-weight: bold;
  color: #0046c0;
  `;

const SugestaoSeguro = ({ numCoberturas }) => {

  let seguroSugerido = '';
  if (numCoberturas >= 5 && numCoberturas <= 6) {
    seguroSugerido = 'Pedal Essencial';
  } else if (numCoberturas >= 7 && numCoberturas <= 8) {
    seguroSugerido = 'Pedal Leve';
  } else if (numCoberturas >= 9 && numCoberturas <= 10) {
    seguroSugerido = 'Pedal Elite';
  }

  return (
    <div>
      <Titulo>
        {seguroSugerido.toUpperCase()} Seguro Sugerido
      </Titulo>
      <Paragrafo>
        Com base nas <TextoEmNegritoAzulClaro>coberturas</TextoEmNegritoAzulClaro> escolhidas por você para sua Bike, sugerimos o 
        <TextoEmNegritoAzulEscuro> Seguro {seguroSugerido}</TextoEmNegritoAzulEscuro>.
      </Paragrafo>
    </div>
  );
};

export default SugestaoSeguro;


