import { createContext, ReactNode, useEffect, useState } from 'react'
import { API } from '../lib/axios'

interface TransactionProps {
  id: number
  description: string
  price: number
  category: string
  type: 'income' | 'outcome'
  createdAt: string
}

type CreateTransactionInput = Omit<TransactionProps, 'id' | 'createdAt'>

interface TransactionContextType {
  transactions: TransactionProps[]
  fetchTransactions: (query?: string) => Promise<void>
  createTransaction: (data: CreateTransactionInput) => Promise<void>
}

export const TransactionContext = createContext({} as TransactionContextType)

interface TransactionProviderProps {
  children: ReactNode
}

export function TransactionsProvider({ children }: TransactionProviderProps) {
  const [transactions, setTransactions] = useState<TransactionProps[]>([])

  async function fetchTransactions(query?: string) {
    const response = await API.get('/transactions', {
      params: {
        _sort: 'createdAt',
        _order: 'desc',
        q: query,
      },
    })

    setTransactions(response.data)
  }

  async function createTransaction(data: CreateTransactionInput) {
    const { description, price, category, type } = data

    const response = await API.post('/transactions', {
      description,
      price,
      category,
      type,
      createdAt: new Date(),
    })

    setTransactions((oldState) => [response.data, ...oldState])
  }

  useEffect(() => {
    fetchTransactions()
  }, [])

  return (
    <TransactionContext.Provider
      value={{ transactions, fetchTransactions, createTransaction }}
    >
      {children}
    </TransactionContext.Provider>
  )
}
