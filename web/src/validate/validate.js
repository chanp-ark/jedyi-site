import isMobilePhone from 'validator/lib/isMobilePhone'
import isEmail from 'validator/lib/isEmail'

export const validateEmail = (e, email) => {
  const isValid = isEmail(email)
  const inputStyle = e.target.style
  const invalidTag = document.getElementById('invalidEmail')
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

export const validatePhoneNumber = (e, number) => {
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
