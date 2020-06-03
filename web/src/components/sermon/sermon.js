import React from 'react'
import styled from '@emotion/styled'

import Title from '../title'

import './sermon.styles.css'

const MessageContainer = styled('div')`
  box-sizing: border-box;
  max-width: 820px;
  padding: 1.5em;
  margin: 0 auto;

  @media (--media-min-small) {
    padding: 2em 0;
  }
`

const VideoContainer = styled('div')`
  height: 50vh;
  width: 100%;
  margin: 2rem auto;
  
  @media(max-width:660px) {
    height: 35vh;
    width: 100%;
    margin: 2rem auto;
  }
`

const LinkContainer = styled('div')`
  margin: 1rem auto;
  text-align: center;
  font-style: italic;
  
`

const SermonVideo = () => {
  return (
    <MessageContainer>
      <Title>Message</Title>
      <VideoContainer>
        <iframe
          width='100%'
          height='100%'
          src='https://www.youtube.com/embed/0ZAHleKuPBw'
          frameBorder='0'
          allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
          allowFullScreen
        />
        <LinkContainer>
          Hope in Troubled Times
        </LinkContainer>
      </VideoContainer>
    </MessageContainer>
  )
}

export default SermonVideo
