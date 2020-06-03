import React from 'react'
import styled from '@emotion/styled'
import SEO from '../components/seo'
import Layout from '../containers/layout'
import Container from '../components/container'

import Title from '../components/title'

import '../styles/invite.styles.css'

const NameField = styled('div')`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  
  div {
    display: flex;
    flex-direction: column;
    margin: 0;
    padding: 0;
    width: 50%
    
    p {
      width: 50px;
    }
  }
  
  label {
    flex-direction: row;
  }
  
  p {
    padding: 0;
    margin: 0;
  }

`
const Contact = () => {
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
            <label>
              <div>
                <input type='text' name='first-name' />
                <p>
                  first
                </p>
                
              </div>

              <div>
                <input type='text' name='last-name' />
                <p>
                  last
                </p>
              </div>
            </label>
          </NameField>
          <label>
            Email Address
            <input type='email' name='email' />
          </label>
          <label>
            Phone
            <input type='text' name='phone' />
          </label>
          <label>
            Name of Organization & Event
            <input type='text' name='org-name' />
          </label>
          <label>
            Organization Website
            <input type='text' name='website' />
          </label>
          <label>
            Speaking Date(s) + Time(s)
            <input type='text' name='when' />
          </label>
          <label>Speaking Venue</label>
          <label>
            Address
            <input type='text' name='address' />
          </label>
          <label>
            City
            <input type='text' name='city' />
          </label>
          <label>
            State
            <input type='text' name='state' />
          </label>
          <label>
            Postal Code
            <input type='text' name='zip' />
          </label>
          <label>
            How did you hear about Jed Yi?
            <input type='text' name='mutual-connection' />
          </label>
          <button type='submit' value='Send Message' className='special'>
            Send
          </button>
        </form>
      </Container>
    </Layout>
  )
}

export default Contact
