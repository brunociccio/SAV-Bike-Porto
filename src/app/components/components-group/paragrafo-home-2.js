"use client"
import styled from 'styled-components';

const Paragrafo = styled.p`
    font-size: 14px;
    font-weight: bold;
    color: #0046c0;
    font-family: 'Poppins', sans-serif;
    text-align: center;
    padding: 0 0 3em 0;
`;

export default function ParagrafoHome2({ text }) {
    return (<Paragrafo>{text}</Paragrafo>);
}