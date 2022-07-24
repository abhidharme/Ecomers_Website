import React from 'react'
import {
  Box,
  Heading,
  Stack,
  Image,
  Text,
  Button,
  useColorModeValue,
  Link,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Flex,
  Center,
} from '@chakra-ui/react'
import { DeleteIcon } from '@chakra-ui/icons'
import { useDispatch, useSelector } from 'react-redux'
import Navbar from '../Components/Navbar'
import { deleteProduct } from '../Redux/Add_To_Cart/action'
import { AddIcon , MinusIcon } from '@chakra-ui/icons'


export const Cart = () => {

  const { cart } = useSelector((state) => state.cart)
  console.log(cart)
  const dispatch = useDispatch();


  const removeItem = (id) => {
    dispatch(deleteProduct(id))
  }

  return (
    <>
      <Box><Navbar /></Box>
      <Box>
        <Heading as="h2" size="xl" textAlign="center" >
          Cart
        </Heading>
        {/* {cart.length && cart.map(product => {
        return <CartItems key={product.id}
        id={product.id}
         title={product.title} 
         price={product.price} description={product.description} 
         image={product.image}
          removeItem={removeItem} />
      })}*/}
        <Box>
          <Table>
          <TableCaption>CART</TableCaption>
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
                cart.length && cart.map((el) => (
                  <Tr key={el.id} >
                    <Link to={`/details/${el.id}`} ><td>
                      <Image
                        rounded={'lg'}
                        height={150}
                        width={150}
                        objectFit={'contain'}
                        src={el.image}
                      />
                    </td></Link>
                    <Td><h5>{el.title}</h5></Td>
                    <Td>
                    <Box>
                    <Flex>
                    <Box><Button borderTopRightRadius="0" borderBottomRightRadius="0"  ><MinusIcon/></Button></Box>
                    <Box><Button as={"Text"} borderRadius="0">50</Button></Box>
                    <Box><Button borderTopLeftRadius="0" borderBottomLeftRadius="0"><AddIcon/></Button></Box>
                    </Flex>
                    </Box>
                    </Td>
                    <Td><h5>${el.price}</h5></Td>
                    <Td ><Button onClick={() => removeItem(el.id)}
                    >
                      <DeleteIcon />
                    </Button></Td>
                  </Tr>
                ))
              }
            </Tbody>
          </Table>
        </Box>
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
        >
          CHECKOUT
        </Button>
      </Box>
    </>
  )
}

// function CartItems({id , title , price , description ,image , removeItem}) {

//   return (
//     <Box border={"1px solid red"} rounded="lg" width={"fit-content"} margin="auto">
//       <Stack alignItems={"center"}
//         justifyContent="center"
//         direction={{ base: "column", md: "row" }}>
//         <Box border={"1px solid blue"}
//           width="300px"
//           height={"300px"}
//           position="relative"
//           padding={"0 1rem"}
//           _after={{
//             transition: 'all .3s ease',
//             content: '""',
//             w: '80%',
//             h: '80%',
//             pos: 'absolute',
//             top: "50%",
//             left: "50%",
//             transform: `translate(-50% , -50%)`,
//             backgroundImage: `url(${image})`,
//             filter: 'blur(15px)',
//             zIndex: -1,
//           }}  ><Image
//             rounded={'lg'}
//             height={300}
//             width={300}
//             objectFit={'contain'}
//             src={image}
//           />
//         </Box>
//         <Box border={"1px solid blue"} width="300px" height={"300px"}  >
//         <Stack>
//           <Heading as={"h3"} size="lg" textOverflow={"ellipsis"}>{title}</Heading>
//           <Box overflow={"hidden"} whiteSpace="nowrap" textOverflow={"ellipsis"}>
//           <Text>{description}</Text>
//           </Box>
//           <Text
//               color={useColorModeValue('gray.900', 'gray.400')}
//               fontWeight={300}
//               fontSize={'2xl'}>
//               ₹{price}
//             </Text>
//            <Button varient="solid" leftIcon={<DeleteIcon/>} onClick={()=>removeItem(id)} >Remove</Button>
//           </Stack>
//         </Box>
//       </Stack>
//     </Box>

//   )
// }
