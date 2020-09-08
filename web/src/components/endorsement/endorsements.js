import React from 'react'
import styled from '@emotion/styled'
import {graphql} from 'gatsby'

import Title from '../titles/title'

const EndorseContainer = styled('div')`
  display: flex;
  justify-content: space-around;
  font-family: 'Cormorant', serif;
  font-weight: 500;
  font-size: 1.1rem;
  height: 100%;
  width: 85%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: space around;
  border: 1px solid rgba(0, 0, 0, 0.4);
  background-color: #fff;
  box-sizing: border-box;
  padding: 10px;
`

const Picture = styled('div')`

`

const Comment = styled('div')`

`

export const query = graphql`
  query FetchEndorsements {
    endorsements: allSanityEndorsements {
      edges {
        node {
          comment
          organization
          title
        }
      }
    }
  }
`

const Endorsements = ({data}) => {
  console.log("endorsement page", data)
  return (
    <>
      <div id='endorsements' />
      <Title>Endorsements</Title>
      <EndorseContainer>
        <Picture styles={{backgroundImage: '#'}}/>
        <Comment>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </Comment>

      </EndorseContainer>
    </>
  )
}

export default Endorsements
