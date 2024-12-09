import './assets/main.css'

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

import 'line-awesome/dist/line-awesome/css/line-awesome.min.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Info from './pages/Info'
import Settings from './pages/Settings'
import AppBar from './components/AppBar'
import Home from './pages/Home'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <AppBar />
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<Info />} path="/info" />
        <Route element={<Settings />} path="/settings" />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
