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
  const initialState = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    org: '',
    website: '',
    when: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    mutual: ''
  }

  const [info, setInfo] = useState(initialState)

  const {first, last, email, phone, org, website, when, address, city, state, zip, mutual} = info

  const encode = data => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
      .join('&')
  }

  const handleChange = e => {
    e.preventDefault()
    setInfo({...info, [e.target.name]: e.target.value})
  }

  const handleSubmit = e => {
    window
      .fetch('/', {
        method: 'POST',
        headers: {'Content-Type': 'application/x-www-form-urlencoded'},
        body: encode({'form-name': 'contact', ...info})
      })
      .then(() => console.log('Success!'))
      .then(() => {
        navigate('/success')
      })
      .catch(err => console.log(err))
  }

  return (
    <Layout>
      <SEO title='Speaking Request' description='Invite form to submit a speaking request' />
      <Container>
        <PageTitle>SPEAKING REQUEST</PageTitle>
        <form onSubmit={handleSubmit}>
          <label>Name</label>
          <NameField>
            <div>
              <input
                type='text'
                name='firstName'
                autoComplete='no'
                value={first}
                onChange={handleChange}
                required
              />
              <p>first</p>
            </div>

            <div>
              <input
                type='text'
                name='lastName'
                autoComplete='no'
                value={last}
                onChange={handleChange}
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
              value={email}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Phone
            <input
              type='text'
              name='phone'
              autoComplete='no'
              value={phone}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Name of Organization & Event
            <input
              type='text'
              name='org'
              autoComplete='no'
              value={org}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Organization Website
            <input
              type='text'
              name='website'
              autoComplete='no'
              value={website}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Speaking Date(s) + Time(s)
            <input type='text' name='when' autoComplete='no' value={when} onChange={handleChange} />
          </label>
          <label className='speaking-venue'>VENUE</label>
          <label>
            Address
            <input
              type='text'
              name='address'
              autoComplete='no'
              value={address}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            City
            <input
              type='text'
              name='city'
              autoComplete='no'
              value={city}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            State
            <input
              type='text'
              name='state'
              autoComplete='no'
              value={state}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Postal Code
            <input
              type='text'
              name='zip'
              autoComplete='no'
              value={zip}
              onChange={handleChange}
              required
            />
          </label>
          <label className='how'>
            How did you hear about Jed Yi?
            <input
              type='text'
              name='mutual'
              autoComplete='no'
              value={mutual}
              onChange={handleChange}
              required
            />
          </label>
          <button type='submit'>Send</button>
        </form>
      </Container>
    </Layout>
  )
}

export default Invite
