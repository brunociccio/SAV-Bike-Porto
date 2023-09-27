"use client"
import React from 'react';
import styled from 'styled-components';

const Paragrafo = styled.p`
    font-size: 16px;
    margin: 2em;
    color: ${props => props.corTexto || '#373737'}; // Define a cor do texto com base na prop corTexto
`;

const TextoDestaque = styled.span`  
    font-weight: ${props => props.negrito ? '700' : 'normal'};
    color: ${props => props.cor};
    font-size: ${props => props.tamanho};
`;

function ParagrafoHome({ texto, palavrasDestaque, corTexto }) {
    const partesTexto = texto.split(' ');

    return (
        <Paragrafo corTexto={corTexto}>
            {partesTexto.map((parte, index) => {
                const palavraDestaque = palavrasDestaque.find(item => item.palavra === parte);
                if (palavraDestaque) {
                    return (
                        <TextoDestaque
                            key={index}
                            cor={palavraDestaque.cor}
                            negrito={palavraDestaque.negrito}
                            tamanho={palavraDestaque.tamanho}
                        >
                            {parte}{' '}
                        </TextoDestaque>
                    );
                }
                return <span key={index}>{parte} </span>;
            })}
        </Paragrafo>
    );
}

export default ParagrafoHome;




