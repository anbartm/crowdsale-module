import { css } from 'styled-components'

import { breakpoint } from 'components/style'

// TODO: Evaluate if we can update this reducer to include min and max widths,
// or completely replace it with the imperative strictMedia version below
// Susequently, we might make good use of a few more explicit media selectors:
// mobile_only (currently strictMedia.mobile), tablet_down (includes mobile and tablet)

const mediaUp = Object.keys(breakpoint).reduce((accumulator, label) => {
  accumulator[label] = (...args) =>
    css`
      @media (min-width: ${breakpoint[label][0]}px) {
        ${css(...args)};
      }
    `
  accumulator[`${label}_up`] = accumulator[label]
  return accumulator
}, {})

const mediaDown = Object.keys(breakpoint).reduce((accumulator, label) => {
  accumulator[`${label}_down`] = (...args) =>
    css`
      @media (max-width: ${breakpoint[label][1]}px) {
        ${css(...args)};
      }
    `
  return accumulator
}, {})

const strictMedia = {
  small_mobile: (...args) => css`
    @media (max-width: 375px) {
      ${css(...args)};
    }
  `,
  mobile_only: (...args) => css`
    @media (max-width: ${breakpoint.mobile[1]}px) {
      ${css(...args)};
    }
  `,
  medium_mobile: (...args) => css`
    @media (max-width: 459px) {
      ${css(...args)};
    }
  `,
  tablet_only: (...args) => css`
    @media (min-width: ${breakpoint.tablet[0]}px) and (max-width: ${breakpoint.tablet[1]}px) {
      ${css(...args)};
    }
  `,
  medium_size_device: (...args) => css`
    @media (min-width: 993px) and (max-width: 1160px) {
      ${css(...args)};
    }
  `,
  desktop_only: (...args) => css`
    @media (min-width: ${breakpoint.desktop[0]}px) and (max-width: ${breakpoint.desktop[1]}px) {
      ${css(...args)};
    }
  `,
  large_only: (...args) => css`
    @media (min-width: ${breakpoint.large[1]}px) {
      ${css(...args)};
    }
  `,
}

export const media = { ...mediaUp, ...mediaDown, ...strictMedia }
