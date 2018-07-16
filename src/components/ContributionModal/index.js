import React, { Component } from 'react'
import CopyToClipboard from 'react-copy-to-clipboard'
import update from 'immutability-helper'
import ReactGA from 'react-ga'
import Isvg from 'svg-inline-react'
import EthIcon from 'components/EthIcon'

/** Components */
import Popup from 'components/Popup'
import Checkbox from 'components/Checkbox'
import { Button, Link } from 'components/styled'

/** Styled components */
import {
  PhaseHeader,
  CloseIcon,
  Content,
  TermsList,
  ListHeader,
  ListBody,
  ListFooter,
  AlertWallet,
  WalletInfo,
  AddressInfo,
  CopyAddress,
  AddressCopiedMessage,
  EthContrib,
  TheAddress,
} from './styled'

/** Assets and constants */
import closeIconImage from 'assets/close_black.svg'
import { GAEvents } from 'helpers/constants'
import { WALLET_TYPES } from 'helpers/constants'

const contentPopupCss = {
  padding: '0',
}

const tos = {
  tos1: "I've read and agree with the crowdsale contribution terms",
  tos2:
    'I confirm I am not a citizen of USA, Canada, New Zealand, China, ROK, BVI, Anguilla or Cayman Islands nor I am signing on the behalf of users from listed countries',
  tos3:
    "I understand I might have to verify my identity (KYC) before receiving the project's tokens",
}

const ContributionWrapper = props => (
  <Popup show={props.overlay} onClose={() => props.closeOverlay()} contentStyle={contentPopupCss}>
    <PhaseHeader>
      <h3 className={(props.step === 1 && 'active') || ''}>
        <span className="step">1</span>
        <span>TERMS OF USE</span>
      </h3>
      <h3 className={(props.step === 2 && 'active') || ''}>
        <span className="step">2</span>

        <span>CONTRIBUTE</span>
      </h3>
      <CloseIcon onClick={props.closeOverlay}>
        <Isvg style={{ width: 24 }} src={closeIconImage} />
      </CloseIcon>
    </PhaseHeader>
    {props.children}
  </Popup>
)

// tos, wallet, limit, project, overlay, closeOverlay
export default class ContributionModal extends Component {
  constructor(props) {
    super(props)
    this.state = {
      tos1: false,
      tos2: false,
      tos3: false,
      step: 1,
      disableNextStep: true,
    }
    this.toggleTosCheckbox = this.toggleTosCheckbox.bind(this)
    this.tosComplete = this.tosComplete.bind(this)
    this.onCopyKeyPress = this.onCopyKeyPress.bind(this)
  }

  componentDidMount() {
    document.addEventListener('keydown', this.onCopyKeyPress)
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.onCopyKeyPress)
  }

  componentDidUpdate(prevProps, prevState) {
    if (!prevProps.overlay && this.props.overlay && this.props.getTos(this.props.slug)) {
      this.setState(state => ({
        tos1: true,
        tos2: true,
        tos3: true,
        step: 2,
        disableNextStep: false,
      }))
    }
  }

  onCopyKeyPress(e) {
    e = e || window.event
    let key = e.which || e.keyCode // keyCode detection
    let ctrl = e.ctrlKey ? e.ctrlKey : key === 17 ? true : false // 17 = CTRL key
    let cmd = e.metaKey ? e.metaKey : key === 91 ? true : false // 91 = CMD key (mac)

    /* Key 67 = 'c' */
    if (key === 67 && (ctrl || cmd)) {
      /* Get selected text */
      let selected = window.getSelection().toString()
      if (selected === this.props.crowdsale.contribution_address) {
        ReactGA.event({
          ...GAEvents.copy_via_keyboard,
          label: `Copy ${this.props.slug} ${this.props.wallet.wallet_address}`,
        })
        this.setState({ copied: true })
      }
    }
  }

  toggleTosCheckbox(checkbox, value) {
    const newState = update(this.state, { [checkbox]: { $set: !this.state[checkbox] } })
    newState.disableNextStep = Object.keys(tos).filter(tosKey => newState[tosKey]).length !== 3
    this.setState(state => newState)
  }

  tosComplete() {
    this.setState(
      state => ({
        step: 2,
      }),
      () => {
        this.props.setTos(this.props.slug)
      }
    )
  }

  render() {
    const { step } = this.state
    const { overlay, closeOverlay, crowdsale } = this.props

    let walletType =
      WALLET_TYPES[this.props.wallet.wallet_type] &&
      WALLET_TYPES[this.props.wallet.wallet_type].label
    if (walletType === WALLET_TYPES.OTHER.label) {
      walletType = ''
    }
    const activePhase = crowdsale.phases && crowdsale.phases.filter(p => p.active)[0]

    /**
     * Step 1 shows 3 checkboxes for TOS confirmation.
     * When completed the project slug is saved in local storage, meaning the user completed this step
     */
    if (step === 1) {
      return (
        <ContributionWrapper
          overlay={overlay}
          closeOverlay={closeOverlay}
          step={step}
          appElement={'body'}
        >
          <Content>
            <TermsList id="term-list">
              {this.props.crowdsale.terms && (
                <p className="terms">
                  Please take a minute to review the{' '}
                  <Link href={this.props.crowdsale.terms}>crowdsale contribution terms.</Link>
                </p>
              )}
              <ListHeader>To continue, please confirm the following:</ListHeader>
              <ListBody>
                {Object.keys(tos).map(tosKey => {
                  return (
                    <div className="row" key={tosKey}>
                      <Checkbox
                        isChecked={this.state[tosKey]}
                        onToggle={value => this.toggleTosCheckbox(tosKey, value)}
                        labelName={tos[tosKey]}
                        className={''}
                        id={tosKey}
                      />
                    </div>
                  )
                })}
              </ListBody>
            </TermsList>
            <ListFooter>
              <Button
                id="terms_button"
                trackEvent={this.props.slug}
                onClick={this.tosComplete}
                disabled={this.state.disableNextStep}
              >
                Continue
              </Button>
            </ListFooter>
          </Content>
        </ContributionWrapper>
      )
    }

    /**
     * Step 2 shows the users wallet and the contribution wallet with an option to copy the address in clipboard
     */
    if (step === 2) {
      return (
        <ContributionWrapper overlay={overlay} closeOverlay={closeOverlay} step={step}>
          <Content>
            <AlertWallet>
              <span className="icon-warning">!</span>
              <span>
                DON'T make your contribution from an exchange wallet, even if it's whitelisted, or
                you won't receive your tokens
              </span>
            </AlertWallet>
            <WalletInfo>
              Your <b>{walletType}</b> wallet is whitelisted
            </WalletInfo>
            <AddressInfo>
              <EthIcon seed={this.props.wallet.wallet_address} />
              <TheAddress>{this.props.wallet.wallet_address}</TheAddress>
            </AddressInfo>
            <ListHeader>
              Send contribution to this address<br />
            </ListHeader>
            <CopyAddress>
              <AddressInfo margin={'0px 8px'} width={'80%'}>
                <EthIcon seed={crowdsale.contribution_address} />
                <TheAddress>{crowdsale.contribution_address}</TheAddress>
              </AddressInfo>
              <CopyToClipboard
                text={crowdsale.contribution_address}
                onCopy={() => this.setState({ copied: true })}
              >
                <Button
                  style={{ borderRadius: 0 }}
                  id="copy_button"
                  trackEvent={`${this.props.slug} ${this.props.wallet.wallet_address}`}
                  title="COPY"
                >
                  {' '}
                  COPY{' '}
                </Button>
              </CopyToClipboard>
            </CopyAddress>
            {this.state.copied && (
              <AddressCopiedMessage>Address copied to clipboard!</AddressCopiedMessage>
            )}
            <br />
            <EthContrib>
              <p>
                You contributed{' '}
                <span className="eth">{crowdsale.user_eth_contributed || '0'} ETH</span>
                {activePhase &&
                  activePhase.user_limit &&
                  ` of maximum limit ${activePhase.user_limit} ETH`}
              </p>
            </EthContrib>
          </Content>
        </ContributionWrapper>
      )
    }
  }
}
