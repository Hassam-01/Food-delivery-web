import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Store from './Store.js'

import {Provider} from "react-redux";

// Store.subscribe(()=>console.log(Store.getState()));

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={Store}> 
    <App />
    </Provider>
  </React.StrictMode>,
)
