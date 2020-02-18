import React from 'react'
import { Table, Grid } from 'semantic-ui-react'
import * as api from '../api/web3Wrapper'
import TransactionType from '../components/TransactionType'

const TransactionsPane = ({ address }) => {
  if (!address.transactions) return null
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
            Type
          </Table.HeaderCell>
          <Table.HeaderCell>
            Value
          </Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {address.transactions.map((tr, key) => (
          <Table.Row key={key}>
            <Table.Cell>
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
              <TransactionType
                transaction={tr}
                address={address.address}
              />
            </Table.Cell>
            <Table.Cell textAlign='center'>
              {`${api.fromWei(tr.value, 'ether')} Ether`}
            </Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  )
}

export default TransactionsPane