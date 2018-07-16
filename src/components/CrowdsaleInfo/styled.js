import styled from 'styled-components'
import { color } from 'components/style'
import { media } from 'helpers/css'
import { pulse } from 'components/styled'

export const Container = styled.div`
  padding: 0;
`

export const Tabs = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: space-around;
`

export const TabButton = styled.li`
  padding: 16px;
  color: ${props => (props.active && '#fff') || color.grayText};
  background: blue;
  display: inline-block;
  flex-grow: 1;
  text-align: center;
  cursor: pointer;
  background-color: ${props => (props.active && color.primary) || color.lightGray};
  transition: all 0.2s ease-in;
`

export const Content = styled.div`
  display: ${props => (props.active && 'block') || 'none'};
  text-align: left;
`

export const Slider = styled.div``

export const TimeWrap = styled.div`
  color: #fff;
  padding: 32px;
  min-height: 132px;
  background: ${color.primary};

  span {
    display: block;
    font-size: 36px;
    padding-bottom: 16px;
  }
`

export const Title = styled.h4`
  margin-top: 0;
  font-size: 20px;
  font-weight: 300;

  span {
    text-transform: uppercase;
    padding: 4px 16px;
    font-size: 14px;
    float: right;
    background-color: #fff;
    border-radius: 15px;
    color: ${color.grayText};
  }
`

export const MoneyWrap = styled.div`
  padding: 32px 0 0;
  ${media.desktop`
    padding: 32px 32px 0;
  `};
  color: ${color.grayText};

  button,
  a {
    margin-bottom: 24px;
  }
`

export const SliderBalance = styled.div`
  font-size: 16px;
  padding: 0 0 16px;
`

export const EthTotal = styled.span`
  font-size: 36px;

  small {
    font-size: 20px;
  }

  animation: ${props => (props.refreshing ? `${pulse} 1s infinite;` : 'none')};
`

export const UserBalance = styled.span`
  display: block;
  padding: 0 0 16px;
`

export const TextWrap = styled.div`
  color: ${color.grayText};
  padding: 32px;
`

export const InfoText = styled.div`
  margin-bottom: 32px;
  line-height: 1.4rem;
  padding: 16px 32px;
  background-color: ${props => (props.warning && '#f8d7da') || '#d4edda'};
  color: ${props => (props.warning && '#721c24') || '#155724'};
  border: 1px solid ${props => (props.warning && '#f5c6cb') || '#c3e6cb'};
`
