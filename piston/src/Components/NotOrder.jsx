import { Box, Button, Heading, Text } from '@chakra-ui/react';
import { InfoIcon } from '@chakra-ui/icons';
import { IoMdCart } from "react-icons/io"
import { useNavigate } from 'react-router-dom';

export default function NotOrder() {
  const navi = useNavigate()

  return (
    <Box textAlign="center" py={10} px={6}>
      <InfoIcon boxSize={'50px'} color={'blue.500'} />
      <Heading as="h2" size="xl" mt={6} mb={2}>
        No Orders
      </Heading>
      <Button onClick={() => navi("/cart")}> <IoMdCart /> : Go To Cart Buy Now</Button>
    </Box>
  );
}