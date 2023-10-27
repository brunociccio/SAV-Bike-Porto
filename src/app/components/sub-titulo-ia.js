"use client"
import styled from 'styled-components';

const Subtitulo = styled.h2`
    font-size: 15px;
    color: #373737;
    margin: 1em 3em 1.5em 2em;
    font-weight: bold;
    `;

export function SubtituloFotoIA({ text }) {
    return <Subtitulo>{text}</Subtitulo>;
}