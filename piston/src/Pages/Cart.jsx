import React, { useState } from 'react'
import {
  Box,
  Image,
  Button,
  Link,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Flex,
} from '@chakra-ui/react'
import { DeleteIcon } from '@chakra-ui/icons'
import { useDispatch, useSelector } from 'react-redux'
import Navbar from '../Components/Navbar'
import { deleteProduct, patchProduct } from '../Redux/Add_To_Cart/action'
import { AddIcon, MinusIcon } from '@chakra-ui/icons'
import Checkout from '../Components/Checkout'
import LoadingCart from '../Components/LoadingCart'
import ZeroCartItems from '../Components/ZeroCartItems'


export const Cart = () => {

  var { cart } = useSelector((state) => state.cart)
  const [quantity, setQuantity] = useState(1);

  const dispatch = useDispatch();



  const removeItem = (id) => {
    dispatch(deleteProduct(id))
  }


  const AddQtyItem = (id) => {
    setQuantity(quantity + 1)
    dispatch(patchProduct(id, quantity))
  }

  const DecreQtyItem = (id) => {
    if (quantity > 1) {
      setQuantity(quantity - 1)
    }
    dispatch(patchProduct(id, quantity))
  }

  return (
    <>
      <Box>
        <LoadingCart />
        <Navbar /></Box>
      <Box>
        <Box>
          {
            cart.length == 0 ? <ZeroCartItems /> :
              <Table>
                <Thead>
                  <Tr >
                    <Th>Item Image</Th>
                    <Th>Name</Th>
                    <Th>Total Quantity</Th>
                    <Th>Total Price</Th>
                    <Th>Remove</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {
                    cart.map((el) => (
                      <Tr key={el.id} >
                        <Link to={`/details/${el.id}`} ><td>
                          <Image
                            rounded={'lg'}
                            height={150}
                            width={150}
                            objectFit={'contain'}
                            src={el.currentProduct.image}
                          />
                        </td></Link>
                        <Td><h5>{el.currentProduct.title}</h5></Td>
                        <Td>
                          <Box>
                            <Flex>
                              {el.quantity != 1 ? <Box><Button borderTopRightRadius="0" borderBottomRightRadius="0" onClick={() => DecreQtyItem(el.id)}  ><MinusIcon /></Button></Box> : <Box><Button isDisabled borderTopRightRadius="0" borderBottomRightRadius="0" onClick={() => DecreQtyItem(el.id)}  ><MinusIcon /></Button></Box>}
                              <Box><Button as={"Text"} borderRadius="0">{el.quantity}</Button></Box>
                              <Box><Button borderTopLeftRadius="0" borderBottomLeftRadius="0" onClick={() => AddQtyItem(el.id)}><AddIcon /></Button></Box>
                            </Flex>
                          </Box>
                        </Td>
                        <Td><h5>${el.currentProduct.price * el.quantity}</h5></Td>
                        <Td ><Button onClick={() => removeItem(el.id)}
                        >
                          <DeleteIcon />
                        </Button></Td>
                      </Tr>
                    ))
                  }
                </Tbody>
              </Table>
          }
        </Box>
        <Box><Checkout cart={cart} /></Box>
      </Box>
    </>
  )
}


