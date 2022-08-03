import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
    Box,
    Image
  } from '@chakra-ui/react'
import Navbar from '../Components/Navbar'
import { fetchOrderData } from '../Redux/Order/action'

export const Orders = () => {

    const dispatch = useDispatch();

    React.useEffect(() => {
       dispatch(fetchOrderData())
    },[]);

    const {order} = useSelector((state)=>state.order);

// console.log("or",order[0].product)


  return (
    <div>
    <Box><Navbar/></Box>
    <TableContainer>
    {order.map((el)=>(
  <Table key={el.id} variant='simple'>
    <Thead>
      <Tr>
        <Th>Image</Th>
        <Th>Title</Th>
        <Th>Price</Th>
      </Tr>
    </Thead>
    <Tbody>
{/*{el.product.description.map((items)=>(
    <Tr key={items.id}>
    <Td> <Image
    rounded={'lg'}
    height={150}
    width={150}
    objectFit={'contain'}
    src={items.currentProduct.image}
  /></Td>
  <Td>{items.currentProduct.title}</Td>
  <Td>{items.currentProduct.price}</Td>
  </Tr>
))}*/}
    </Tbody>
  </Table>
  ))}
</TableContainer>
    </div>
  )
}
