import React from 'react'
import styled from '@emotion/styled'
import Container from '../../components/container'
import Title from '../title'
import './about.styles.css'

const JedImage = styled('div')`
  background-image: url('/images/jed-profile-about.jpg');
  background-position: top 40% center;
  background-size: cover;
  height: 61vh;
  width: 55vh;
  min-width: 200px;
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
  overflow-y: scroll;
  overflow-x: hidden;
  min-width: 200px;
  margin: 1rem;
  @media (max-width: 950px) {
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

const AboutMe = () => {
  return (
    <>
      <Title>Jed Yi</Title>
      <Container>
        <AboutContainer>
          <JedImage />
          {/* Biography, for now, hard coding it in. later, create schema for user to be able to update it himself */}
          <Biography>
            <div>
              I was born and raised in Southern California. Church had always played an integral
              role in my life growing up because I was a pastor’s kid. However, it was in my 9th
              grade year that I had a radical encounter with Jesus that made me aware of a personal
              God that cared for me. Fast forward, to my senior year in high school, I encountered
              God's powerful touch of grace and was transformed and commissioned into ministry. At
              the age of 18, I became a youth pastor and have continued in my calling for the last 5
              years. 
            </div>
            <div>
              My heart’s desire is to follow Jesus and to go wherever he leads. The values
              that the Lord has placed in my heart include: reaching out to the lost, teaching the
              Word of God, worship and prayer, empowering the wider body of Christ to fulfill the
              mission of the kingdom, and to minister to the poor. 
            </div>
            <div>
              In my free time, I love watching Skip and Shannon on Undisputed, writing music, spending time with friends, and playing
              basketball. I graduated from Biola University with an Undergraduate Degree in Biblical
              and Theological Studies and am pursuing a MDiv at Talbot School of Theology for
              Evangelism and Discipleship.
            </div>
          </Biography>
        </AboutContainer>
      </Container>
    </>
  )
}

export default AboutMe
