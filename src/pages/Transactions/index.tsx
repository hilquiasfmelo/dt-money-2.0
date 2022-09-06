import { Header } from '../../components/Header'
import { Summary } from '../../components/Summary'
import {
  PriceHighlight,
  TransactionsContainer,
  TransactionsTable,
} from './styles'

export function Transactions() {
  return (
    <div>
      <Header />
      <Summary />

      <TransactionsContainer>
        <TransactionsTable>
          <tbody>
            <tr>
              <td width="50%">Desenvolvimento de site</td>
              <td>
                <PriceHighlight variant="income">R$ 12.000,00</PriceHighlight>
              </td>
              <td>Vendas</td>
              <td>13/04/2022</td>
            </tr>

            <tr>
              <td width="50%">Macarronada</td>
              <td>
                <PriceHighlight variant="outcome">- R$ 60,00</PriceHighlight>
              </td>
              <td>Alimentação</td>
              <td>15/07/2022</td>
            </tr>
          </tbody>
        </TransactionsTable>
      </TransactionsContainer>
    </div>
  )
}
