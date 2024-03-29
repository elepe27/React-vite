import React from 'react'
import ReactDOM from 'react-dom/client'

import { TurnosApp } from './TurnosApp';
import './index.css'
import { BrowserRouter } from 'react-router-dom';


import { store } from './store';
import { Provider } from 'react-redux'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
    <BrowserRouter>
      <TurnosApp />
    </BrowserRouter>
    </Provider>
  </React.StrictMode>
)
