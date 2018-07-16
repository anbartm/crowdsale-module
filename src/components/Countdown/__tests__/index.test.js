import React from 'react'
import Countdown from '..'
import { shallow } from 'enzyme'

describe('<Countdown />', () => {
  it(`should display time left in a pretty way`, () => {
    let wrapper = shallow(<Countdown timeLeft={3535833} />)
    expect(wrapper).toHaveText('58m 55s')
  })
  it(`should display a suffix and a prefix`, () => {
    let wrapper = shallow(<Countdown timeLeft={3535833} timePrefix="Starts in " timeSuffix="!" />)
    expect(wrapper).toHaveText('Starts in 58m 55s!')
  })
})
