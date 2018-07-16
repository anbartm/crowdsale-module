import styled from 'styled-components'

export const Label = styled.label`
  /* stylelint-disable */
  position: relative;
  padding-left: 35px;
  cursor: pointer;
  display: inline-block;
  height: 25px;
  line-height: 25px;
  font-size: 1rem;
  user-select: none;

  ::before {
    border-radius: 2px;
    content: '';
    left: 0;
    position: absolute;
    transition: border 0.25s, background-color 0.25s, width 0.2s 0.1s, height 0.2s 0.1s,
      top 0.2s 0.1s, left 0.2s 0.1s;
    z-index: 1;
  }

  ::after {
    content: '';
    left: 0;
    position: absolute;
    transition: border 0.25s, background-color 0.25s, width 0.2s 0.1s, height 0.2s 0.1s,
      top 0.2s 0.1s, left 0.2s 0.1s;
    z-index: 1;
  }
`
export const CheckboxInput = styled.input`
  position: absolute;
  opacity: 0;
  pointer-events: none;

  &:not(:checked) + label:before {
    width: 0;
    height: 0;
    border: 3px solid transparent;
    left: 6px;
    top: 10px;
    transform: rotateZ(37deg);
    transform-origin: 100% 100%;
  }

  &:checked + label:before {
    top: 3px;
    left: 1px;
    width: 5px;
    height: 10px;
    border-top: 2px solid transparent;
    border-left: 2px solid transparent;
    border-right: 2px solid white;
    border-bottom: 2px solid white;
    transform: rotate(40deg);
    backface-visibility: hidden;
    transform-origin: 100% 100%;
  }

  &:checked + label:after {
    top: 0;
    width: 18px;
    height: 18px;
    border: 2px solid #0099e5;
    background-color: #0099e5;
    z-index: 0;
  }

  &:not(:checked) + label:after {
    height: 18px;
    width: 18px;
    background-color: transparent;
    border: 2px solid #939393;
    top: 0;
    z-index: 0;
  }
`
