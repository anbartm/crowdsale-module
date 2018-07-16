/**
 * Simple styled components that are shared across many other
 * components live here.
 */
import styled, { keyframes } from 'styled-components'
import { color } from 'components/style'
import BaseLink from 'components/BaseLink'
import { media } from 'helpers/css'

/** Containers n stuff */ const getPadding = props => {
  if (props.noPadding) return '0px 32px'
  if (props.bigPadding) return '88px 32px 80px'
  if (props.midPadding) return '60px 32px 60px'
  return '32px'
}

export const Container = styled.div`
  font-weight: 300;
  padding: ${getPadding};
  text-align: ${props => (props.textAlign && props.textAlign) || 'left'};

  h1 {
    font-weight: 300;
    font-size: 24px;
    margin-bottom: 24px !important;
  }

  ${media.desktop`
    max-width: ${props => (props.maxWidth && props.maxWidth) || '1200px'};
    margin: 0 auto;

    h1 {
      font-size: 36px;
      font-weight: 300;
      margin-top: 0;
      margin-bottom: 40px !important;
    }
  `};
`

/** Buttons n stuff */
export const Button = styled(BaseLink)`
  text-transform: uppercase;
  text-decoration: none;
  font-weight: 300;
  color: ${props => (props.textcolor && props.textcolor) || '#fff'};
  background-color: ${props => (props.backgroundcolor && props.backgroundcolor) || color.primary};
  text-align: center;
  transition: all 0.2s ease-in;
  font-size: 1.125rem;
  outline: 0;
  border: none;
  display: inline-block;
  height: 42px;
  letter-spacing: 1.8px;
  line-height: 42px;
  padding: 0 2rem;
  vertical-align: middle;
  -webkit-tap-highlight-color: transparent;
  cursor: pointer;
  border-radius: 2px;

  &:hover {
    background-color: #0085c7;
  }

  ${props =>
    props.disabled &&
    `
    cursor: default;
    background: ${color.lightGray};
    &:hover {
      background-color: ${color.lightGray};
    }
  `};
`
Button.displayName = 'Button'

export const Link = styled(BaseLink)`
  outline: none;
  display: inline;
  white-space: nowrap;
  color: ${props => color[props.color] || color.primary};
  text-decoration: none;
  cursor: pointer;

  &:visited {
    color: ${props => color[props.color] || color.primary};
  }

  &:hover {
    color: ${props => color[props.color] || '#d8d8d8'};
  }
`
Link.displayName = 'Link'

/**
 * TODO export animations in different file TBD
 */
export const pulse = keyframes`
  0% {
    opacity: 1;
  }

  25% {
    opacity: 0.75;
  }

  50% {
    opacity: 0.3;
  }

  75% {
    opacity: 0.75;
  }

  100% {
    opacity: 1;
  }
`

/**
 * Refresh Button
 */
export const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`

export const RefreshButton = styled.span`
  cursor: pointer;
  margin-left: 4px;
  width: 16px;
  display: inline-block;

  g {
    fill: ${color.primary};
    animation: ${props => props.refreshing && rotate360} 0.8s linear infinite;
    opacity: ${props => (props.refreshing && '0.6') || '1'};
  }
`

export const Label = styled.label`
  display: flex;
  flex-direction: row;
  font-size: 14px;
  width: 100%;
  text-align: left;
  color: ${props => (props.error ? color.error : color.grayText)};

  svg {
    height: 16px;
  }
`
