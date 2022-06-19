import React from 'react'
import ReactDOM from 'react-dom/client'



import 'bulma/css/bulma.min.css'
import { CountryApp } from './CountryApp'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <CountryApp />
  </React.StrictMode>
)
