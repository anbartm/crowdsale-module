import React from 'react'
import moment from 'moment-timezone'
import { Unit, Time, Label } from 'components/Countdown/styled.js'

/**
 * Takes `seconds remaining` displays the seconds
 * countdown in a pretty format.
 * @param timeLeft Milliseconds remaining in countdown
 * @param noInfoText What to display if countdown reaches zero or the info is missing
 * @param timePrefix The time countdown is prefixed with this
 * @param timeSuffix The time countdown is suffixed with this
 */
const Countdown = ({
  timeLeft,
  noInfoText,
  timePrefix = '',
  timeSuffix = '',
  formatTime = undefined,
  styledTime = undefined,
}) => {
  const duration = moment.duration(timeLeft > 0 ? timeLeft : 0)
  if (duration.asSeconds() >= 0) {
    let res = [
      Math.floor(duration.asDays()),
      duration.get('hours'),
      duration.get('minutes'),
      duration.get('seconds'),
    ]

    if (styledTime) {
      /** Styled */
      return styledCountdown(res)
    } else {
      /** Default */
      return defaultCountdown(res, timeSuffix, timePrefix)
    }
  } else if (noInfoText) {
    return <span>{noInfoText}</span>
  } else {
    return null
  }
}

/** 10d 8h 37m 22s */
const defaultCountdown = (timeLeft, timeSuffix, timePrefix) => {
  const suffix = ['d', 'h', 'm', 's']

  let act = timeLeft[0]
  while (timeLeft.length && !act) {
    timeLeft.shift()
    suffix.shift()
    act = timeLeft[0]
  }
  timeLeft = timeLeft.map((partial, index) => `${partial}${suffix[index]}`).filter(p => p)

  return <span>{`${timePrefix}${timeLeft.join(' ')}${timeSuffix}`}</span>
}

/** Styled Time with labels*/
const styledCountdown = timeLeft => {
  const delimiter = ' : '
  const labels = ['DAYS', 'HRS', 'MINS', 'SECS']
  const noDelimiter = timeLeft.length - 1
  return timeLeft
    .map((partial, index) => {
      const formatPartial = (partial < 10 && `0${partial}`) || `${partial}`
      return (
        <Unit key={index + labels[index]}>
          <Time>
            {(index < noDelimiter && `${formatPartial}${delimiter}`) || `${formatPartial}`}
          </Time>
          <Label>{labels[index]}</Label>
        </Unit>
      )
    })
    .filter(p => p)
}

export default Countdown
