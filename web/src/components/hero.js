import React from 'react'
import styled from '@emotion/styled'
import scrollTo from 'gatsby-plugin-smoothscroll'

const ImageBackground = styled('div')`
  background-image: url('/images/brittney-butler.jpeg');
  background-position: top 10% center;
  background-size: cover;
  height: 100vh;

  + * {
    margin-top: 0;
  }
`

const ArrowContainer = styled('button')`
  background-color: transparent;
  border: none;
  font-size: 2rem;
  padding: 0;
  margin: 0;
  transition: all 100ms ease-in-out;
  transform-origin: top;
  cursor: pointer;

  :focus {
    outline: none;
  }

  :hover {
    transform: scale(1.2);
    color: white;
  }
`

const Title = styled('p')`
  margin: 0;
  margin-bottom: 1rem;
  padding: 0;
  font-size: 2.4rem;

  @media (max-width: 500px) {
    padding: 2.5rem
  }
`

const TextBox = styled('div')`
  background-image: linear-gradient(to bottom, #f3f8fc 1rem, #ddbbff00);
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  justify-content: space-around;
  margin: 0 auto;
  text-align: center;

  div {
    padding-bottom: 25px;
  }
  h1 {
    text-shadow: 1px 1px 3px #eeddff66;
    font-size: 2.4rem;
  }

  a {
    color: #222;
    margin-top: 0;
    text-decoration: none;
    font-weight: 700;
    font-size: 30px;
  }
`

const Hero = () => {
  return (
    <ImageBackground id='home'>
      <TextBox>
        <div>
          <Title>Till Christ is Formed in Us</Title>
          <ArrowContainer aria-label='scroll-down' onClick={() => scrollTo('#about')}>
            &darr;
          </ArrowContainer>
        </div>
      </TextBox>
    </ImageBackground>
  )
}

export default Hero
