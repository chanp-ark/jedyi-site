import React from 'react'
import styled from '@emotion/styled'

import Title from '../titles/title'

const PurposeContainer = styled('div')`
  padding: 0 2.5rem;
  margin: 0 auto;
  text-align: center;
  font-family: 'Cormorant', serif;
  font-weight: 500;
`

const Paragraph = styled('p')`
  font-size: 1.4rem
`

const Purpose = () => {
  return (
    <>
      <Title>Purpose</Title>
      <PurposeContainer>
        <Paragraph>
          Over the years,  I have been privileged to see the extraordinary things that God can do when an ordinary person chooses to live by faith.
          
        </Paragraph>      
        <Paragraph>
            My hope is that everyone who visits this website would be strengthened in the midst of difficulties and challenged to live the life of faith, freedom, and joy that God has called us to.
        </Paragraph>
      </PurposeContainer>
    </>
  )
}

export default Purpose
