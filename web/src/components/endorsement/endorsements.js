import React from 'react'
import styled from '@emotion/styled'

import Title from '../titles/title'

const EndorseContainer = styled('div')`
  display: flex;
  justify-content: space-around;
`

const Endorsement = () => {
  return (
    <>
      <div id='endorsements' />
      <Title>Endorsements</Title>
      <EndorseContainer>Somebody endorse this brotha</EndorseContainer>
    </>
  )
}

export default Endorsement
