import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { withMultiplytix } from 'multiplytix-react'

import CrowdsaleInfo from 'components/CrowdsaleInfo'

class Home extends PureComponent {
  static propTypes = {
    multiplytixEvent: PropTypes.func,
    multiplytixView: PropTypes.func,
  }
  componentDidMount() {
    const { multiplytixView } = this.props
    multiplytixView('/')
  }
  render() {
    /**
     * Mock static data
     */
    const mockData = {
      slug: 'primary',
      user: {
        anonymous: false,
        wallet: {
          wallet_type: 'ledger',
          wallet_address: '0x6BD61c584a851F582780Db4029799ebe96283C0a', // random wallet
        },
      },
      guest: false,
      crowdsale: {
        contribution_address: '0xa558475680f0FAFd6048B702b9334344236F86b4', // random wallet
        phases: [
          {
            pending: false,
            active: true,
            is_published: true,
            label: 'Phase 1',
            startTimeTo: 2513251235, // implement your own time feed function
            start_date: '2018-06-23T13:43:44.000000Z',
            endTimeTo: 2513251235, // implement your own time feed function
            end_date: '2018-08-30T13:43:44.000000Z',
            total_eth_contributed: 35,
            phase_cap: 64,
          },
          {
            pending: true,
            active: false,
            passed: false,
            label: 'Phase 2',
            startTimeTo: 2513251235, // implement your own time feed function
            start_date: '2018-08-30T13:43:44.000000Z',
            endTimeTo: 2513251235, // implement your own time feed function
            end_date: '2018-08-30T13:43:44.000000Z',
            total_eth_contributed: 64,
            phase_cap: 64,
          },
        ],
      },
      computed: {
        isWhitelisted: true,
      },
    }

    return (
      <div className="Home">
        <CrowdsaleInfo {...mockData} />
      </div>
    )
  }
}

export default withMultiplytix(Home)
