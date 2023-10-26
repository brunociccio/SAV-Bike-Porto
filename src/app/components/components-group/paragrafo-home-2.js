"use client"
import styled from 'styled-components';

const Paragrafo = styled.p`
    font-size: 14px;
    font-weight: bold;
    color: #0046c0;
    font-family: 'Poppins', sans-serif;
    text-align: center;
    padding: 0 0 4em 0;

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

export default function ParagrafoHome2({ text }) {
    return (<Paragrafo>{text}</Paragrafo>);
}