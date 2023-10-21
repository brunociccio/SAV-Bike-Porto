"use client"
import styled from 'styled-components';

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

export default function BotaoCobertura({ text, href, disabled }) {

  const handleClick = (event) => {
      if (disabled) {
          event.preventDefault();
          return;
      }
      window.location.href = href;
  }

  return (
      <Button disabled={disabled} onClick={handleClick}>
          {text}
      </Button>
  );
}
