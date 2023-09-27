"use client"
import React from 'react';
import styled from 'styled-components';

const VideoWrapper = styled.div`
max-width: 350px;
width: 100%;
height: auto;
margin: 1.5em 1.5em 1em 1.5em;
border: none;
background-color: transparent;
display: flex;
justify-content: center;
align-items: center;
border-radius: 12px;
border: 1px solid rgba(0, 0, 0, 0.20);
box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.15);
`;

    function VideoSavIA() {
        return (
            <VideoWrapper>
                <video  autoPlay loop muted>
                <source
                    src="/videos/slogan-ia-sav.mp4"
                    type="video/mp4"
                />
                Seu navegador não suporta o elemento de vídeo.
                </video>
            </VideoWrapper>
            );
        }
export default VideoSavIA;
