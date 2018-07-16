import { fetchBlockchainData } from 'store/modules/blockchain'
import store from 'store'
/**
 * An object that will poll our API periodically to get the current
 * block number and dispatch the fetchBlockChain data action, which
 * gets the current block number and stores it in
 * store.blockchain.block_number
 */
export default class BlockchainClient {
  constructor(interval = 15000) {
    this.interval = interval
    this.start()
  }

  async start() {
    store.dispatch(fetchBlockchainData())
    this.counter = setInterval(() => {
      store.dispatch(fetchBlockchainData())
    }, this.interval)
  }

  clear() {
    clearInterval(this.counter)
  }
}
