"use client"
import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import * as tmImage from "@teachablemachine/image"
import validImage from '../../images/correto.png'
import invalidImage from '../../images/errado.png'
import Image from 'next/image';

const BlocoFotoIAContainer = styled.div`
    display: flex;
    align-items: center;
    margin: 0.5em;
    padding: 1em;
    background-color: #ffffff;
    border-radius: 8px;
    border: 1px solid rgba(0, 0, 0, 0.20);
`;

const TextoContainer = styled.div`
    flex: 1;
    margin-right: 1em;
`;

const Subtitulo = styled.h2`
    font-size: 16px;
    color: #373737;
    margin: 0;
    font-weight: 700;
    line-height: normal;
    text-align: left;
    margin-bottom: 0.5em; 
`;

const TextoIA = styled.p`
    font-size: 14px;
    color: #373737;
    font-style: normal;
    font-weight: 300;
    text-align: left;
    white-space: pre-line; 
    margin-bottom: 0.5em; 
`;

const PalavraEmDestaque = styled.span`
    font-weight: 700;
    color: #01a1fd;
`;

const UploadInput = styled.input`
    display: none;
`;

const ImagemPrincipal = styled.img`
    max-width: 170px;
    width: 100%;
    height: auto;
    border-radius: 8px;
    border: 2px solid rgba(0, 0, 0, 0.20);
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.15);
`;

const ActionLink = styled.a`
    font-size: 14px;
    color: #0349D0;
    text-decoration: underline;
    font-style: normal;
    font-weight: 700;
    cursor: pointer;
    margin-bottom: 0.5em; 

    &:hover {
        text-decoration: underline;
    }
`;

function HighlightUppercaseWords({ text }) {
    const words = text.split(' ');

    return (
        <>
            {words.map((word, index) => (
                word === word.toUpperCase() ? (
                    <span key={index}>
                        <PalavraEmDestaque>{word}</PalavraEmDestaque>
                        {index !== words.length - 1 && ' '}
                    </span>
                ) : (
                    <span key={index}>
                        {word}
                        {index !== words.length - 1 && ' '}
                    </span>
                )
            ))}
        </>
    );
}

function UploadLink({ children, onChange }) {
    const fileInputRef = useRef(null);

    const handleInputChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            onChange(file);
        }
    };

    const handleClick = () => {
        fileInputRef.current.click();
    };

    return (
        <>
            <ActionLink onClick={handleClick}>{children}</ActionLink>
            <UploadInput
                ref={fileInputRef}
                type="file"
                accept="image/jpeg, image/png" // Aceita apenas imagens JPEG e PNG
                capture="camera" // Sugere abrir a câmera ao clicar
                onChange={handleInputChange}
            />
        </>
    );
}

const TextInvalid = styled.span`
    color: red;
    gap:6px;
    display: flex;
`;

const TextValid = styled.span`
    color: green;
    gap:6px;
    display: flex;
`;

const TextLoading = styled.span`
    color: grey;
`



export function BlocoFotoIAGeral({ subtitulo, texto, linkTexto, imagemSrc, imagemAlt, predictImage, modelToLoad }) {
    const [imagemUpload, setImagemUpload] = useState(null);
    const [model, setModel] = useState(null)
    const [verifyValid, setVerifyValid] = useState(false)
    const [isValid, setIsValid] = useState(false)

    const [isLoadingModels, setIsLoadingModels] = useState(false)
    const [isValidating, setIsValidating] = useState(false)

    useEffect(() => {
        setIsLoadingModels(true)
        const loadModel = async () => {
            if(!model) {

                const loadedModel = await tmImage.load(
                    modelToLoad.modelURL,
                    modelToLoad.metadataURL
                )

                console.log('loadedModel', loadedModel)

              setModel(loadedModel)
              setIsLoadingModels(false)
            }
        }
        try {
            loadModel()
        } catch (error) {
            setIsLoadingModels(false)
            alert('Não foi possível carregar os modelos')
        }
    }, [])


    const handleImagemChange = async (file) => {

        const reader = new FileReader();
        reader.onloadend = async () => {
            setIsValidating(true)
          const imageArray = {
            name: file.name,
            url: reader.result,
            predictions: [],
          };
          const isValid = await predictImage(imageArray, model);

          setVerifyValid(true)
          setIsValid(isValid)
          setIsValidating(false)
        };
        reader.readAsDataURL(file)
        setImagemUpload(file)
    };

    const handleCameraClick = async () => {
        try {
            const mediaStream = await navigator.mediaDevices.getUserMedia({ video: true });

            const video = document.createElement('video');
            document.body.appendChild(video);
            video.srcObject = mediaStream;
            await video.play();

            const canvas = document.createElement('canvas');
            canvas.width = video.videoWidth;
            canvas.height = video.videoHeight;
            const context = canvas.getContext('2d');

            video.addEventListener('canplay', () => {
                context.drawImage(video, 0, 0, canvas.width, canvas.height);
                mediaStream.getTracks().forEach((track) => track.stop());
                video.remove();
                canvas.toBlob((blob) => {
                    handleImagemChange(blob);
                }, 'image/jpeg');
            });
        } catch (error) {
            console.error('Erro ao acessar a câmera:', error);
        }
    };

    if(isLoadingModels) {
        return <h1>Carregando modelos</h1>
    }



    return (
        <BlocoFotoIAContainer>
            <TextoContainer>
                <Subtitulo>{subtitulo}</Subtitulo>
                <TextoIA>
                    <HighlightUppercaseWords text={texto} />
                </TextoIA>
                {linkTexto && !isValidating && !verifyValid && (
                    <UploadLink onChange={handleImagemChange}>{linkTexto}</UploadLink>
                )}
                {linkTexto && !isValidating && verifyValid && (
                    <UploadLink onChange={handleImagemChange}>{isValid ? <TextValid>Foto Aprovada <Image src={validImage} width={20} /></TextValid> : <TextInvalid>Foto inválida <Image src={invalidImage} width={20} /></TextInvalid>}</UploadLink>
                )}
                {linkTexto && isValidating && (
                    <UploadLink onChange={handleImagemChange}><TextLoading>Validando foto  </TextLoading></UploadLink>
                )}
            </TextoContainer>
            {imagemSrc && imagemAlt && (
                <>
                    <ImagemPrincipal
                        src={imagemUpload ? URL.createObjectURL(imagemUpload) : imagemSrc}
                        alt={imagemAlt}
                    />
                </>
            )}
        </BlocoFotoIAContainer>
    );
}
