"use client"
import React from 'react';
import styled from 'styled-components';

const Titulo = styled.h1`
    font-size: 16px;
    color: #ffffff;
    font-weight: 500;
    line-height: normal;

    margin: 1em 0 2em 2em;
    z-index: 1;
    position: relative;

    &::after {
        content: "";
        display: block;
        width: calc(100% - 0.1em); /* Define o tamanho da linha */
        height: 0.5px; /* Altura da linha */
        background-color: #ffffff; /* Cor da linha */
        position: absolute;
        bottom: -1px; /* Posição da linha abaixo do texto */
        left: 0;
    }
`;

export function SubtituloCoberturas({ tituloText }) {
    return (
        <div style={{ position: 'relative' }}>
            <Titulo>{tituloText}</Titulo>
        </div>
    );
}
