import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "bootstrap/dist/css/bootstrap.css"
import"bootstrap/dist/js/bootstrap.js"
import './index.css'
import {BrowserRouter, Routes, Route} from "react-router"
import App from './App.jsx'
import Users from './pages/users.jsx'
import Signup from './pages/signup.jsx'
import Cards from './pages/cards.jsx'
import Products from './pages/products.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path='/users' element={<Users />}></Route>
      <Route path='/signup' element={<Signup/>}></Route>
      <Route path='/cards' element={<Cards/>}></Route>
      <Route path='/products' element={<Products/>}></Route>
    </Routes>
  </BrowserRouter>
  </StrictMode>,
)
