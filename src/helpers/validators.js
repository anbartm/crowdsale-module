import validator from 'validator'
import SHA3 from 'crypto-js/sha3'

/** Is email valid */
export const isEmail = address => address && !validator.isEmail(address) && 'Not valid email'

/** Required inputs can't be empty */
export const isEmpty = data => validator.isEmpty(data) && 'Cannot be empty'

/** Password rules based on backend */
export const password = data =>
  (validator.isNumeric(data) || !validator.isLength(data, { min: 6, max: undefined })) &&
  'Password is to weak'

/** Ether address validator */
const sha3 = value => SHA3(value, { outputLength: 256 }).toString()
export const addressInvalid = address =>
  !(
    /^(0x)?[0-9a-f]{40}$/i.test(address) &&
    (/^(0x)?[0-9a-f]{40}$/.test(address) ||
      /^(0x)?[0-9A-F]{40}$/.test(address) ||
      !sha3(address.replace('0x', '').toLowerCase())
        .split('')
        .slice(0, 40)
        .some(
          (char, index) =>
            (parseInt(char, 16) > 7 && address[index + 2].toUpperCase() !== address[index + 2]) ||
            (parseInt(char, 16) <= 7 && address[index + 2].toLowerCase() !== address[index + 2])
        ))
  ) && 'Invalid address'

export const required = msg => value => !value && msg
export const long = (msg, maxLength) => value => value && value.length > maxLength && msg
export const any = (...args) => value => args.reduce((acc, x) => acc || x(value), false)
export const url = (msg = 'Please enter a valid URL') => value =>
  value && !validator.isURL(value) && msg
export const email = msg => value => value && !validator.isEmail(value) && msg
