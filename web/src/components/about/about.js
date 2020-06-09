import React from 'react'
import styled from '@emotion/styled'
import Container from '../../components/container'
import Title from '../titles/title'
import './about.styles.css'

const JedImage = styled('div')`
  background-image: url('/images/jed-profile-about.jpg');
  background-position: top 40% center;
  background-size: cover;
  height: 61vh;
  max-height: 565px;
  width: 55vh;
  min-width: 200px;
  max-width: 400px;
  margin: 1rem;
  
  @media (max-width: 950px) {
    margin: 0 1rem 1rem 1rem;
    height: 35vh;
    width: 32vh;
  }
`

const Biography = styled('div')`
  height: 61vh;
  width: 55vh;
  max-height: 565px;
  overflow-y: scroll;
  overflow-x: hidden;
  min-width: 200px;
  max-width: 390px;
  margin: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space around;

  div {
    margin-bottom: 8px;
  }

  @media (max-width: 950px) {
    margin: 0 1rem 1rem 1rem;
    height: 35vh;
    width: 32vh;
    font-size: 14px;
  }
`

const AboutContainer = styled('div')`
  display: flex;
  justify-content: space-around;

  @media (max-width: 950px) {
    flex-wrap: wrap;
    justify-content: space-around;
  }
`

const AboutMe = ({content})=> {
  console.log(content)
  const separateContent = content.split('---').map(paragraph => <div>{paragraph}</div>)
  return (
    <>
      <div id='about' />
      <Title>Jed Yi</Title>
      <Container>
        <AboutContainer>
          <JedImage />
          <Biography>
            {separateContent}
          </Biography>
        </AboutContainer>
      </Container>
    </>
  )
}

export default AboutMe
