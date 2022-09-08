import { useContext } from 'react'
import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from 'phosphor-react'
import { TransactionContext } from '../../contexts/TransactionsContext'

import { SummaryCard, SummaryContainer } from './styles'

export function Summary() {
  const { transactions } = useContext(TransactionContext)

  const summary = transactions.reduce(
    (acc, transaction) => {
      switch (transaction.type) {
        case 'income':
          acc.income += transaction.price
          acc.total += transaction.price
          break
        case 'outcome':
          acc.outcome += transaction.price
          acc.total -= transaction.price
          break
        default:
          break
      }

      return acc
    },
    {
      income: 0,
      outcome: 0,
      total: 0,
    },
  )

  console.log(summary)

  return (
    <SummaryContainer>
      <SummaryCard>
        <header>
          <span>Entradas</span>
          <ArrowCircleUp size={32} color="#00b37e" />
        </header>

        <strong>R$ {summary.income}</strong>
      </SummaryCard>

      <SummaryCard>
        <header>
          <span>Saídas</span>
          <ArrowCircleDown size={32} color="#f75a68" />
        </header>

        <strong>R$ {summary.outcome}</strong>
      </SummaryCard>

      <SummaryCard variant="green">
        <header>
          <span>Total</span>
          <CurrencyDollar size={32} color="#fff" />
        </header>

        <strong>R$ {summary.total}</strong>
      </SummaryCard>
    </SummaryContainer>
  )
}
