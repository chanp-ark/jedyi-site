import React from 'react'

import Title from '../title'

import './sermon.styles.css'

const SermonVideo = () => {
  return (
    <>
      <Title>Message</Title>
      <iframe
        width='560'
        height='315'
        src='https://www.youtube.com/embed/0ZAHleKuPBw'
        frameBorder='0'
        allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
        allowFullScreen
      />
    </>
  )
}

export default SermonVideo
