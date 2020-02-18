import Web3 from 'web3'
import { config } from '../config.js'

const web3 = new Web3(new Web3.providers.HttpProvider(`https://mainnet.infura.io/${config.infuraApiKey}`))

export function getBlockNumber (cb) {
  web3.eth.getBlockNumber(((error, result) => { 
    if (error) console.error(error.message)
    if (result) cb(result)
  }))
}

export function getTransaction (txHash, cb) {
  if (!web3.utils.isHex(txHash)) {
    const error = new Error(`${txHash} is not a valid txHash`, txHash)
    cb(error)
    return
  } 
  web3.eth.getTransactionReceipt(txHash, (error, receipt) => {
    if (error) {
      cb(error)
    } else {
      web3.eth.getTransaction(txHash, (error, transaction) => {
        cb(error, {transaction, receipt})
      })
    }
  })
}

export function getBlock (number, cb) {
  web3.eth.getBlock(number, cb)
}

export function fromWei (value, unit = 'ether') {
  return web3.utils.fromWei(value, unit)
}

export function isAddress(address) {
  return web3.utils.isAddress(address)
}
