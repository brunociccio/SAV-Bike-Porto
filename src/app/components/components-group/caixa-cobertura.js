"use client"
    import React, { useState } from 'react';
    import styled from 'styled-components';

    const Container = styled.div`
    display: flex;
    align-items: center;
    background-color: ${props => props.extended ? '#0046c0' : '#01a1fd'};
    color: ${props => props.extended ? 'white' : 'white'};
    font-weight: ${props => props.extended ? '500' : '300'};
    padding: 10px;
    cursor: pointer;
    transition: background-color 0.3s ease-in-out, transform 0.3s ease-in-out;
    border-radius: ${props => props.extended ? '10px' : '10px'};
    margin-left: 50px; /* Ajuste o valor conforme necessário */
    transform: translateX(${props => props.extended ? '0' : '0'});
    margin-bottom: 0.5em;
    opacity: ${props => props.opacity};
    `;

    const Texto = styled.p`
    margin-left: 1em;
    flex: 1; /* Permite que o texto ocupe todo o espaço disponível */
    `;

    const Botoes = styled.div`
    display: flex;
    align-items: center;
    margin-left: 10px; /* Ajuste o valor conforme necessário */
    `;

    const Botao = styled.button`
    margin-right: 10px;
    background-color: transparent;
    border: none;
    cursor: pointer;
    color: ${props => props.corBotao || 'white'};
    font-size: 24px; /* Ajuste o tamanho da fonte conforme necessário */
    &:hover {
    color: ${props => props.hoverColor || 'white'}; /* Define a cor do hover */
    }
    `;

    const CaixaTexto = ({ texto }) => {
    const [extended, setExtended] = useState(false);
    const [corBotaoX, setCorBotaoX] = useState('white');
    const [corBotaoCorreto, setCorBotaoCorreto] = useState('white');

    const handleSelecionar = (selecionado) => {
        if (selecionado) {
        setCorBotaoCorreto('green');
        setCorBotaoX('white');
        } else {
        setCorBotaoX('red');
        setCorBotaoCorreto('white');
        }
    };

    const handleClick = () => {
        setExtended(true);
    };

    const handleFechar = () => {
        setExtended(false);
    };

    const handleBotaoXClick = () => {
        handleSelecionar(false);
        setTimeout(handleFechar, 1500); // Define um atraso de 1 segundo antes de fechar a caixa
    };

    const opacidade = extended ? 0.9 : 0.7;

    return (
        <Container
        extended={extended}
        onClick={handleClick}
        opacity={opacidade}
        >
        <Texto>{texto}</Texto>
        {extended && (
            <Botoes>
            <Botao
                onClick={handleBotaoXClick}
                corBotao={corBotaoX}
                hoverColor="red" // Define a cor do hover para vermelho
            >
                ✖
            </Botao>
            <Botao
                onClick={() => handleSelecionar(true)}
                corBotao={corBotaoCorreto}
                hoverColor="green" // Define a cor do hover para verde
            >
                ✔
            </Botao>
            </Botoes>
        )}
        </Container>
    );
    };

    export default CaixaTexto;













