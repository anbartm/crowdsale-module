import React from 'react'
import InlineSVG from 'svg-inline-react'

const SVG = ({ src, element = 'span', ...rest }) => (
  <InlineSVG src={src} element={element} {...rest} />
)

export default SVG
