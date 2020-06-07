import React from 'react'
import styled from '@emotion/styled'

const Heading = styled('h1')`
  text-transform: uppercase;
  width: 100%;
  margin: 2rem 0 2rem 0;
  text-align: center;
`

const PageTitle = props => <Heading>{props.children}</Heading>

export default PageTitle
