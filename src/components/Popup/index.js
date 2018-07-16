import React, { Component } from 'react'
import ReactModal from 'react-modal'

import styles from './styles.scss'
import styled from 'styled-components'

const Content = styled.div`
  padding: ${props => (props.style && props.style.padding) || '0'};
`

const PopupBody = styled.div`
  /* stylelint-disable */
  background: white;
  box-shadow: 0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12),
    0 8px 10px -5px rgba(0, 0, 0, 0.3);
  border-radius: 2px;
`

ReactModal.setAppElement('body')

export default class Popup extends Component {
  constructor(props) {
    super(props)
    this.state = {
      closing: false,
    }
  }
  render() {
    return (
      <ReactModal
        isOpen={Boolean(this.props.show)}
        contentLabel="Popup"
        onRequestClose={() => {
          if (!this.state.closing) {
            this.setState({ closing: true })
            setTimeout(() => this.setState({ closing: false }), 300)
            return this.props.onClose()
          }
        }}
        overlayClassName={{
          base: styles.popupWrap,
          afterOpen: styles.popupWrapOpen,
          beforeClose: styles.popupWrapClose,
        }}
        bodyOpenClassName={styles.body}
        closeTimeoutMS={300}
        style={{
          overlay: {
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            display: 'flex',
            justifyContent: 'center',
          },
          content: {
            position: 'relative',
            top: 'auto',
            left: 'auto',
            right: 'auto',
            bottom: 'auto',
            border: 'auto',
            background: 'transparent',
            overflow: 'visible',
            WebkitOverflowScrolling: 'touch',
            borderRadius: '0',
            outline: 'none',
            padding: '0',
            width: 700,
            alignSelf: 'center',
          },
        }}
      >
        <form onSubmit={this.props.onSubmit} className={this.props.className}>
          <PopupBody
            key="animatedPopup"
            onClick={event => event.stopPropagation()}
            className={styles.popup}
            style={this.props.bodyStyle}
          >
            <div>{this.props.title}</div>
            <Content style={this.props.contentStyle}>{this.props.children}</Content>
          </PopupBody>
        </form>
      </ReactModal>
    )
  }
}
