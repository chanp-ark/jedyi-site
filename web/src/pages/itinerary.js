import React from 'react'
import SEO from '../components/seo'
import Layout from '../containers/layout'
import Container from '../components/container'
import PageTitle from '../components/titles/pageTitle'

const Success = () => (
  <Layout>
    <SEO title='Speaking Itinerary' description='Dates and locations of speaking engagements' />
    <Container>
      <PageTitle>Itinerary</PageTitle>
    </Container>
  </Layout>
)

export default Success
