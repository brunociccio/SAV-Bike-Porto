"use client"
import styled from 'styled-components';

const Paragrafo = styled.p`
    font-size: 14px;
    font-weight: 300;
    color: #000000;
    font-family: 'Poppins', sans-serif;
    margin: 1em 1em 1em 2em;

    @media (min-width: 768px) {
        font-size: 16px;
        margin-left: 4em;
        margin-right: 4em;
    }

    @media (min-width: 1366px) {
        font-size: 18px;
        margin-left: 4em;
        margin-right: 4em;
    }
`;

export default function MeuParagrafo({ text }) {
    return (<Paragrafo>{text}</Paragrafo>);
}