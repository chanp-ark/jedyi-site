import React from 'react'
import Layout from '../containers/layout'
import Container from '../components/container'

import Title from '../components/title'

import '../styles/invite.styles.css'

const Contact = () => {
  return (
    <Layout>
      <Container>
        <Title>SPEAKING REQUEST</Title>
        <form method='post' netlify-honeypot='bot-field' data-netlify='true'>
          <input type='hidden' name='bot-field' />
          <label>
            Name
            <input type='text' name='name' />
          </label>
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
            <textarea type='text' name='when' rows='5' cols='33' />
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
            <input type='text' name='message' />
          </label>
          <button type='submit'>Send</button>
        </form>
      </Container>
    </Layout>
  )
}

export default Contact
