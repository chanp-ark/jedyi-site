export function checkAllInputs (object) {
  for (let key in object) {
    if (!object[key]) {
      window.alert('Please enter all fields')
      return false
    }
  }
  return true
}
