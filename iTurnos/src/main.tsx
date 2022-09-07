import React from 'react'
import ReactDOM from 'react-dom/client'

import { TurnosApp } from './TurnosApp';
import './index.css'
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <TurnosApp />
    </BrowserRouter>
  </React.StrictMode>
)
