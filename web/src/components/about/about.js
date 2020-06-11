import React from 'react'
import styled from '@emotion/styled'
import Container from '../../components/container'
import Title from '../titles/title'

import './about.styles.css'

const JedImage = styled('div')`
  background-image: url('/images/jed-profile-about.jpg');
  background-position: top 40% center;
  background-size: cover;
  width: 35vw;
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
  content: '';
  width: 100%;
  margin: 0;
  padding: 0;

}`

const Biography = styled('div')`
  @import url('https://fonts.googleapis.com/css2?family=Cormorant:wght@300;400;500;600&display=swap');
  font-family: 'Playfair Display', serif;
  font-family: 'Cormorant', serif;
  font-weight: 500;
  font-size: 1rem;
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

const AboutMe = ({content}) => {
  const separateContent = content.split('---').map((paragraph, i) => <div key={i}>{paragraph}</div>)
  return (
    <>
      <div id='about' />
      <Title>Jed Yi</Title>
      <Container>
        <AboutContainer>
          <JedImage>
            <EmptyBox />
          </JedImage>
          <Biography>{separateContent}</Biography>
        </AboutContainer>
      </Container>
    </>
  )
}

export default AboutMe
