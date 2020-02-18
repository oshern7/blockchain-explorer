import React from 'react'
import { Tab } from 'semantic-ui-react'
import TokenBalanceInfo from '../components/TokenBalanceInfo.js'
import TransactionsPane from '../components/TransactionsPane'
import TokenTransfersPane from '../components/TokenTransfersPane'
import MinedBlocksPane from '../components/MinedBlocksPane'

const TabbedContent = ({ address }) => {
  if (!address) return null
  const panes = [
    address.tokens
      ? {
        menuItem: 'Token balances',
        render: () => (
          <Tab.Pane as='div'>
            {address.tokens.map((token, key) => (
              <TokenBalanceInfo key={key} token={token} />
              ))}
          </Tab.Pane>
          )
      }
      : null,
    address.transactions
      ? {
        menuItem: 'Transactions',
        render: () => (
          <Tab.Pane as='div'><TransactionsPane address={address} /></Tab.Pane>
          )
      }
      : null,
    address.tokenTransfers
      ? {
        menuItem: 'Token transfers',
        render: () => (
          <Tab.Pane as='div'>
            <TokenTransfersPane address={address} />
          </Tab.Pane>
          )
      }
      : null,
    address.minedBlocks
      ? {
        menuItem: 'Mined blocks',
        render: () => (
          <Tab.Pane as='div'><MinedBlocksPane address={address} /></Tab.Pane>
          )
      }
      : null
  ]
  return <Tab menu={{ borderless: true }} panes={panes} />
}

export default TabbedContent
