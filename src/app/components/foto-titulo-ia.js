"use client"
import styled from 'styled-components';

const ImagemSecundaria = styled.img`
    max-width: 80%;
    height: auto;
`;

export function ImagemSecundariaFotoIA({ src, alt }) {
    return <ImagemSecundaria src={src} alt={alt} />;
}