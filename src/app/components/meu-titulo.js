"use client"
import styled from 'styled-components';

const Titulo = styled.h1`
    font-size: 26px;
    color: #000000;
    margin: 1em;
    font-family: 'Poppins', sans-serif;
    font-weight: bold;
`;

export default function MeuTitulo({ text }) {
    return (<Titulo>{text}</Titulo>);
}