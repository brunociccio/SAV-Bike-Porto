"use client"
import styled from 'styled-components';

const CaixaDePergunta = styled.div`
background-color: #01a1fd;
color: #ffffff;
font-family: 'Poppins', sans-serif;
padding: 1.5em 1em;
text-align: center;
`;

const Titulo = styled.h2`
font-size: 36px;
font-weight: bold;
`;

const Texto = styled.p`
font-size: 20px;
font-weight: 300;
margin: 0.5em;
`;

const Input = styled.input`
font-size: 16px;
background-color: #01a1fd;
color: #ffffff;
font-family: 'Poppins', sans-serif;
padding: 0.5em 14em;
border-radius: 8px;
border-color: #ffffff;

::placeholder {
    color: #ffffff;
    opacity: 1;
}
`;

export default function MinhaCaixaDePergunta({ text }) {
    return (
        <CaixaDePergunta>
            <Titulo>Já sabe por onde começar?</Titulo>
            <Texto>Encontre em nossa plataforma o seguro de bicicleta ideal para você!</Texto>
            <Input type="search" placeholder="Qual a sua dúvida?" />
        </CaixaDePergunta>
    );
}