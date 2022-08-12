import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
  useColorModeValue,
  Box,
  Flex,
  Center,
  Image,
  Text
} from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom';



export default function Checkout({ cart }) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  var navigate = useNavigate()

  return (
    <Box>

      <Button
        rounded={'none'}
        w={'full'}
        mt={8}
        size={'lg'}
        py={'7'}
        bg={useColorModeValue('gray.900', 'gray.50')}
        color={useColorModeValue('white', 'gray.900')}
        textTransform={'uppercase'}
        _hover={{
          transform: 'translateY(2px)',
          boxShadow: 'lg',
        }}
        onClick={onOpen}
      >
        CHECKOUT
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Confirm Purchase</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {
              cart.map((el) => (
                <Box key={el.id} mb="1rem">

                  <Flex>
                    <Box>
                      <Image border={'1px solid black'} rounded='lg' src={el.currentProduct.image} objectFit="contain" alt="product image" boxSize={"100px"} /></Box>
                    <Box />

                    <Center><Box maxW={'250px'} ml='1rem' >
                      <Text fontSize={'lg'}>{el.currentProduct.title}</Text>
                    </Box>
                    </Center>
                  </Flex>

                </Box>
              ))
            }

          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={() => { onClose(); navigate("/payment") }}>
              Confirm
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  )
}