import "./global.scss"
import React from 'react'
import ReactDOM from 'react-dom/client'
import { Card } from './components/Card'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Card />
  </React.StrictMode>,
)
