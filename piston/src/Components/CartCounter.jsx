import React, { useEffect } from 'react'
import { Box } from '@chakra-ui/react'
import { useSelector } from 'react-redux/es/hooks/useSelector'
import { useDispatch } from 'react-redux'
import { fetchCartData } from '../Redux/Add_To_Cart/action'
import { useColorModeValue } from '@chakra-ui/react'
export const CartCounter = () => {

  const dispatch = useDispatch();
  // const {isADD} = useSelector((state)=>state.ecomData)


  const { cart } = useSelector((state) => state.cart)

  useEffect(() => {
    if (cart?.length === 0) {
      dispatch(fetchCartData())
    }
  }, [cart?.length, dispatch])


  return (
    <Box textColor={"white"}
      bg={useColorModeValue('red.300', 'red.900')}
      color={useColorModeValue('red.700', 'red.200')}
      borderRadius="50%"
      textAlign="center"
      height="20px"
      paddingBottom="20px"
      position={"absolute"}
      right="2"
      top={"-2"}
    >
      <Box padding="1px 5px 15px 5px">
        {cart?.length ? cart.length : 0}
      </Box>
    </Box>
  )
}
