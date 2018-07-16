import React, { Component } from 'react'

import { CheckboxInput, Label } from './styled'

/**
 * A classic checkbox component
 */
class Checkbox extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isChecked: props.isChecked,
    }

    this.defaultLabel = 'Click me'
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.isChecked !== this.state.isChecked) {
      this.setState({
        isChecked: nextProps.isChecked,
      })
    }
  }

  toggleChange = () => {
    this.props.onToggle(!this.props.isChecked, this.props.id, this.props.labelName)
  }

  render() {
    return (
      <span>
        <CheckboxInput
          type="checkbox"
          id={this.props.id}
          checked={this.state.isChecked}
          onChange={this.toggleChange}
        />
        <Label htmlFor={this.props.id}>
          {(!this.props.hideLabel && (this.props.labelName || this.defaultLabel)) || ''}{' '}
          {this.props.children}
        </Label>
      </span>
    )
  }
}

export default Checkbox
