import React from 'react';
import styled from 'styled-components';

const ImageWithText = styled.div`
  position: relative;
  display: inline-block;
`;

const Image = styled.img`
  height: auto;
  width: 100%;
  display: block;
  opacity: 0.9;
`;

const TextContainer = styled.div`
  position: absolute;
  top: 25%;
  left: 31%;
  transform: translate(-50%, -50%);
  
`;

const Text = styled.p`
  color: #fff;
  font-size: 26px;
  font-weight: 800;
  margin: -0.4em;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
`;

const BlueFirstLetter = styled.span`
  color: #01a1fd; /* Azul */
  font-weight: bold;
`;

const FotoHome = () => {
  return (
    <ImageWithText>
      <Image src="images/home2.jpg" alt="Descrição da imagem" />
      <TextContainer>
        <Text>
          <BlueFirstLetter>S</BlueFirstLetter>istema
        </Text>
        <Text>
          <BlueFirstLetter>A</BlueFirstLetter>utomatizado de
        </Text>
        <Text>
          <BlueFirstLetter>V</BlueFirstLetter>istorias
        </Text>
      </TextContainer>
    </ImageWithText>
  );
};

export default FotoHome;
