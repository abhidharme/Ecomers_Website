import React from 'react'
import {Routes , Route} from "react-router-dom"
import { Cart } from '../Pages/Cart'
import { Homepage } from '../Pages/Homepage'
import { Login } from '../Pages/Login'
import { Orders } from '../Pages/Orders'
import { PaymentPage } from '../Pages/PaymentPage'
import { Product_detail } from '../Pages/Product_detail'
import { SignUp } from '../Pages/SignUp'
import { Electronics } from './Caterory/Electronics'
import { Jacket } from './Caterory/Jacket'
import { Jwellary } from './Caterory/Jwellary'
import { Shoes } from './Caterory/Shoes'
import { Tshirt } from './Caterory/Tshirt'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'
const PrivateRoute = ({ isAuthenticated  , children="nothing"}) =>{
  return isAuthenticated ? children : <Navigate to="/login"  />
}



export const Allroutes = () => {

  const { isAuthenticated } = useSelector((state) => state.login);

  return (
    <>
    <Routes>
    <Route path="/cart" element={
      <PrivateRoute isAuthenticated={isAuthenticated}><Cart/></PrivateRoute>} />
      <Route path="/orders" element={
        <PrivateRoute isAuthenticated={isAuthenticated}><Orders/></PrivateRoute>} />
    <Route path='/' element={<Homepage/>} />
    <Route path='/jwellary' element={<Jwellary/>} />
    <Route path='/tshirt' element={<Tshirt/>} />
    <Route path='/electronics' element={<Electronics/>} />
    <Route path='/jackets' element={<Jacket/>} />
    <Route path='/shoes' element={<Shoes/>} />
    <Route path='/details/:id' element={<Product_detail/>} />
    <Route path='/payment' element={<PaymentPage/>} />
    <Route path='/signup' element={<SignUp/>} />
    <Route path='/login' element={<Login/>} />
    </Routes>
    </>
  )
}
