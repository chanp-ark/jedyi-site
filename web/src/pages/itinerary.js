import React from 'react'
import SEO from '../components/seo'
import Layout from '../containers/layout'
import Container from '../components/container'
import PageTitle from '../components/titles/pageTitle'
import styled from '@emotion/styled'
import { graphql } from 'gatsby'
import { mapEdgesToNodes } from '../lib/helpers'
import Divider from '../components/divider/divider'

import '../styles/itinerary.css'

const EventContainer = styled('div')`
  margin: 1rem auto;
  width: 60%;
  text-align: center;
`

const EventName = styled('div')`
  font-weight: 600;
  font-size: 1.3rem;
`

export const query = graphql`
  query FetchEvents {
    events: allSanityEvent {
      edges {
        node {
          startDate(formatString: "MMM DD, YYYY")
          title
          endDate(formatString: "MMM DD, YYYY")
          location
        }
      }
    }
  }
`

const Itinerary = ({ data }) => {
  const allEvents = mapEdgesToNodes(data.events)
  allEvents.sort((a, b) => Date.parse(b.startDate) - Date.parse(a.startDate))
  
  const today = new Date()
  console.log('today: ')
  console.log(today, Date.parse(today) )
  console.log('start date:')
  console.log(allEvents[0].startDate, Date.parse(allEvents[0].startDate))
  return (
    <Layout>
      <SEO title='Speaking Itinerary' description='Dates and locations of speaking engagements' />
      <Container>
        <PageTitle>Itinerary</PageTitle>
        <EventContainer>
          {allEvents.map((event, i) => {
            return (
              <div key={i} className={ Date.parse(event.startDate) < Date.parse(today) - 86400000 ? 'past-event' : 'not-yet'}>
                {i === 0 && <Divider />}
                <EventName>{event.title}</EventName>
                <div>{event.location}</div>
                {event.startDate !== event.endDate ? (
                  <div>
                    {event.startDate} to {event.endDate}
                  </div>
                ) : (
                  <div>{event.startDate}</div>
                )}
                <Divider />
              </div>
            )
          })}
        </EventContainer>
      </Container>
    </Layout>
  )
}

export default Itinerary
