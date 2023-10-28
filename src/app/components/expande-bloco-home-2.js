import React from 'react';
import styled from 'styled-components';

const ImageContainer = styled.div`
  position: absolute;
  height: 80vh;
  width: 80vw;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
`;

const Box = styled.div`
  background: #000;
  color: white;
  width: 355px;
  height: 700px; /* Ajuste a altura para 1000px */
  border-radius: 8px;
  padding: 20px;
  text-align: center;
  position: absolute;
  z-index: 1;
`;

const Title = styled.h2`
  color: lightblue;
`;

const Text = styled.p`
  color: white;
`;

const CloseButton = styled.button`
  background: #0046c0;
  color: white;
  border: none;
  padding: 0.5em 1em;
  margin-top: 1em;
  cursor: pointer;
  border-radius: 4px;
`;

const ExpandedFotoBlocoHome2 = ({ title, text, onClose }) => (
  <ImageContainer>
    <Overlay />
    <Box>
      <Title>{title}</Title>
      <Text>{text}</Text>
      <CloseButton onClick={onClose}>Fechar</CloseButton>
    </Box>
  </ImageContainer>
);

export default ExpandedFotoBlocoHome2;

