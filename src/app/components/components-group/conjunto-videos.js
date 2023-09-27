"use client"
// components/components-group/conjunto-videos.js
import React from 'react';
import styled from 'styled-components';
import VideoSavSlogan from './videosavslogan';
import VideoSavIA from './videosavia';
    const VideosSloganWrapper = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #ffffff;

    @media (min-width: 768px) {
        flex-direction: row;
    }
    `;

    function ConjuntoVideos() {
    return (
        <VideosSloganWrapper>
        <VideoSavSlogan />
        <VideoSavIA />
        </VideosSloganWrapper>
    );
    }

export default ConjuntoVideos;

