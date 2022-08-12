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
  Text,
  Flex,
  Center
} from '@chakra-ui/react'
import Navbar from '../Components/Navbar'
import { fetchOrderData } from '../Redux/Order/action'
import NotOrder from '../Components/NotOrder'

export const Orders = () => {

  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchOrderData())
  }, []);

  const { order } = useSelector((state) => state.order);

  console.log("or", order.length)


  return (
    <div>
      <Box><Navbar /></Box>
      {order.length == 0 ? <NotOrder /> :
        <Center>
          <TableContainer>
            {order.map((el, idd) => (
              <Table mt={'20px'} border='1px solid #8f314f' key={el.id} variant='simple'>
                <TableCaption bg='teal'>Name: {el.token.card.name}</TableCaption>
                <TableCaption bg='teal'>Address: {el.token.card.address_line1},{el.token.card.address_zip} </TableCaption>
                <Thead>
                  <Tr>
                    <Th bg='#124b77'>{idd + 1}. Products</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {el.product.description.map((items, i) => (
                    <Tr key={items.id}>
                      <Td> <Flex>
                        <Box><Text>{i + 1}. {items}</Text></Box>
                      </Flex></Td>
                    </Tr>
                  ))}
                </Tbody>
                <Tfoot>
                  <Tr>
                    <Th color='#ffd132'><Text>Total Price : $ {el.product.price} </Text></Th>
                  </Tr>
                </Tfoot>
                <br></br>
              </Table>
            ))}
          </TableContainer>
        </Center>
      }
    </div>
  )
}
