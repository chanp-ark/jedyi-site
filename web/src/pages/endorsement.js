import React from 'react'
import SEO from '../components/seo'
import Layout from '../containers/layout'
import Container from '../components/container'
import PageTitle from '../components/titles/pageTitle'
import styled from '@emotion/styled'
import { graphql } from 'gatsby'
import { mapEdgesToNodes } from '../lib/helpers'

import '../styles/itinerary.css'
import Endorsements from '../components/endorsement/endorsements'


const ContainEach = styled('div')`
  display: flex;
  margin: 1rem;
  padding: 1rem;
  justify-content: space-between;

  @media (max-width: 500px) {
    display: flex;
    flex-direction: column;
    margin: 0;
    padding: 0;
  }
`

const PictureContainer = styled('div')`

`

const CommentContainer = styled('div')`
  height: 300px;
  width: 60%;
  margin: 0 1rem;

  @media (max-width: 500px) {
    margin: 1rem 0;
    width: 100%;
    height: 100%;
  }
`

const Picture = styled('div')`
  height: 300px;
  width: 200px;
  background-position: top 30% center;
  background-size: cover;

  @media (max-width: 500px) {
    height: 300px;
    width: 100%;
  }
`

const Name = styled('div')`
  font-size: 1.8rem;
`

const Title = styled('div')`
  font-size: 1.1rem;

`



const Comment = styled('div')`
  margin: 0.5rem 0;
`

export const query = graphql`
  query MainFetchEndorsements {
    allSanityEndorsements {
      edges {
        node {
          comment
          organization
          title
          mainImage {
            asset {
              url
            }
          }
        }
      }
    }
  }
`


const Endorsement = ({data})=> {
  
  const endorsements = mapEdgesToNodes(data.allSanityEndorsements)
  console.log("map edges to nodes", endorsements) 


  return (
    <Layout>
      <SEO title='Endorsements' description='Endorsements of Jed Yi from Christian leaders' />
      <Container>
        <PageTitle>Endorsements</PageTitle>
        { endorsements.map((endorsement, i) => {
          console.log("endorsement", endorsement.comment)
          console.log("endorsement", endorsement.title)
          console.log("endorsement", endorsement.organization)
          const imageLink = endorsement.mainImage.asset.url
          return(
            <ContainEach key={i}>
              <PictureContainer>
                <Picture style={{backgroundImage: `url(${imageLink})`}}/>
              </PictureContainer>
              <CommentContainer>
                <Name>{endorsement.title}</Name>
                <Title>{endorsement.organization}</Title>
                <Comment>{endorsement.comment}</Comment>
              </CommentContainer>
              <br />
            </ContainEach>
          )
        })}
      </Container>
    </Layout>
  )
}

export default Endorsement
