import React from 'react';
import styled from 'styled-components';

const Titulo = styled.h1`
    font-size: 18px;
    color: #373737;
    font-weight: bold;
    line-height: normal;
    text-align: center;
    margin: 1em;
    z-index: 1;
    position: relative;
`;

const TracoAzul = styled.img`
    width: 100%;
    max-width: 500px;
    height: 30px;
    background: transparent;
    position: absolute;
    top: 10px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 0;
`;

const Paragrafo = styled.p`
    font-size: 16px;
    margin: 0 1em 1em 1em;
    color: #373737;
`;

export function TituloTracoAzul({ tituloText, tracoSrc, tracoAlt, paragrafoText }) {
    return (
        <div style={{ position: 'relative' }}>
            <Titulo>{tituloText}</Titulo>
            <TracoAzul src={tracoSrc} alt={tracoAlt} />
            <Paragrafo>{paragrafoText}</Paragrafo>
        </div>
    );
}

