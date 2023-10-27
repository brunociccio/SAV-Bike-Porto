import React, { useEffect } from 'react';
import styled from 'styled-components';
import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';

const CarouselContainer = styled.div`
  position: relative;
  width: 100%;
  z-index: 1;
`;

const CarouselNavigation = styled.div`
  position: absolute;
  top: 40%;
  left: 0;
  right: 0;
  transform: translateY(-50%);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1em;
  z-index: 2;
`;

const CarouselButton = styled.span`
  width: 40px;
  height: 40px;
  background-repeat: no-repeat;
  background-size: cover;
  cursor: pointer;
  transition: opacity 0.3s ease;
  background-position: center;
  z-index: 3;

  &:hover {
    opacity: 0.8;
  }
`;

const CarouselWrapper = styled.div`
  display: flex;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
  -webkit-overflow-scrolling: touch;
  padding-bottom: 4em;
  margin-left: 2em;
  margin-top: 2em;
`;

const CarouselItem = styled.div`
  scroll-snap-align: start;
  text-align: center;
  box-sizing: border-box;
  background-color: #f2f2f2;
  border-radius: 8px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1em;
  min-width: 200px; /* Defina a largura desejada para todos os itens */
  height: 300px; /* Defina a altura desejada para todos os itens */

  img {
    max-width: 100%;
    height: auto;
    margin-bottom: 0.5em;
    object-fit: contain;
  }

  p {
    text-align: center;
  }
`;

const items = [
  {
    id: 1,
    imageUrl: 'images/acidente.png',
    text: 'Acidentes pessoais individuais',
  },
  {
    id: 2,
    imageUrl: 'images/multidao.png',
    text: 'Danos a terceiros',
  },
  {
    id: 3,
    imageUrl: 'images/roubo.png',
    text: 'Roubo',
  },
  {
    id: 4,
    imageUrl: 'images/comprar.png',
    text: 'Danos na tentativa de Roubo',
  },
  {
    id: 5,
    imageUrl: 'images/bike-eletrica.png',
    text: 'Danos causados por curto circuito na bateria de bikes elétricas',
  },
  {
    id: 6,
    imageUrl: 'images/atencao.png',
    text: 'Danos à bike',
  },
  {
    id: 7,
    imageUrl: 'images/transporte.png',
    text: 'Danos ocorridos no transporte da bike',
  },
  {
    id: 8,
    imageUrl: 'images/aviao.png',
    text: 'Extravio em viagens aéreas e/ou rodoviárias',
  },
  {
    id: 9,
    imageUrl: 'images/globo-terrestre.png',
    text: 'Extensão das coberturas em solo internacional',
  },
];

const Carrossel = () => {
  useEffect(() => {
    const swiper = new Swiper('.swiper-container', {
      slidesPerView: 2,
      spaceBetween: 20,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });

    const prevButton = document.querySelector('.carousel-prev');
    const nextButton = document.querySelector('.carousel-next');

    prevButton.addEventListener('click', function () {
      swiper.slidePrev();
    });

    nextButton.addEventListener('click', function () {
      swiper.slideNext();
    });
  }, []);

  return (
    <CarouselContainer>
      <CarouselNavigation>
        <CarouselButton className="carousel-prev">
        <img src="images/setaesquerda.png" alt="Next" />
        </CarouselButton>
        <CarouselButton className="carousel-next">
        <img src="images/setadireita.png" alt="Next" />
        </CarouselButton>
      </CarouselNavigation>
      <CarouselWrapper className="swiper-container">
        <div className="swiper-wrapper">
          {items.map((item) => (
            <CarouselItem key={item.id} className="swiper-slide">
              <img src={item.imageUrl} alt={`Item ${item.id}`} />
              <p>{item.text}</p>
            </CarouselItem>
          ))}
        </div>
      </CarouselWrapper>
    </CarouselContainer>
  );
};

export default Carrossel;




