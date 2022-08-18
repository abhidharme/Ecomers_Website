import { Box } from '@chakra-ui/react'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { CircularProgress } from '@chakra-ui/react'


import { Stack, Text, Heading, Image, useColorModeValue, Center, Flex, } from '@chakra-ui/react'
import { fetchProducts } from '../Redux/Products/action'
import { Link } from 'react-router-dom'
// import { useSearchParams } from 'react-router-dom'




export const AllProducts = () => {

  const { products } = useSelector((store) => store.ecomData)
  const { loading } = useSelector((store) => store.ecomData)

  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchProducts())
  }, [])

  // console.log(loading)


  return (
    <Box>
      <Center>
        {loading && <CircularProgress value={59} size='150px' isIndeterminate color='green.300' />}
      </Center>
      <Stack display={{ md: "flex" }} flexDirection={{ md: "row" }}>
        <Box>
          <Flex flexWrap="wrap" justifyContent="space-around" >
            {products.map((product, i) => {
              return (
                <ProductSimple
                  key={i}
                  id={product.id}
                  image={product.image}
                  title={product.title}
                  price={product.price} />
              )
            })}
          </Flex>
        </Box>
      </Stack>
    </Box>
  )
}


function ProductSimple({ key, id, image, title, price }) {
  return (
    <Center py={12}>
      <Link style={{ textDecoration: "none" }} to={`/details/${id}`} >
        <Box
          role={'group'}
          p={6}
          maxW={'330px'}
          w={'full'}
          bg={useColorModeValue('white', 'gray.800')}
          boxShadow={'2xl'}
          rounded={'lg'}
          pos={'relative'}
          zIndex={1}>
          <Box
            rounded={'lg'}
            mt={-12}
            pos={'relative'}
            height={'230px'}
            _after={{
              transition: 'all .3s ease',
              content: '""',
              w: 'full',
              h: 'full',
              pos: 'absolute',
              top: 5,
              left: 0,
              backgroundImage: `url(${image})`,
              filter: 'blur(15px)',
              zIndex: -1,
            }}
            _groupHover={{
              _after: {
                filter: 'blur(20px)',
              },
            }}>
            <Image
              rounded={'lg'}
              height={230}
              width={282}
              objectFit={'content'}
              src={image}
            />
          </Box>
          <Stack pt={10} align={'center'}>

            <Heading fontSize={'2xl'} fontFamily={'body'} fontWeight={500}>
              {title}
            </Heading>
            <Stack direction={'row'} align={'center'}>
              <Text fontWeight={800} fontSize={'xl'}>
                ${price}
              </Text>
              <Text textDecoration={'line-through'} color={'gray.600'}>
                $199
              </Text>
            </Stack>
          </Stack>
        </Box>
      </Link>
    </Center>
  );
}
