import React from 'react'
import './index.css'
import { Provider } from 'react-redux'
import * as ReactDOM from 'react-dom/client'

import App from './App'
import { store } from './services/store'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <Provider store={store}>
    <App />
  </Provider>
)
