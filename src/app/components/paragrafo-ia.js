"use client"
import styled from 'styled-components';

const Paragrafo = styled.p`
    font-size: 14px;
    color: #373737;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    margin: 0 1.5em;

    @media (min-width: 768px) {
        font-size: 18px;
    }

    @media (min-width: 1024px) {
        font-size: 22px;
    }
`;

export function ParagrafoFotoIA({ text }) {
    const lines = text.split('<br />');
    return (
    <>
        {lines.map((line, index) => (
        <Paragrafo key={index}>
            {line}
            <br />
        </Paragrafo>
        ))}
    </>
    );
}
