import React from 'react'
import styled from '@emotion/styled'
import SEO from '../components/seo'
import Layout from '../containers/layout'
import Container from '../components/container'

import Title from '../components/title'

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
        <Title>SPEAKING REQUEST</Title>
        <form
          name='invite'
          action='/success'
          method='POST'
          netlify-honeypot='bot-field'
          data-netlify='true'
        >
          <input type='hidden' name='bot-field' />
          <input type='hidden' name='form-name' value='invite' />
          <label>Name</label>
          <NameField>
            <div>
              <input type='text' name='first-name' autoComplete='no' />
              <p>
                first
              </p>
              
            </div>

            <div>
              <input type='text' name='last-name' autoComplete='no' />
              <p>
                last
              </p>
            </div>
          </NameField>
          <label>
            Email Address
            <input type='email' name='email' autoComplete='no' />
          </label>
          <label>
            Phone
            <input type='text' name='phone' autoComplete='no' />
          </label>
          <label>
            Name of Organization & Event
            <input type='text' name='org-name' autoComplete='no' />
          </label>
          <label>
            Organization Website
            <input type='text' name='website' autoComplete='no' />
          </label>
          <label>
            Speaking Date(s) + Time(s)
            <input type='text' name='when' autoComplete='no' />
          </label>
          <label className='speaking-venue'>VENUE</label>
          <label>
            Address
            <input type='text' name='address' autoComplete='no' />
          </label>
          <label>
            City
            <input type='text' name='city' autoComplete='no' />
          </label>
          <label>
            State
            <input type='text' name='state' autoComplete='no' />
          </label>
          <label>
            Postal Code
            <input type='text' name='zip' autoComplete='no' />
          </label>
          <label className='how'>
            How did you hear about Jed Yi?
            <input type='text' name='mutual-connection' autoComplete='no' />
          </label>
          <button type='submit' value='Send Message' className='special'>
            Send
          </button>
        </form>
      </Container>
    </Layout>
  )
}

export default Invite
