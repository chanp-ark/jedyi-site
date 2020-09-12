import React, {useState} from 'react'
import styled from '@emotion/styled'

import Title from '../titles/title'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const EndorseContainer = styled('div')`
  display: flex;
  justify-content: space-around;
  font-family: 'Cormorant', serif;
  font-size: 1.1rem;
  height: 100%;
  width: 100%;
`

const Content = styled('div')`
  display: flex;
  width: 100%;

`

const Picture = styled('div')`
  height: 300px;
  width: 40%;
  background-position: top 30% center;
  background-size: cover;
  margin: 2rem 1rem;

  @media (max-width: 700px) {
    display: none;
`
const ContainContent = styled('div')`
  margin: 1rem 2rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin-right: 0;
  @media (max-width: 700px) {
    margin: 0;
`

const NameTitle = styled('h3')`
`

const Comment = styled('div')`
  height: 90%;
`

const Button = styled('div')`
  transition: all 180ms ease-in-out;
  display: flex;
  justify-content: flex-end;

  &:hover {
    transform: scale(1.1, 1.1);
  }
  
`

const PrevNext = styled('div')`
  display: flex;
  justify-content: flex-end;
  @media(max-width: 700px){
    justify-content: center;
    margin-top: 1rem;
  }
`

function EndorseLayout ({endorseNodes}) {
  const [track, setTrack] = useState(0)

  const handleClickRight = e => {
    e.preventDefault()
    if (track === endorseNodes.length - 1) {
      setTrack(0)
    } else {
      setTrack(track + 1)
    }
  }

  const handleClickLeft = e => {
    e.preventDefault()
    if (track === 0) {
      setTrack(endorseNodes.length - 1)
    } else {
      setTrack(track - 1)
    }
  }
  return (
    <>
      <Title>Endorsements</Title>
      <EndorseContainer>
      { endorseNodes.map((endorse, i) => {
          const picUrl = endorse.mainImage.asset.url
          if (track === i) {
            return (
              <Content key={i}>
                <Picture style = {{backgroundImage: `url(${picUrl})`}} />
                <ContainContent>
                    <NameTitle>
                      {endorse.title}   | |   {endorse.organization}
                    </NameTitle>
                    <Comment>
                      {endorse.comment}
                    </Comment>
                  <PrevNext>
                    <Button
                      onClick={handleClickLeft}
                      style={{ fontSize: '2rem', padding: '0.1em',color: 'rgba(0,0,0,0.65)', height: '40px'}}
                    >
                      <FontAwesomeIcon icon='chevron-left' />
                    </Button>
                    <Button
                      onClick={handleClickRight}
                      style={{ fontSize: '2rem', padding: '0.1em', color: 'rgba(0,0,0,0.65)', height: '40px'}}
                    >
                      <FontAwesomeIcon icon='chevron-right' />
                    </Button>
                  </PrevNext>
                  </ContainContent>
              </Content>
            )
          }
        })}
      </EndorseContainer> 
    </>
  )
}

export default EndorseLayout