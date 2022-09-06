import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/_default'
import { GlobalStyle } from './styles/_global'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <h1>Hello World</h1>
    </ThemeProvider>
  )
}
