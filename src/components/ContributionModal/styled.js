import { color } from 'components/style'
import { media } from 'helpers/css'
import styled from 'styled-components'

export const CloseIcon = styled.div`
  position: relative;
  right: 0;
  top: -2px;
  cursor: pointer;
  font-size: 14px;
  font-weight: bold;
  padding: 4px;
  opacity: 0.4;
  height: 24px;
  width: 24px;
  ${media.tablet`
    position: absolute;
    right: 22px;
    top: 22px;
  `};

  :hover {
    opacity: 0.3;
    border-radius: 4px;
    background-color: ${color.darkGray};
  }
`

export const Content = styled.div`
  padding: 32px;
  color: ${color.grayText};
  text-align: center;
  ${media.tablet`
    text-align: left;
    `};
`

export const TermsList = styled.div`
  font-family: Roboto;
  font-size: 16px;

  > .terms {
    font-weight: 300;
  }

  > .list-elem {
    font-size: 14px;
  }
`

export const ListFooter = styled.div`
  display: flex;
  justify-content: flex-end;
`

export const AlertWallet = styled.div`
  background-color: #f8d7da;
  border: solid 1px #f5c6cb;
  font-size: 14px;
  font-weight: 300;
  color: #721c24;
  display: flex;
  padding: 16px;
  align-items: center;
  line-height: 20px;

  span {
    display: inline-block;
  }

  .icon {
    display: inline-block;
    border-radius: 50%;
    width: 24px;
    border: 2px solid;
    text-align: center;
    padding: 3px;
    margin-right: 8px;
    font-weight: bold;
    font-size: 14px;
    height: 50%;
  }

  .icon-warning {
    display: inline-block;
    border-radius: 50%;
    width: 18px;
    min-width: 18px;
    border: 2px solid;
    text-align: center;
    padding: 3px;
    margin-right: 8px;
    font-weight: bold;
    font-size: 14px;
    height: 18px;
  }

  ${media.tablet`
    .icon {
      font-size: 16px;
    }
  `};
`

export const WalletInfo = styled.p`
  margin: 16px 0 0;
  ${media.tablet`
    margin: 16px 0;
    `};
`

export const ListHeader = styled.div`
  font-weight: bold;
  margin-top: 16px;
  ${media.tablet`
    margin-top: 32px;
  `};
`
export const ListBody = styled.div`
  margin-top: 32px;

  .row {
    margin-bottom: 24px;
  }
`

export const PhaseHeader = styled.div`
  font-size: 18px;
  padding-bottom: 8px;
  padding-top: 16px;
  font-weight: 300;
  display: flex;
  justify-content: space-around;
  background-color: #fafafa;
  color: ${color.grey};
  align-items: center;

  h3 {
    font-size: 14px;
  }

  .step {
    display: inline-block;
    border-radius: 50%;
    width: 12px;
    border: 2px solid;
    text-align: center;
    padding: 2px;
    font-size: 10px;
    margin-right: 10px;
    height: 12px;
    vertical-align: middle;
  }

  span {
    display: inline-block;
    vertical-align: middle;
  }

  .active {
    color: ${color.primary};
  }
`

export const AddressInfo = styled.div`
  font-size: 13px;
  text-align: center;
  font-weight: 300;
  align-self: center;
  padding: 16px 0;
  display: flex;
  align-items: center;

  canvas {
    border-radius: 50%;
  }

  img {
    border-radius: 50%;
    margin-right: 8px;
    margin-bottom: 8px;
    vertical-align: middle;
    ${media.tablet`
    margin-bottom: 0;
  `};
  }

  span {
    word-break: break-word;
  }

  margin: ${props => props.margin || '0'};
  ${media.tablet`
    font-size: 16px;
    text-align: left;
    padding: 0;
  `};
`
export const CopyAddress = styled.div`
  border: solid 1px #d0d1d2;
  display: flex;
  margin-top: 16px;
  margin-bottom: 4px;
  flex-direction: column;
  justify-content: space-between;
  ${media.tablet`
    flex-direction: row;
  `};
`
export const EthContrib = styled.div`
  margin-top: 16px;

  p {
    margin: 0;
  }

  .eth {
    font-weight: bold;
    font-size: 16px;
    display: inline-block;
  }
`

export const AddressCopiedMessage = styled.div`
  font-size: 12px;
  text-align: center;
`

export const TheAddress = styled.div`
  font-weight: bold;
  vertical-align: middle;
  margin-left: 16px;
`
