import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Main } from './components/Main'
import { Footer } from './components/Footer'
import { Navbar } from './components/Navbar'
import { Download } from './components/Download'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Main></Main>} />
        <Route path="/downloads" element={<Download></Download>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </React.StrictMode>
)