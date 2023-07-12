import React from 'react'
import ReactDOM from 'react-dom/client'
import Users from './Users.tsx'
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Users message={"Dhanush is great"} />
  </React.StrictMode>,
)
