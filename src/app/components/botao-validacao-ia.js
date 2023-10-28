import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const SendButton = styled.button`
    background: #0046c0;
    color: #ffffff;
    text-align: center;
    padding: 0.8em 2em;
    margin: 2.5em auto 1em auto;
    font-size: 16px;
    border-radius: 10px;
    border-color: #0046c0;
    cursor: pointer;
    font-family: 'Poppins', sans-serif;
    display: block;

    &:disabled {
        background: #ccc;
        pointer-events: none;
    }
`;

function EnviarFotosButton({ onClick, allPhotosValidated }) {
    const [isClickable, setIsClickable] = useState(false);

    useEffect(() => {
        if (allPhotosValidated) {
            setIsClickable(true);
        } else {
            setIsClickable(false);
        }
    }, [allPhotosValidated]);

    return (
        <SendButton
            onClick={onClick}
            disabled={!isClickable}
        >
            Enviar Fotos
        </SendButton>
    );
}

export default EnviarFotosButton;
