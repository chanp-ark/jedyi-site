import React from 'react'
import Title from '../components/titles/title'

const Spotify = () => (
  <>
    <Title>Spotify</Title>
    <iframe
      className='lazyload'
      data-src='https://open.spotify.com/embed/playlist/1BlAIlPrbmyw2CzB8AvhSn'
      src=''
      title='Early Life'
      width='100%'
      height='380'
      frameBorder='0'
      allowTransparency='true'
      allow='encrypted-media'
    />
  </>
)

export default Spotify
