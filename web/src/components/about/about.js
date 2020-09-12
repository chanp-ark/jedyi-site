import React, { useState, useEffect } from 'react'
import styled from '@emotion/styled'
import Container from '../../components/container'
import Title from '../titles/title'
import { mapEdgesToNodes } from '../../lib/helpers'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import './about.styles.css'

const JedImage = styled('div')`
  background-position: top 30% center;
  background-size: cover;
  width: 50vw;
  margin: 0;
  margin-right: 1em;
  
  @media (max-width: 985px) {
    height: 50vh;
    width: 75%;
    margin: 0;
    margin-bottom: 1em;
  
  @media (max-width: 650px) {
    height: 50vh;
    width: 100%;
    margin: 0;
    margin-bottom: 1em;
  }
  
  @media (max-width: 500px) {
    height: 40vh;
    width: 100%;
    margin: 0;
    margin-bottom: 1em;
  }
`

const EmptyBox = styled('div')`
  width: 100%;
  margin: 50% 0;

}`

const Biography = styled('div')`
  font-family: 'Cormorant', serif;
  font-weight: 500;
  font-size: 1.1rem;
  height: 100%;
  width: 60vw;
  margin: 0;
  display: flex;
  flex-direction: column;
  justify-content: space around;
  border: 1px solid rgba(0, 0, 0, 0.4);
  background-color: #fff;
  box-sizing: border-box;
  padding: 10px;

  div {
    margin-bottom: 8px;
  }

  @media (max-width: 985px) {
    height: 100%;
    width: 80%;
  }

  @media (max-width: 650px) {
    height: 100%;
    width: 100%;
  }
`

const AboutContainer = styled('div')`
  display: flex;
  justify-content: space-around;
  
  @media (max-width: 985px) {
    display: flex;
    flex-wrap: wrap
`

const AboutMe = ({ content, pictures }) => {
  const separateContent = content.split('---').map((paragraph, i) => <div key={i}>{paragraph}</div>)
  const allPictures = mapEdgesToNodes(pictures).sort((a, b) => a.name - b.name)
  const [track, setTrack] = useState(0)

  const handleClickRight = e => {
    e.preventDefault()
    if (track === allPictures.length - 1) {
      setTrack(0)
    } else {
      setTrack(track + 1)
    }
  }

  const handleClickLeft = e => {
    e.preventDefault()
    if (track === 0) {
      setTrack(allPictures.length - 1)
    } else {
      setTrack(track - 1)
    }
  }

  return (
    <>
      <div id='about' />
      <Title>Jed Yi</Title>
      <AboutContainer>
        {allPictures.map((picture, i) => {
          const picURL = picture.image.asset.url
          if (track === i) {
            return (
              <JedImage key={i} style={{ backgroundImage: `url(${picURL})` }}>
                <EmptyBox>
                  <div className='about-pics'>
                    <div
                      disabled={i === 0}
                      onClick={handleClickLeft}
                      style={{ fontSize: '2rem', padding: '0.1em' }}
                    >
                      <FontAwesomeIcon icon='chevron-left' />
                    </div>
                    <div
                      disabled={i === allPictures.length - 1}
                      onClick={handleClickRight}
                      style={{ fontSize: '2rem', padding: '0.1em' }}
                    >
                      <FontAwesomeIcon icon='chevron-right' />
                    </div>
                  </div>
                </EmptyBox>
              </JedImage>
            )
          }
        })}

        <Biography>{separateContent}</Biography>
      </AboutContainer>
    </>
  )
}

export default AboutMe
