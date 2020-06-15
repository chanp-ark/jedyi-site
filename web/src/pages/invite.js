import React from 'react'
import styled from '@emotion/styled'
import SEO from '../components/seo'
import Layout from '../containers/layout'
import Container from '../components/container'
import isMobilePhone from 'validator/lib/isMobilePhone'

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

const InvalidLabel = styled('p')`
  font-style: italic;
  font-size: 0.8rem;
  text-align: center;
  color: rgba(255, 50, 50);
  margin: 0;
  padding: 0;
  position: relative;
  display: none;
  `

const Invite = () => {
  
  const [disable, setDisable] = React.useState(true)
  
  const validatePhoneNumber = (e, number) => {
    const isValid = isMobilePhone(number, 'en-US')
    const inputStyle = e.target.style
    const invalidTag = document.getElementById('invalidNum')
    if (!isValid) {
      inputStyle.border = '2px solid rgba(255, 50, 50)'
      invalidTag.style.display = 'block'
      setDisable(false)
    } else {
      inputStyle.border = '1px solid rgb(220, 225, 229)'
      invalidTag.style.display = 'none'
      setDisable(true)
    }
  }
  return (
    <Layout>
      <SEO title='Speaking Request' description='Invite form to submit a speaking request' />
      <Container>
        <PageTitle>SPEAKING REQUEST</PageTitle>
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
              <input type='text' name='firstName' autoComplete='no' required />
              <p>first</p>
            </div>

            <div>
              <input type='text' name='lastName' autoComplete='no' required />
              <p>last</p>
            </div>
          </NameField>
          <label>
            Email Address
            <input type='email' name='email' autoComplete='no' required />
          </label>
          <label>
            Phone
            <InvalidLabel id='invalidNum'>Please enter a valid phone number</InvalidLabel>
            <input type='text' name='phone' autoComplete='no' required onBlur={e => validatePhoneNumber(e, e.target.value)} />
          </label>
          <label>
            Name of Organization & Event
            <input type='text' name='org' autoComplete='no' required />
          </label>
          <label>
            Organization Website
            <input type='text' name='website' autoComplete='no' required />
          </label>
          <label>
            Speaking Date(s) + Time(s)
            <input type='text' name='when' autoComplete='no' />
          </label>
          <label className='speaking-venue'>VENUE</label>
          <label>
            Address
            <input type='text' name='address' autoComplete='no' required />
          </label>
          <label>
            City
            <input type='text' name='city' autoComplete='no' required />
          </label>
          <label>
            State
            <input type='text' name='state' autoComplete='no' required />
          </label>
          <label>
            Postal Code
            <input type='text' name='zip' autoComplete='no' required />
          </label>
          <label className='how'>
            How did you hear about Jed Yi?
            <input type='text' name='mutual' autoComplete='no' required />
          </label>
          <button type='submit' aria-label='send' className={disable ? 'enable' : 'disable'}>
            Send
          </button>
        </form>
      </Container>
    </Layout>
  )
}

export default Invite
