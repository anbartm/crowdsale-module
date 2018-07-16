import React from 'react'
import styled from 'styled-components'
import { color } from 'components/style'

const Progress = styled.progress`
  width: 100%;
  appearance: none;
  border: none;
  background-size: auto;
  height: 18px;
  margin-bottom: 24px;

  ::-webkit-progress-bar {
    background: ${color.lightGray};
  }

  ::-webkit-progress-value {
    background: ${color.success};
    transition: 0.4s linear;
    transition-property: width, background-color;
  }

  ::-moz-progress-bar {
    background: ${color.success};
  }

  ::-ms-fill {
    background: ${color.success};
  }
`

export default class ProgressBar extends React.Component {
  render() {
    return <Progress value={this.props.value} max={this.props.max} />
  }
}
