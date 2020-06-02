import React from 'react'
import styled from '@emotion/styled'
import {Link} from 'gatsby'
import BackgroundImage from 'gatsby-background-image'

const ImageBackground = styled('div')`
  background-image: url('/images/brittney-butler.jpeg');
  background-position: top 10% center;
  background-size: cover;
  height: 100vh;

  + * {
    margin-top: 0;
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
    <ImageBackground>
      <TextBox>
        <div>
          <h1>KINGDOM COME</h1>
          <Link to='/'>&darr;</Link>
        </div>
      </TextBox>
    </ImageBackground>
  )
}

export default Hero
