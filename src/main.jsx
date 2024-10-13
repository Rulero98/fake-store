import React from 'react'
import ReactDOM from 'react-dom/client'

import { FakeStore } from './FakeStore.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <FakeStore />
  </React.StrictMode>,
)
