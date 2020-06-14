import React, {useState} from 'react'
import {navigate} from 'gatsby'
import styled from '@emotion/styled'
import SEO from '../components/seo'
import Layout from '../containers/layout'
import Container from '../components/container'

import PageTitle from '../components/titles/pageTitle'

import '../styles/invite.styles.css'

const NameField = styled('label')`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  div {
    display: flex;
    flex-direction: column;
    width: 47%;
    margin: 0;
    padding: 0;

    p {
      width: 100%;
      margin: 0;
      padding: 0;
      font-size: 0.7rem;
    }
  }
`

const Invite = () => {
 
  return (
    <Layout>
      <SEO title='Speaking Request' description='Invite form to submit a speaking request' />
      <Container>
        <PageTitle>SPEAKING REQUEST</PageTitle>
        <form method="post" action='/success' netlify-honeypot="bot-field" data-netlify="true" >
        <input type="hidden" name="bot-field" />

          <label>Name</label>
          <NameField>
            <div>
              <input
                type='text'
                name='firstName'
                autoComplete='no'
                required
              />
              <p>first</p>
            </div>

            <div>
              <input
                type='text'
                name='lastName'
                autoComplete='no'
                required
              />
              <p>last</p>
            </div>
          </NameField>
          <label>
            Email Address
            <input
              type='email'
              name='email'
              autoComplete='no'
              required
            />
          </label>
          <label>
            Phone
            <input
              type='text'
              name='phone'
              autoComplete='no'
              required
            />
          </label>
          <label>
            Name of Organization & Event
            <input
              type='text'
              name='org'
              autoComplete='no'
              required
            />
          </label>
          <label>
            Organization Website
            <input
              type='text'
              name='website'
              autoComplete='no'
              required
            />
          </label>
          <label>
            Speaking Date(s) + Time(s)
            <input type='text' name='when' autoComplete='no' />
          </label>
          <label className='speaking-venue'>VENUE</label>
          <label>
            Address
            <input
              type='text'
              name='address'
              autoComplete='no'
              required
            />
          </label>
          <label>
            City
            <input
              type='text'
              name='city'
              autoComplete='no'
              required
            />
          </label>
          <label>
            State
            <input
              type='text'
              name='state'
              autoComplete='no'
              required
            />
          </label>
          <label>
            Postal Code
            <input
              type='text'
              name='zip'
              autoComplete='no'
              required
            />
          </label>
          <label className='how'>
            How did you hear about Jed Yi?
            <input
              type='text'
              name='mutual'
              autoComplete='no'
              required
            />
          </label>
          <button type='submit' aria-label='send'>Send</button>
        </form>
      </Container>
    </Layout>
  )
}

export default Invite
