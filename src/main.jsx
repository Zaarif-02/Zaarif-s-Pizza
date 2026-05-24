import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './index.css'

console.log('VITE_WP_API_URL', import.meta.env.VITE_WP_API_URL)
console.log('VITE_CPT_SLUG', import.meta.env.VITE_CPT_SLUG)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)