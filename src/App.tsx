import { ThemeProvider } from 'styled-components'
import { Transactions } from './pages/Transactions'
import { defaultTheme } from './styles/themes/_default'
import { GlobalStyle } from './styles/_global'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />

      <Transactions />
    </ThemeProvider>
  )
}
