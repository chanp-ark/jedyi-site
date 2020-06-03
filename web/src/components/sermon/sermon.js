import React from 'react'
import styled from '@emotion/styled'

import Container from "../container"
import Title from '../title'

import './sermon.styles.css'

const VideoContainer = styled('div')`
  height: 50vh;
  width: 100%;
  margin: 2rem auto 0 auto;
  padding-top: 3rem;
  
  @media(max-width:660px) {
    height: 40vh;
    width: 80%;
  }
`

const LinkContainer = styled('div')`
  margin: 1rem auto;
  text-align: center;
  font-style: italic;
`

const SermonVideo = () => {
  return (
    <Container>
      <Title>Message</Title>
      <VideoContainer>
        <iframe
          width='80%'
          height='80%'
          src='https://www.youtube.com/embed/0ZAHleKuPBw'
          frameBorder='0'
          allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
          allowFullScreen
        />
        <LinkContainer>
          Hope in Troubled Times
        </LinkContainer>
      </VideoContainer>
    </Container>
  )
}

export default SermonVideo
