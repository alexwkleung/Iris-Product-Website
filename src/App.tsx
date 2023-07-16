import React from 'react'
import ReactDOM from 'react-dom/client'
import { Main } from './components/Main'
import { Footer } from './components/Footer'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Main/>
    <Footer/>
  </React.StrictMode>
)