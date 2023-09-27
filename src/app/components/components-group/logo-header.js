"use client"
import React from 'react';
import styled from 'styled-components';

// Estilos para o container principal do LogoHeader
const Container = styled.div`
    display: flex;
    align-items: center; 
    justify-content: space-between; 
    padding: 0.7em 1em; 
    background-color: #ffffff;
`;

// Estilos para a imagem do LogoPorto
const ImagemPorto = styled.img`
    width: 100%;
    max-width: 200px;
    height: auto;

    @media (min-width: 768px) {
        max-width: 250px;
    }

    @media (min-width: 1366px) {
        max-width: 300px;
    }
`;

// Componente para o LogoPorto
export function LogoPorto({ src, alt }) {
    return <ImagemPorto src={src} alt={alt} />;
}

// Estilos para a imagem do LogoSav
const ImagemSav = styled.img`
    width: 100%;
    max-width: 75px;
    height: auto;

    @media (min-width: 768px) {
        max-width: 125px;
    }

    @media (min-width: 1366px) {
        max-width: 150px;
    }
`;

// Componente para o LogoSav
export function LogoSav({ src, alt }) {
    return <ImagemSav src={src} alt={alt} />;
}

// Componente LogoHeader que compõe LogoPorto e LogoSav
export function LogoHeader({ srcPorto, altPorto, srcSav, altSav }) {
    return (
        <Container>
            <LogoPorto src={srcPorto} alt={altPorto} />
            <LogoSav src={srcSav} alt={altSav} />
        </Container>
    );
}
