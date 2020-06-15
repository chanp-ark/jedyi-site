import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

const SocialLinks = ({className}) => (
  <div className={className}>
    <a target='_blank' aria-label='Facebook' rel='noopener' href='https://www.facebook.com/jed.yi/'>
      <FontAwesomeIcon icon={['fab', 'facebook']} />
    </a>
    <a target='_blank' aria-label='Instagram' rel='noopener' href='https://www.instagram.com/jedidiahyi/'>
      <FontAwesomeIcon icon={['fab', 'instagram']} />
    </a>
    <a target='_blank' aria-label='Email' rel='noopener' href='mailto:daojedyi@gmail.com'>
      <FontAwesomeIcon icon='envelope' />
    </a>
    <a
      target='_blank'
      aria-label='Spotify'
      rel='noopener'
      href='https://open.spotify.com/album/2gMoI172mb5Tj5Bl2b7z5K?si=XhEyqJFcQe2BIJrnvoQaww'
    >
      <FontAwesomeIcon icon={['fab', 'spotify']} />
    </a>
    <a
      target='_blank'
      aria-label='YouTube'
      rel='noopener'
      href='https://www.youtube.com/channel/UC1_UEPAWL4agDK1OWYCxtqw?view_as=subscriber/'
    >
      <FontAwesomeIcon icon={['fab', 'youtube']} />
    </a>
  </div>
)

export default SocialLinks
