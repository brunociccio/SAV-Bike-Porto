"use client"
import styled from 'styled-components';
import Link from 'next/link';

const Button = styled.button`
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
        background: #ccc; // Altere para a cor desejada quando o botão estiver desabilitado
        pointer-events: none;
    }
`;

const ButtonLink = styled.a`
    text-decoration: none;
    color: inherit;
`;

export default function MeuBotao({ text, href, disabled }) {
    return (
        <Link href={href}>
            <ButtonLink>
                <Button disabled={disabled}>
                    {text}
                </Button>
            </ButtonLink>
        </Link>
    );
}


