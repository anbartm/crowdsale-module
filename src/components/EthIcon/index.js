import React from 'react'
import Blockie from 'react-blockies'

const EthIcon = ({ seed }) => {
  return <Blockie seed={seed && seed.toLowerCase()} />
}

export default EthIcon
