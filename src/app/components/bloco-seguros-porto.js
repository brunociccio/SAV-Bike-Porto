"use client";
import React, { useState } from 'react';
import styled from 'styled-components';
import Link from 'next/link'; 

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${props => props.clicked ? '#0046c0' : '#01a1fd'};
  background-size: ${props => props.clicked ? '140px' : '10px'};
  color: white;
  padding: 1em;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out, padding 0.3s ease-in-out, width 0.3s ease-in-out;
  border-radius: 10px;
  margin-left: 0;
  margin-right: ${props => props.clicked ? '50px' : '120px'};
  margin-bottom: 2em;
  font-size: 16px;
`;

const Title = styled.div`
  text-decoration: ${props => props.clicked ? 'underline' : 'none'};
  text-transform: uppercase;
  margin-top: ${props => props.clicked ? '10px' : '0'};
  align-items: ${props => props.clicked ? 'center' : 'center'};
  text-align: center; /* Alterado para centralizar o texto */
  font-weight: 500;
`;

const TextBelow = styled.p`
  display: ${props => props.clicked ? 'block' : 'none'};
  margin-left: 10px; /* Inserido espaço à esquerda de 10px para o texto */
  white-space: pre-line; /* Permite que o texto seja dividido em várias linhas conforme necessário */
  align-items: ${props => props.clicked ? 'left' : 'center'};
  text-align: left; /* Alterado para centralizar o texto */
  font-weight: 300;
`;

const options = [
  {
    title: "Pedal Essencial",
    textBelow: "\n- Reparo de câmaras de ar;\n- Reparo ou troca de correntes;\n- Substituição ou regulagem de selim e canote do selim;\n- Substituição e regulagem dos manetes de freio dianteiro e traseiro;\n- Substituição e regulagem de freios dianteiros e traseiros;\n- Lubrificação de correntes e coroas;\n- Transporte do segurado e Bike: limite de 50km em caso de acidente;\n\nValor do Seguro: R$880,00\nEm até 10x de R$88,00 sem juros"
  },
  { title: "Pedal Leve", textBelow: "\n- Reparo de câmaras de ar;\n- Reparo ou troca de correntes;\n- Substituição ou regulagem de selim e canote do selim;\n- Substituição e regulagem dos manetes de freio dianteiro e traseiro;\n- Substituição e regulagem de freios dianteiros e traseiros;\n- Lubrificação de correntes e coroas;\n- Transporte do segurado e Bike: limite de 50km em caso de acidente;\n\nValor do Seguro: R$880,00\nEm até 10x de R$88,00 sem juros" },
  { title: "Pedal Elite", textBelow: "\n- Reparo de câmaras de ar;\n- Reparo ou troca de correntes;\n- Substituição ou regulagem de selim e canote do selim;\n- Substituição e regulagem dos manetes de freio dianteiro e traseiro;\n- Substituição e regulagem de freios dianteiros e traseiros;\n- Lubrificação de correntes e coroas;\n- Transporte do segurado e Bike: limite de 50km em caso de acidente;\n\nValor do Seguro: R$880,00\nEm até 10x de R$88,00 sem juros" }
];

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center; /* Centraliza os botões na vertical */
  margin-top: 1em;
`;

const Button = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'}; /* Cursor não clicável se disabled */
  margin: 1em 0; /* Espaçamento entre os botões */
  font-weight: bold;
  transition: background-color 0.3s ease-in-out;
  opacity: ${props => props.disabled ? '0.7' : '1'}; /* Opacidade reduzida quando desabilitado */
`;

const DarkBlueButton = styled(Button)`
  background-color: #0046c0;
  color: white;
  padding: 1em;
`;

const LightBlueButton = styled(Button)`
  background-color: #0046c0;
  color: white;
  padding: 1em;
`;

const RedButton = styled(Button)`
  background-color: #ff0000;
  color: white;
  padding: 1em 4.3em;
`;

const SegurosPorto = ({ handleClick }) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [buttonsEnabled, setButtonsEnabled] = useState(false);

  const handleContainerClick = (option) => {
    setSelectedOption(option);
    setButtonsEnabled(true);
  };

  return (
    <div>
      {options.map((option, index) => (
        <Container
          key={index}
          clicked={selectedOption === option.title}
          onClick={() => {
            if (selectedOption === option.title) {
              setSelectedOption(null);
              setButtonsEnabled(false);
            } else {
              handleContainerClick(option.title);
            }
            handleClick(option.title);
          }}
        >
          <Title clicked={selectedOption === option.title}>{option.title}</Title>
          <TextBelow clicked={selectedOption === option.title}>{option.textBelow}</TextBelow>
        </Container>
      ))}
      <ButtonContainer>
        <Link href="/cadastro">
          <DarkBlueButton disabled={!buttonsEnabled}>Efetivar contratação do Seguro</DarkBlueButton>
        </Link>
        <Link href="/vistoria">
          <LightBlueButton disabled={!buttonsEnabled}>
            Efetivar contratação do Seguro <br></br> e Cadastrar outra Bike
          </LightBlueButton>
        </Link>
        <Link href="/home">
          <RedButton disabled={!buttonsEnabled}>Cancelar Cotação</RedButton>
        </Link>
      </ButtonContainer>
    </div>
  );
};

export default SegurosPorto;



