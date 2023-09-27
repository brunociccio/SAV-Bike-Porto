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

    &:active {
        background: #01a1fd; /* Altere para a cor desejada quando o botão for clicado */
    }

    @media (min-width: 768px) {
        font-size: 18px;
    }

    @media (min-width: 1024px) {
        font-size: 20px;
    }
`;

const ButtonLink = styled.a`
    text-decoration: none;
    color: inherit;
`;

export default function MeuBotao({ text, href }) {
    return (
        <Link href={href}>
            <ButtonLink>
                <Button>
                    {text}
                </Button>
            </ButtonLink>
        </Link>
    );
}

