"use client"
import styled from 'styled-components';

const TextoIA = styled.p`
    font-size: 14px;
    color: #373737;
    font-style: normal;
    font-weight: 300;
    text-align: left;
`;

const PalavraEmDestaque = styled.span`
    font-weight: 700;
    color: #01a1fd;
`;

export function TextoFotoIA({ text }) {
    const lines = text.split('<br />');
    
    return (
        <>
            {lines.map((line, index) => (
                <TextoIA key={index}>
                    {line.includes('SELIM') ? (
                        <>
                            {line.split('SELIM')[0]}
                            <PalavraEmDestaque>SELIM</PalavraEmDestaque>
                            {line.split('SELIM')[1]}
                        </>
                    ) : line}
                </TextoIA>
            ))}
        </>
    );
}






