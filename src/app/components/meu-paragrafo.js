"use client"
import styled from 'styled-components';

const Paragrafo = styled.p`
    font-size: 16px;
    font-weight: 300;
    margin: 1em 4em 1em 2em;
    color: #000000;
`;

export default function MeuParagrafo({ text }) {
    return (<Paragrafo>{text}</Paragrafo>);
}