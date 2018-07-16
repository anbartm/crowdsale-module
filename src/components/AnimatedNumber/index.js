import React from 'react'
import CountUp from 'react-countup'

/**
 * A component that animates/counts up to a number
 * In our case the ETH collected sum
 */
export default class AnimatedNumber extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      start: 0,
      end: props.value,
    }
  }
  componentWillReceiveProps(newProps) {
    if (newProps.value !== this.props.value) {
      this.setState({
        start: this.props.value,
        end: newProps.value,
      })
    }
  }
  render() {
    return <CountUp start={this.state.start} end={this.state.end} {...this.props} />
  }
}
