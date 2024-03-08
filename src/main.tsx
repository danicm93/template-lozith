import React from 'react'

import { ThemeProvider } from '@emotion/react'
import { CssBaseline } from '@mui/material'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import { theme } from '@/shared/styles'

import App from './app'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
