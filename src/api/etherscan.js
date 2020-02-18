import etherscanApi from 'etherscan-api'
import { config } from '../config'

const api = etherscanApi.init(config.etherscanApiKey)

export function getTokenTransfers (address) {
  return api.account.tokentx(address, null, 1, 'latest', 'desc')
}

export function getTransactions (address) {
  return api.account.txlist(address, 1, 'latest', 'desc')
}

export function getMinedBlocks (address) {
  return api.account.getminedblocks(address)
}

export function getEthSupply (resolve, reject) {
  api.stats.ethsupply()
    .then(result => resolve(result))
    .catch(error => reject(error))
}

export function getEthPrice (resolve, reject) {
  api.stats.ethprice()
    .then(result => resolve(result))
    .catch(error => reject(error))
}