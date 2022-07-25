import React from 'react'
import {Routes , Route} from "react-router-dom"
import { Cart } from '../Pages/Cart'
import { Homepage } from '../Pages/Homepage'
import { PaymentPage } from '../Pages/PaymentPage'
import { Product_detail } from '../Pages/Product_detail'
import { Electronics } from './Caterory/Electronics'
import { Jacket } from './Caterory/Jacket'
import { Jwellary } from './Caterory/Jwellary'
import { Shoes } from './Caterory/Shoes'
import { Tshirt } from './Caterory/Tshirt'
import Loading from './Loading'

export const Allroutes = () => {
  return (
    <>
    <Routes>
    <Route path='/' element={<Homepage/>} />
    <Route path='/jwellary' element={<Jwellary/>} />
    <Route path='/tshirt' element={<Tshirt/>} />
    <Route path='/electronics' element={<Electronics/>} />
    <Route path='/jackets' element={<Jacket/>} />
    <Route path='/shoes' element={<Shoes/>} />
    <Route path='/details/:id' element={<Product_detail/>} />
    <Route path='/cart' element={<Cart/>} />
    <Route path='/payment' element={<PaymentPage/>} />
    </Routes>
    </>
  )
}
