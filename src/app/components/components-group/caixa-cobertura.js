"use client";
import React, { useState } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { StyleSheetManager } from 'styled-components';
import SugestaoSeguro from './sugestao-seguro';

const Titulo = styled.h1`
  font-size: 18px;
  color: #ffffff;
  font-weight: bold;
  line-height: normal;
  margin: 1em 1em 1.5em 2em;
`;

const Paragrafo = styled.p`
  font-size: 16px;
  font-weight: 300;
  color: #ffffff;
  margin: 1em 3em 2em 2.5em;
`;

const Paragrafo2 = styled.p`
  font-size: 16px;
  font-weight: 400;
  color: #ffffff;
  margin: 0 0 1.5em 2.5em;
  border-bottom: 2px solid white;
`;

const Sublinhado = styled.span`
  text-decoration: underline;
`;

const TextoEmNegritoAzulClaro = styled.span`
  font-weight: bold;
  color: #01a1fd; /* Cor azul claro */
`;

const TextoEmNegritoAzulEscuro = styled.span`
  font-weight: bold;
  color: #0046c0; /* Cor azul escuro */
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  background-color: ${props => props.extended ? '#0046c0' : '#01a1fd'};
  color: white;
  font-weight: ${props => props.extended ? '500' : '300'};
  padding: 10px;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out, transform 0.3s ease-in-out;
  border-radius: 10px 0 0 10px;
  margin-left: 50px;
  transform: translateX(${props => props.extended ? '0' : '0'});
  margin-bottom: 0.5em;
  opacity: ${props => props.opacity};
`;

const Texto = styled.p`
  margin-left: 1em;
  flex: 1;
`;

const Botao = styled.button`
  background: ${props => props.disabled ? '#c8c3c3' : '#0046c0'};
  color: ${props => props.disabled ? '#000' : '#ffffff'};
  text-align: center;
  font-weight: ${props => props.disabled ? '300' : 'bold'};
  padding: 1em 3em;
  margin: 3em auto 1em auto;
  font-size: 16px;
  border-radius: 10px;
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
  font-family: 'Poppins', sans-serif;
  display: block;
  opacity: ${props => props.disabled ? '0.7' : '1'};
`;

const SelecaoOpcoes = () => {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const frases = [
    "Reparo de câmaras de ar",
    "Reparo ou troca de correntes",
    "Substituição ou regulagem de selim e canote de selim",
    "Substituição e regulagem manetes de freio dianteiro e traseiro",
    "Substituição ou regulagem de freio dianteiro e traseiro",
    "Lubrificação de correntes e coroas",
    "Transporte do segurado e Bike - limite de 50km caso de acidente",
    "Transporte do segurado e Bike - limite de 150km caso de acidente",
    "Instalação de suporte de parede e chão para a Bike",
    "Serviço de leva e traz com limite de 50km mediante agendamento prévio"
  ];

  const handleSelectOption = (texto) => {
    if (selectedOptions.includes(texto)) {
      setSelectedOptions(selectedOptions.filter((option) => option !== texto));
    } else {
      setSelectedOptions([...selectedOptions, texto]);
    }
  };

  const numCoberturas = selectedOptions.length;
  const isButtonEnabled = numCoberturas >= 5;
  

  return (
    <div>
      <Titulo>
        Chegou a hora mais <Sublinhado>importante</Sublinhado>!
      </Titulo>
      <Paragrafo>
        Escolha as <TextoEmNegritoAzulClaro>coberturas</TextoEmNegritoAzulClaro> que mais fazem sentido para o <TextoEmNegritoAzulEscuro>seguro</TextoEmNegritoAzulEscuro> da sua Bike!
      </Paragrafo>
      <Paragrafo2>Selecione pelo menos 5 opções:</Paragrafo2>

      <StyleSheetManager shouldForwardProp={(prop) => prop !== 'extended'}>
        {frases.map((frase, index) => (
          <Container
            key={index}
            extended={selectedOptions.includes(frase)}
            opacity={selectedOptions.includes(frase) ? 0.9 : 0.7}
            onClick={() => handleSelectOption(frase)}
          >
            <Texto>{frase}</Texto>
          </Container>
        ))}
      </StyleSheetManager>
      <br></br>

      {numCoberturas >= 5 && <SugestaoSeguro numCoberturas={numCoberturas} />}
      
      <Link href={{ pathname: '/seguros', query: { numCoberturas: numCoberturas } }}>
        <Botao
          disabled={!isButtonEnabled}
        >
          Ir para Seguros
        </Botao>
      </Link>
    </div>
  );
};

export default SelecaoOpcoes;
















