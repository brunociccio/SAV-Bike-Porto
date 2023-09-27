"use client"
import styled from 'styled-components';

const ImagemPrincipal = styled.img`
    max-width: 50%;
    height: auto;
    border-radius: 8px;
    border: 2px solid rgba(0, 0, 0, 0.20);
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.15);
`;

export function ImagemPrincipalFotoIA({ src, alt }) {
    return <ImagemPrincipal src={src} alt={alt} />;
}

