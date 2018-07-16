import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './App.scss'
import classNames from 'classnames'
// import SVG from './components/SVG' // replace SVG with this component
import Home from './pages/Home'

class App extends Component {
  static contextTypes = {
    multiplytixEvent: PropTypes.func,
    multiplytixView: PropTypes.func,
  }
  render() {
    const { multiplytixEvent } = this.context
    const appClassName = classNames({
      App: true,
    })
    return (
      <div className={appClassName}>
        <Home />
      </div>
    )
  }
}

export default App
