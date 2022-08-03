import { Box , Flex , Center , useColorModeValue } from '@chakra-ui/react'
import React from 'react'
import Navbar from '../Components/Navbar'
import Pay from './Pay'
import Payment from './Payment'

export const PaymentPage = () => {
  return (
    <Box id="backimg" h="650px" >
    <Box>
    <Navbar/>
    </Box>
    <Center>
<Box  bg={useColorModeValue('gray.50', 'gray.900')}
color={useColorModeValue('gray.700', 'gray.200')} >
    <Flex mt="50%">
  {/*    <Box><Payment/></Box>*/}
    <Box><Pay/></Box>
    </Flex>
 
    </Box>
    </Center>
    
    </Box>
  )
}
