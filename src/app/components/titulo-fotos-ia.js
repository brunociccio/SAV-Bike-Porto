"use client"
import styled from 'styled-components';

const Titulo = styled.h1`
    font-size: 16px;
    color: #373737;
    margin: 1em;
    font-weight: 900;
    line-height: normal;
    text-align: center;
`;

export default function TituloFotoIA({ text }) {
    return (<Titulo>{text}</Titulo>);
}