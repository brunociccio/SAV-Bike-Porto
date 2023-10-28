import React, { useState } from 'react';
import styled from 'styled-components';
import ExpandedFotoBlocoHome2 from './expande-bloco-home-2';

const Container = styled.div`
  position: relative; /* Adicione uma posição relativa ao Container */
`;

const Title = styled.h1`
  font-weight: bold;
  padding: 2em 2em 0 2em;
  color: white;
  font-size: 18px;  
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 5);

  .porto-sav {
    color: #01a1fd;
  }
`;

const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
  position: relative; /* Adicione uma posição relativa ao ImageContainer */
`;

const ImageWithTitle = styled.div`
  position: relative;
  background-image: url(${(props) => props.image});
  background-size: cover;
  width: 350px;
  height: 200px;
  color: white;
  text-align: left;
  padding: 0.5em;
  cursor: pointer;
  margin: 1em 0;
  &:hover {
    background-size: 120%;
  }
`;

const BlocoHome2 = () => {
  const [expandedContent, setExpandedContent] = useState(null);

  const expandContent = (title, text) => {
    setExpandedContent(
      <ExpandedFotoBlocoHome2
        title={title}
        text={text}
        onClose={() => setExpandedContent(null)}
      />
    );
  };

  return (
    <Container>
      <Title>
        A <span className='porto-sav'>Porto-SAV</span> é a sua parceira do dia a dia independente da sua necessidade!
      </Title>
      <ImageContainer>
        {expandedContent} {/* Renderize o conteiner aqui para que ele apareça por cima das imagens */}
        <ImageWithTitle
          image="images/performance.jpg"
          onClick={() => expandContent('Performance', 'Informações sobre Performance')}
        >
          Performance
        </ImageWithTitle>
        <ImageWithTitle
          image="images/mountainbike.jpg"
          onClick={() => expandContent('Mountain Bike', 'Informações sobre Mountain Bike')}
        >
          Mountain Bike
        </ImageWithTitle>
        <ImageWithTitle
          image="images/urbana.jpg"
          onClick={() => expandContent('Urbana', 'Informações sobre Urbana')}
        >
          Urbana
        </ImageWithTitle>
      </ImageContainer>
    </Container>
  );
};

export default BlocoHome2;


