import React from 'react';
import ReactDOM from 'react-dom/client';
import { CounterApp } from './components/CounterApp';
import './styles.css'

// import { HelloWorldApp } from './HelloWorldApp';
// import { FirstApp } from './components/FirstApp';



ReactDOM.createRoot( document.getElementById('root')! ).render(
    <React.StrictMode>
       <CounterApp value={10} />
    </React.StrictMode>
)