import React from 'react'
import {graphql} from 'gatsby'
import {
  mapEdgesToNodes,
  filterOutDocsWithoutSlugs,
  filterOutDocsPublishedInTheFuture
} from '../lib/helpers'
import Container from '../components/container'
import GraphQLErrorList from '../components/graphql-error-list'
import ProjectPreviewGrid from '../components/project-preview-grid'
import SEO from '../components/seo'
import Layout from '../containers/layout'

import Hero from '../components/hero'
import About from '../components/about/about'
import SermonVideo from '../components/sermon/sermon'
import SocialLinks from '../components/social-links/social-link'
import Endorsement from '../components/endorsement/endorsements'
import Divider from '../components/divider/divider'

export const query = graphql`
  query IndexPageQuery {
    site: sanitySiteSettings(_id: {regex: "/(drafts.|)siteSettings/"}) {
      title
      description
      keywords
      about
    }
    projects: allSanityBlog(
      limit: 3
      sort: {fields: [publishedAt], order: DESC}
      filter: {slug: {current: {ne: null}}, publishedAt: {ne: null}}
    ) {
      edges {
        node {
          id
          mainImage {
            crop {
              _key
              _type
              top
              bottom
              left
              right
            }
            hotspot {
              _key
              _type
              x
              y
              height
              width
            }
            asset {
              _id
            }
            alt
          }
          title
          _rawExcerpt
          slug {
            current
          }
        }
      }
    }
  }
`

const IndexPage = props => {
  const {data, errors} = props

  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    )
  }

  const site = (data || {}).site
  const projectNodes = (data || {}).projects
    ? mapEdgesToNodes(data.projects)
      .filter(filterOutDocsWithoutSlugs)
      .filter(filterOutDocsPublishedInTheFuture)
    : []

  if (!site) {
    throw new Error(
      'Missing "Site settings". Open the studio at http://localhost:3333 and add some content to "Site settings" and restart the development server.'
    )
  }
  // console.log(site.about)

  return (
    <>
      <Layout>
        <SEO title={site.title} description={site.description} keywords={site.keywords} />
        <Hero />
        <Container>
          <About content={site.about}/>
          <Divider />
          <SocialLinks className='social-links-section' />
          <Divider />
          <SermonVideo />
          <Divider />
          {projectNodes && <ProjectPreviewGrid nodes={projectNodes} browseMoreHref='/blogs/' />}
          <Divider />
          <Endorsement />
        </Container>
      </Layout>
    </>
  )
}

export default IndexPage
