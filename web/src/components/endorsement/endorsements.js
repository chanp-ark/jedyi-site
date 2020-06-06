import React from 'react'
import styled from '@emotion/styled'

import Title from '../title'

const EndorseContainer = styled('div')`
  display: flex;
  justify-content: space-around
`

const Endorsement = () => {
  return (
    <>
      <Title>Endorsements</Title>
      <EndorseContainer>Somebody endorse this brotha</EndorseContainer>
    </>
  )
}

export default Endorsement
