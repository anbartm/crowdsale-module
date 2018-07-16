/** Get JWT/expiration  */
export const getJWT = () => {
  return localStorage.getItem('jwt')
}
export const getJWTExpiration = () => localStorage.getItem('jwt_expiration')

/** Set JWT/expiration */
export const setJWT = data => {
  localStorage.setItem('jwt', data.token)
  localStorage.setItem('jwt_expiration', data.expire_date)
}

/** Remove JWT/expiration */
export const removeJWT = () => {
  localStorage.removeItem('jwt')
  localStorage.removeItem('jwt_expiration')
}

/** Save project slug if TOS accepted (all checkboxes checked) */
export const setTOS = slug => {
  /** Check for TOS array OR define new */
  let tos = JSON.parse(localStorage.getItem('tos')) || []

  /** Prevent duplicates and push */
  if (tos.indexOf(slug) === -1) {
    tos.push(slug)
    localStorage.setItem('tos', JSON.stringify(tos))
  }
}

/** Check if project TOS was accepted */
export const getTOS = slug => {
  let tos = JSON.parse(localStorage.getItem('tos')) || []

  return tos.indexOf(slug) !== -1
}

/** Remove TOS */
export const removeTOS = () => {
  localStorage.removeItem('tos')
}
