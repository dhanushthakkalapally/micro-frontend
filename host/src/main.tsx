import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import Header from "layoutApp/Header";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import Footer from "layoutApp/Footer";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <Header />
    <App />
      <Footer/>
  </React.StrictMode>,
)
