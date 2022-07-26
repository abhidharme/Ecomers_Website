import React from 'react';
import Navbar from '../Components/Navbar';
import {
  Box,
  HStack,
  VStack,
  StackDivider,
  useColorModeValue,
  Center
} from '@chakra-ui/react'
import Carousal from '../Components/Carousal';
import { AllProducts } from '../Components/ALLProducts';
import { Paginationp } from '../Components/Paginationp';
import { CategoryList } from '../Components/CategoryList';
import Footer from '../Components/Footer';
import Loading from '../Components/Loading';




export const Homepage = () => {
  return (
    <div>
      <Loading />
      <Navbar />
      <br></br>
      <HStack spacing='25px'>

        <Box w='20%' h='2110px'
          bg={useColorModeValue('gray.50', 'gray.900')}
          color={useColorModeValue('gray.700', 'gray.200')}>
          <CategoryList />
        </Box>

        <Box w='80%' h='2100px' bg='teal.500' >
          <VStack
            divider={<StackDivider borderColor='gray.200' />}
            spacing={4}
            align='stretch'
          >
            <Box h='600px' bg={useColorModeValue('gray.50', 'gray.900')}
              color={useColorModeValue('gray.700', 'gray.200')}>
              <Carousal />
            </Box>
            <Box bg={useColorModeValue('gray.50', 'gray.900')}
              color={useColorModeValue('gray.700', 'gray.200')}>
              <AllProducts />
              <Paginationp />
            </Box>

          </VStack>
        </Box>
      </HStack>
      <Box>
        <Footer />
      </Box>
    </div>
  )
}
