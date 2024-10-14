import React from 'react'
import ReactDOM from 'react-dom/client'

import { Provider } from 'react-redux'

import { FakeStore } from './FakeStore.jsx'
import { store } from './store/store.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <FakeStore />
    </Provider>
  </React.StrictMode>,
)
