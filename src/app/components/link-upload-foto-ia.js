"use client"
import styled from 'styled-components';

const Link = styled.a`
    font-size: 14px;
    color: #0349D0;
    text-decoration: underline;
    font-style: normal;
    font-weight: 700;
    cursor: pointer;

    &:hover {
        text-decoration: underline;
    }
`;

export function LinkFotoIA({ href, text }) {
    return (
        <Link href={href} target="_blank" rel="noopener noreferrer">
            {text}
        </Link>
    );
}

