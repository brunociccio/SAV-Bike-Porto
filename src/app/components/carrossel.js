import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styled from 'styled-components';

const CarouselContainer = styled.div`
  width: 100%;
  margin: 1em 0 2em 0;
`;

const CarouselWrapper = styled.div`
  margin-left: 3em;
`;

const CarouselItem = styled.div`
  background: #fff;
  border-radius: 10px;
  padding: 1em;
  text-align: center;
  margin-right: 10px;
`;

const ItemImage = styled.img`
  max-width: 150px;
  height: auto;
  border-radius: 10px;
`;

const ItemText = styled.p`
  margin-top: 1em;
`;

const PrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ top: '120px', left: '-20px' }}
      onClick={onClick}
    >
      <img src="images/setaesquerda.png" alt="Previous" />
    </div>
  );
};

const NextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ top:'120px', right: '10px' }}
      onClick={onClick}
    >
      <img src="images/setadireita.png" alt="Next" />
    </div>
  );
};

const settings = {
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 2,
  slidesToScroll: 1,
  centerPadding: '20px',
  arrows: true,
  prevArrow: <PrevArrow />,
  nextArrow: <NextArrow />,
};

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
    imageUrl: 'images/multidao.png',
    text: 'Texto do item 3',
  },
  {
    id: 4,
    imageUrl: 'images/multidao.png',
    text: 'Texto do item 4',
  },
  {
    id: 5,
    imageUrl: 'images/multidao.png',
    text: 'Texto do item 5',
  },
  {
    id: 6,
    imageUrl: 'images/multidao.png',
    text: 'Texto do item 6',
  },
  {
    id: 7,
    imageUrl: 'images/multidao.png',
    text: 'Texto do item 7',
  },
  {
    id: 8,
    imageUrl: 'images/multidao.png',
    text: 'Texto do item 8',
  },
  {
    id: 9,
    imageUrl: 'images/multidao.png',
    text: 'Texto do item 9',
  },
];

const Carrossel = () => {
  return (
    <CarouselContainer>
      <CarouselWrapper>
        <Slider {...settings}>
          {items.map((item) => (
            <CarouselItem key={item.id} style={{margin : '20px'}}>
              <ItemImage src={item.imageUrl} alt={`Item ${item.id}`} />
              <ItemText>{item.text}</ItemText>
            </CarouselItem>
          ))}
        </Slider>
      </CarouselWrapper>
    </CarouselContainer>
  );
};

export default Carrossel;



