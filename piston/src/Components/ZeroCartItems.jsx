import { Box, Button, Center, Heading, Text } from '@chakra-ui/react';
import { InfoIcon } from '@chakra-ui/icons';
import {GiShoppingBag} from "react-icons/gi"
import { useNavigate } from 'react-router-dom';

export default function ZeroCartItems() {
const navi = useNavigate()

  return (
    
    <Box textAlign="center" py={10} px={6}>
      <InfoIcon boxSize={'50px'} color={'blue.500'} />
      <Heading as="h2" size="xl" mt={6} mb={2}>
        Zero Items In Cart
      </Heading>
      <Button onClick={()=>navi("/")}><GiShoppingBag/>  : Buy Now</Button>
    </Box>
  );
}