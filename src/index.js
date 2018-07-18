import React from 'react'
import { render } from 'react-snapshot'
import { Provider as MulticatProvider } from 'multicat-react'
import './index.scss'
import App from './App'
import registerServiceWorker from './registerServiceWorker'

const rootEl = document.getElementById('root')

const GOOGLE_ANALYTICS_ID = process.env.REACT_APP_GOOGLE_ANALYTICS_ID
const GOOGLE_REMARKETING_TAG = process.env.REACT_APP_GOOGLE_REMARKETING_TAG
const MIXPANEL_ID = process.env.REACT_APP_MIXPANEL_ID
const MIXPANEL_CUSTOM_LIB_URL = process.env.REACT_APP_MIXPANEL_LIB_URL
const HOTJAR_ID = process.env.REACT_APP_HOTJAR_ID
const FACEBOOK_PIXEL_ID = process.env.REACT_APP_FACEBOOK_PIXEL_ID
const TWITTER_ID = process.env.REACT_APP_TWITTER_ID
const PINTEREST_ID = process.env.REACT_APP_PINTEREST_ID
const REDDIT_PIXEL_Q = process.env.REACT_APP_REDDIT_PIXEL_Q
const REDDIT_PIXEL_S = process.env.REACT_APP_REDDIT_PIXEL_S

const multicatConfig = {
  google_analytics: GOOGLE_ANALYTICS_ID,
  google_remarketing: GOOGLE_REMARKETING_TAG,
  mixpanel: MIXPANEL_ID,
  mixpanel_lib: MIXPANEL_CUSTOM_LIB_URL,
  hotjar: HOTJAR_ID,
  facebook_pixel: FACEBOOK_PIXEL_ID,
  twitter_pixel: TWITTER_ID,
  pinterest_pixel: PINTEREST_ID,
  reddit_pixel_q: REDDIT_PIXEL_Q,
  reddit_pixel_s: REDDIT_PIXEL_S,
}

render(
  <MulticatProvider config={multicatConfig}>
    <App />
  </MulticatProvider>,
  rootEl
)

if (module.hot) {
  module.hot.accept('./App', () => {
    render(
      <MulticatProvider config={multicatConfig}>
        <App />
      </MulticatProvider>,
      rootEl
    )
  })
}

registerServiceWorker()
