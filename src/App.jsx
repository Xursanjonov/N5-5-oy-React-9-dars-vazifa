import React, { Fragment } from 'react'
import { Route, Routes } from 'react-router-dom'
import Layout from './layout/Layout'
import Home from './pages/home/Home'
import Auth from './pages/auth/Auth'
import Admin from './pages/admin/Admin'
import Login from './pages/login/Login'
import Products from './pages/products/Products'
import ProductsDetails from './pages/products-details/ProductsDetails'

const App = () => {

  return (
    <Fragment>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='login' element={<Login />} />
          <Route path='products' element={<Products />} />
          <Route path='products/:id' element={<ProductsDetails />} />
          <Route path='/' element={<Auth />} >
            <Route path='admin' element={<Admin />} />
          </Route>
        </Route>
      </Routes>
    </Fragment>
  )
}

export default App