import React, { Component } from 'react'
import moment from 'moment-timezone'
import Isvg from 'svg-inline-react'

import refreshIcon from 'assets/refresh_white.svg'
import { getTOS, setTOS } from 'helpers/localStorage'
import ContributionModal from 'components/ContributionModal'
import ProgressBar from 'components/ProgressBar'
import { Button, Link, RefreshButton } from 'components/styled'
import {
  Container,
  Tabs,
  TabButton,
  Content,
  TimeWrap,
  Title,
  MoneyWrap,
  SliderBalance,
  UserBalance,
  InfoText,
  EthTotal,
  TextWrap,
} from './styled.js'

import Countdown from 'components/Countdown'
import AnimatedNumber from 'components/AnimatedNumber'
import { getDecimalSeparator } from 'helpers'

export default class CrowdsaleInfo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      activeTab: 1,
      refreshing: false,
    }
    this.handleRefresh = this.handleRefresh.bind(this)
    this.toggleOverlay = this.toggleOverlay.bind(this)
    this.state = {
      overlay: false,
    }
  }

  componentDidMount() {
    this.setState({ activeTab: this.props.crowdsale.current_phase_index || 0 })
  }

  componentDidUpdate(prevProps) {
    if (
      prevProps.crowdsale &&
      prevProps.crowdsale.current_phase_index !== this.props.crowdsale.current_phase_index
    ) {
      this.setState({ activeTab: this.props.crowdsale.current_phase_index })
    }
  }

  toggleOverlay() {
    this.setState({ overlay: !this.state.overlay })
  }

  handleRefresh() {
    if (!this.state.refreshing) {
      console.log('refresh balance') // implement your own API call
      setTimeout(() => this.setState({ refreshing: false }), 1000)
    }
    this.setState({ refreshing: true })
  }

  render() {
    const { activeTab } = this.state
    const { guest, slug, pp_active, crowdsale, userLoaded, user } = this.props
    const { phases } = this.props.crowdsale

    const is_whitelisted = this.props.computed.isWhitelisted

    return (
      <div>
        {/**
         * A popup/modal window with the contribution stuff
         */
        !user.anonymous &&
          crowdsale && (
            <ContributionModal
              overlay={this.state.overlay}
              closeOverlay={this.toggleOverlay}
              wallet={user.wallet}
              setTos={setTOS}
              getTos={getTOS}
              crowdsale={crowdsale}
              slug={slug}
            />
          )}
        <Container>
          <Tabs>
            {phases.map((phase, index) => (
              <TabButton
                key={index}
                slug={slug}
                active={activeTab === index}
                onClick={() => this.setState({ activeTab: index })}
              >{`Phase ${index + 1}`}</TabButton>
            ))}
          </Tabs>

          {phases.map((phase, index) => (
            <Content key={index} active={activeTab === index}>
              <TimeWrap slug={slug}>
                {phase.pending && (
                  <div>
                    <Title>{`${phase.label} starts in`}</Title>
                    <Countdown timeLeft={phase.startTimeTo} styledTime />
                    <div>
                      {moment(phase.start_date)
                        .tz('Europe/Ljubljana')
                        .format('DD MMMM YYYY, hh:mm A z')}
                    </div>
                  </div>
                )}
                {phase.active && (
                  <div>
                    <Title>
                      {`${phase.label} ends in`} <span>Active</span>
                    </Title>
                    <Countdown timeLeft={phase.endTimeTo} styledTime />
                    <div>
                      {moment(phase.end_date)
                        .tz('Europe/Ljubljana')
                        .format('DD MMMM YYYY, hh:mm A z')}
                    </div>
                  </div>
                )}
                {phase.passed && (
                  <div>
                    <Title>{`${phase.label} has ended`}</Title>
                    <Countdown timeLeft={phase.endTimeTo} styledTime />{' '}
                    <div>
                      {moment(phase.end_date)
                        .tz('Europe/Ljubljana')
                        .format('DD MMMM YYYY, hh:mm A z')}
                    </div>
                  </div>
                )}
              </TimeWrap>

              {/** Pending phase guest text, but what do we show for logged in user? */
              guest &&
                phase.pending && (
                  <TextWrap>
                    This phase will be for whitelisted Priority Pass™ Members only.<br />
                    <br />
                    <Link to="/login">Log in</Link> to check your whitelist status.
                  </TextWrap>
                )}

              {!guest &&
                userLoaded &&
                !is_whitelisted && (
                  <TextWrap>
                    You are not whitelisted for this pre-sale because you were not an active
                    Priority Pass™ member at the time of the Priority check.
                  </TextWrap>
                )}

              {/** Active phase money status */
              !phase.passed && (
                <MoneyWrap>
                  {phase.active && (
                    <div>
                      <SliderBalance>
                        <EthTotal>
                          <AnimatedNumber
                            value={phase.total_eth_contributed}
                            decimals={2}
                            decimal={getDecimalSeparator()}
                          />{' '}
                          <small>ETH</small>
                        </EthTotal>
                        <br />contributed of{' '}
                        {`${phase.phase_cap && phase.phase_cap.toLocaleString()} ETH (${
                          phase.label
                        } cap)`}
                      </SliderBalance>
                      <ProgressBar value={phase.total_eth_contributed} max={phase.phase_cap} />
                    </div>
                  )}
                  {/** User stuff */
                  (userLoaded &&
                    guest &&
                    phase.active && (
                      <p>
                        <Button id="contribute_now_redirect_button" to={'/login'}>
                          Contribute now
                        </Button>
                      </p>
                    )) /** Logged in user stuff */ ||
                    (!guest && (
                      <div>
                        {/** This part makes sense for the active phase only */
                        phase.active && (
                          <div>
                            {is_whitelisted && (
                              <UserBalance>
                                You contributed{' '}
                                <RefreshButton
                                  title="Refresh contributed"
                                  refreshing={this.state.refreshing}
                                  onClick={this.handleRefresh}
                                >
                                  <Isvg src={refreshIcon} />
                                </RefreshButton>
                                <br />
                                <EthTotal refreshing={this.state.refreshing}>
                                  {(crowdsale.user_eth_contributed &&
                                    crowdsale.user_eth_contributed.toLocaleString()) ||
                                    '0'}{' '}
                                  <small>ETH</small>
                                </EthTotal>{' '}
                                {phase.user_limit &&
                                  `of maximum limit ${phase.user_limit.toLocaleString()} ETH`}
                              </UserBalance>
                            )}

                            <Button
                              id="contribute_now_button"
                              // trackEvent={name}
                              disabled={
                                phase.user_limit_reached ||
                                phase.cap_reached ||
                                (!guest && !is_whitelisted) ||
                                this.state.refreshing
                              }
                              onClick={this.toggleOverlay}
                            >
                              Contribute now
                            </Button>
                          </div>
                        )}
                        {/** If this is a future phase}*/
                        phase.pending &&
                          phase.user_limit && (
                            <UserBalance>
                              Your contribution limit for this phase is{' '}
                              {phase.user_limit.toLocaleString()} ETH
                            </UserBalance>
                          )}
                        {!is_whitelisted &&
                          pp_active && (
                            <InfoText warning>
                              You are not whitelisted<br />
                              <Link href="/">How to get whitelisted?</Link>
                            </InfoText>
                          )}

                        {!pp_active &&
                          !is_whitelisted && (
                            <InfoText warning>
                              You are not a Priority Pass™ Member<br />
                              <Link href="/">How to become a Priority Pass member?</Link>
                            </InfoText>
                          )}

                        {is_whitelisted &&
                          ((phase.user_limit &&
                          crowdsale.user_eth_contributed >= phase.user_limit && ( // over the limit
                              <InfoText warning>
                                You reached your limit for contributing. You can contribute again in
                                the next phase, Phase 2.
                              </InfoText>
                            )) || (
                            <InfoText>
                              {pp_active ? (
                                <span>
                                  You are a Priority Pass™ Member, you can contribute.<br />
                                </span>
                              ) : (
                                <span>
                                  You are whitelisted, you can contribute.<br />
                                </span>
                              )}
                            </InfoText>
                          ))}
                      </div>
                    ))}
                </MoneyWrap>
              )}
            </Content>
          ))}
        </Container>
      </div>
    )
  }
}
