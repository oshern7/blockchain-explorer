import React from 'react'
import { Table, Grid } from 'semantic-ui-react'
import moment from 'moment'
import TransactionType from '../components/TransactionType'

const TokenTransfersPane = ({ address }) => {
  if (!address.tokenTransfers) return null
  return (
    <Table celled>
      <Table.Header>
        <Table.Row textAlign='center'>
          <Table.HeaderCell>
            Tx
          </Table.HeaderCell>
          <Table.HeaderCell>
            Block
          </Table.HeaderCell>
          <Table.HeaderCell>
            Age
          </Table.HeaderCell>
          <Table.HeaderCell>
            Type
          </Table.HeaderCell>
          <Table.HeaderCell>
            Value
          </Table.HeaderCell>
          <Table.HeaderCell>
            Token
          </Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {address.tokenTransfers.map((tr, key) => (
          <Table.Row key={key}>
            <Table.Cell width={10}>
              <Grid verticalAlign='middle'>
              <Grid.Column>
                <Grid.Row>
                  <strong>TxHash:</strong>
                  <p>{tr.hash}</p>
                </Grid.Row>
                <Grid.Row>
                  <strong>From:</strong>
                  <p>{tr.from}</p>
                </Grid.Row>
                <Grid.Row>
                  <strong>To:</strong>
                  <p>{tr.to}</p>
                </Grid.Row>
                </Grid.Column>
              </Grid>
            </Table.Cell>
            <Table.Cell>
              {tr.blockNumber}
            </Table.Cell>
            <Table.Cell>
              {moment(tr.timeStamp * 1000).fromNow()}
            </Table.Cell>
            <Table.Cell>
              <TransactionType
                transaction={tr}
                address={address.address}
              />
            </Table.Cell>
            <Table.Cell textAlign='center'>
              {`${tr.value / Math.pow(10, tr.tokenDecimal)} ${tr.tokenSymbol}`}
            </Table.Cell>
            <Table.Cell textAlign='center'>
              {tr.tokenName || 'ERC20'}
            </Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  )
}

export default TokenTransfersPane