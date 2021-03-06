import React from 'react'
import styled from '@emotion/styled'

import Title from '../titles/title'

import './sermon.styles.css'

const MessageContainer = styled('div')`
  box-sizing: border-box;
  max-width: 820px;
  padding: 1.5em 0;
  margin: 0 auto;

  @media (--media-min-small) {
    padding: 0;
  }
`

const VideoContainer = styled('div')`
  height: 50vh;
  width: 100%;
  padding: 1em 0;
  margin: 0 auto;

  @media (max-width: 660px) {
    height: 35vh;
    width: 100%;
    margin: 0 auto;
    padding: 0;
  }
`

const SermonVideo = () => {
  return (
    <>
      <div id='sermon' />
      <Title>Message</Title>
      <MessageContainer>
        <VideoContainer>
          <iframe className='lazyload' width='100%' height='100%' data-src="https://www.youtube.com/embed/ON_uxib5qeU" title="Forgiveness Sermon" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
        </VideoContainer>
      </MessageContainer>
    </>
  )
}

export default SermonVideo
