"use client"
import styled from 'styled-components';

const Subtitulo = styled.h2`
    font-size: 16px;
    color: #373737;
    margin: 1em;
    font-weight: 700;
    line-height: normal;
    text-align: center;
    `;

export function SubtituloFotoIA({ text }) {
    return <Subtitulo>{text}</Subtitulo>;
}