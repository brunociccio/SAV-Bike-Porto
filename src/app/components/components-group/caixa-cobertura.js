"use client";
import React, { useState } from 'react';
import styled from 'styled-components';
import Link from 'next/link';

const Container = styled.div`
  display: flex;
  align-items: center;
  background-color: ${props => props.extended ? '#0046c0' : '#01a1fd'};
  color: white;
  font-weight: ${props => props.extended ? '500' : '300'};
  padding: 10px;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out, transform 0.3s ease-in-out;
  border-radius: 10px;
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
  margin: 2.5em auto 1em auto;
  font-size: 16px;
  border-radius: 10px;
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
  font-family: 'Poppins', sans-serif;
  display: block;
  opacity: ${props => props.disabled ? '0.7' : '1'}; // Opacidade condicional
`;




const SelecaoOpcoes = ({ handleButtonClick }) => {
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleSelectOption = (texto) => {
    if (selectedOptions.includes(texto)) {
      setSelectedOptions(selectedOptions.filter((option) => option !== texto));
    } else {
      setSelectedOptions([...selectedOptions, texto]);
    }
  };


  const isButtonEnabled = selectedOptions.length >= 6;

  const frases = [
    "Reparo de câmaras de ar",
    "Substituição ou regulagem de selim e canote de selim",
    "Substituição e regulagem manetes de freio dianteiro e traseiro",
    "Substituição ou regulagem de freio dianteiro e traseiro",
    "Lubrificação de correntes e coroas",
    "Transporte do segurado e Bike - limite de 50km caso de acidente",
    "Transporte do segurado e Bike - limite de 150km caso de acidente",
    "Instalação de suporte de parede e chão para a Bike",
    "Serviço de leva e traz com limite de 50km - agendamento prévio"
  ];

  return (
    <div>
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
<Link href="/seguros">
  <Botao
    disabled={!isButtonEnabled}
    onClick={handleButtonClick}
  >
    Ir para Seguros
  </Botao>
</Link>
    </div>
  );
};

export default SelecaoOpcoes;















