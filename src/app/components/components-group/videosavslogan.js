"use client"
import React from 'react';
import styled from 'styled-components';

const VideoWrapper = styled.div`
max-width: 500px;
width: 100%;
height: auto;
padding: 1em;
border: none;
background-color: transparent;
    `;

    function VideoSavSlogan() {
        return (
            <VideoWrapper>
                <video controls width="350" autoPlay loop muted>
                <source
                    src="/videos/slogan-porto-sav.mp4"
                    type="video/mp4"
                />
                Seu navegador não suporta o elemento de vídeo.
                </video>
            </VideoWrapper>
            );
        }

export default VideoSavSlogan;
