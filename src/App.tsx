import { ThemeProvider } from 'styled-components'
import { BrowserRouter } from 'react-router-dom'
import { useState } from 'react'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'
import { Router } from './Router'

export function App() {
  const [count, setCount] = useState(0)

  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
      <Router />
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  )
}
