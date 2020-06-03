import React from 'react'
import SEO from '../components/seo'
import Layout from '../containers/layout'
import Container from '../components/container'

const Success = () => (
  <Layout>
    <SEO title='Success' description='Successful form submission for speaking request' />
    <Container>Thank you, I will get in touch with you soon!</Container>
  </Layout>
)

export default Success
