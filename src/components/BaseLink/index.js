import React from 'react'
/**
 * Add react-router to enable link functionalities.
 * import { NavLink } from 'react-router-dom'
 */

import ReactGA from 'react-ga'
import { GAEvents } from 'helpers/constants'
import omit from 'lodash/omit'

/**
 * A base component for links.
 * @property {string} to Link to a route within the app
 * @property {string} href Link to an outside site
 * @property {boolean} disabled Whether the link is disabled or not
 * @property {boolean/string} trackEvent Trigger Google Analytics event dispatch + extra label data
 * @property {string} id Unique indentifier, also used for GAEvents
 */
export default class BaseLink extends React.Component {
  constructor(props) {
    super(props)
    this.handleOnClick = this.handleOnClick.bind(this)
  }

  handleOnClick(...args) {
    const { id, trackEvent, onClick } = this.props

    if (trackEvent) {
      let label = typeof trackEvent === 'string' ? trackEvent : ''
      ReactGA.event({
        ...GAEvents[id],
        label: `${GAEvents[id].label} ${label}`,
      })
    }

    if (onClick) onClick(...args)
  }

  render() {
    const { to, href, disabled, children, ...rest } = this.props

    /** Omit fixes trackEvent unknown prop warning */
    let theRest = omit(rest, ['trackEvent'])

    /* enable react-router 
      if (to) {
       return (
         <NavLink to={!disabled ? to : {}} {...theRest}>
           {children}
         </NavLink>
        )
      }
    */

    if (href) {
      return (
        <a
          href={!disabled ? href : 'javascript:void(0)'}
          {...theRest}
          target={this.props.target || '_blank'}
          rel="noopener noreferrer"
        >
          {children}
        </a>
      )
    }
    return (
      <a href="javascript:void(0)" {...theRest} onClick={!disabled ? this.handleOnClick : () => {}}>
        {children}
      </a>
    )
  }
}
