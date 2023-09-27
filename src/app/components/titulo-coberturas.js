"use client"
import React from 'react';
import styled from 'styled-components';

const Titulo = styled.h1`
    font-size: 20px;
    color: #ffffff;
    margin: 2em 0 1em 1.5em;
    font-family: 'Poppins', sans-serif;
    font-weight: bold;
`;

export default function TituloCoberturas({ tituloText }) {
    // Divide o texto em três partes: antes, durante e depois da palavra "importante"
    const [antes, durante, depois] = tituloText.split('importante!');

    return (
        <Titulo>
            {antes}
            <u>importante!</u>
            {depois}
        </Titulo>
    );
}
