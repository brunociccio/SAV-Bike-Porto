"use client"
import React from 'react';
import styled from 'styled-components';

const Titulo = styled.h1`
    font-size: 30px;
    color: #373737;
    font-weight: 700;
    line-height: normal;
    text-align: center;
    margin: 1em;
    z-index: 1;
    position: relative;

    @media (min-width: 768px) {
        font-size: 24px;
    }

    @media (min-width: 1366px) {
        font-size: 28px;
    }
`;

const TracoAzul = styled.img`
    width: 100%;
    max-width: 500px;
    height: 30px;
    background: transparent; /* Definimos o fundo da imagem como transparente */
    position: absolute;
    bottom: -16px; /* Ajustamos a posição vertical para colocar a imagem abaixo do título */
    left: 50%; /* Centralizamos horizontalmente a imagem em relação ao container */
    transform: translateX(-50%); /* Ajustamos a posição horizontal */
    z-index: 0;

    @media (min-width: 768px) {
        max-width: 600px;
    }

    @media (min-width: 1366px) {
        max-width: 800px;
    }
`;

export function TituloHome({ tituloText, tracoSrc, tracoAlt }) {
    return (
        <div style={{ position: 'relative' }}>
            <Titulo>{tituloText}</Titulo>
            <TracoAzul src={tracoSrc} alt={tracoAlt} />
        </div>
    );
}
