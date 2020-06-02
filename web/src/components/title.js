import React from 'react'
import styled from '@emotion/styled'

const Heading = styled('h1')`
    text-transform: uppercase;
    margin: 3rem;
    text-align: center;
`

const Title = (props) => <Heading>{props.children}</Heading>

export default Title
