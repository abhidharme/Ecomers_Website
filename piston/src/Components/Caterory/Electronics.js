import React, { useEffect, useState } from 'react'
import { useDispatch , useSelector } from 'react-redux';
import { fetchProdCategory } from '../../Redux/Products_Category/action';
import { Link } from 'react-router-dom';
import Navbar from '../Navbar';
import { Box , HStack  , Select ,Stack , Text , Heading , Image , useColorModeValue , Center , Flex , } from '@chakra-ui/react';
import Ele_Filter from '../Filters/Ele_Filter';
import Footer from '../Footer';



export const Electronics = () => {

const {prod_category:products} = useSelector((store)=>store.prodcategory)
  //console.log(prod_category)
const [dset , setDset] = useState();

  
const dispatch = useDispatch()
  useEffect(()=>{
      let params ={
        category: "electrnics",
      } 
      dispatch(fetchProdCategory(params))
     },[]);

     
     
     const sortarr = (e) =>{
        let d = e.target.value;
      
        let updated = products.sort((a,b)=>{
        if(d === "asc"){
          return a.price - b.price;
        }
        else if(d === "desc"){
          return b.price - a.price;
        }
        else if(d === "A - Z"){
          if (a.title > b.title)
          return 1;
          if (a.title < b.title)
          return -1;
        return a.title - b.title
      
        }
        else if(d === "rate"){
          return b.rating - a.rating;
        }
      })
      
      setDset([...updated]);
      
         // console.log("updated",updated);
      
       }
    
   

  return (
     <Box  bg='gray.100'>
     <Box ><Navbar/></Box>
     <Box> <Flex spacing='0px'>
     <Box width="20%"    bg={useColorModeValue('gray.50', 'gray.900')}
     color={useColorModeValue('gray.700', 'gray.200')} >
     <Ele_Filter/>
     </Box>
     <Box w='80%'  bg='blue.50' >
       <Center w="100%" h="50px" bg="red.300">
       <Select onChange={sortarr} >
       <option value="">Sort By</option>
             <option value='asc'>Price:Low-High</option>
             <option value='desc'>Price:High to low</option>
             <option value="rate">Rating: High to low</option>
             <option value="A - Z">A-Z</option>
         </Select>
       </Center> 
       <Box>
      <Stack display={{ md: "flex" }} flexDirection={{ md: "row" }}>
        <Box  bg={useColorModeValue('gray.50', 'gray.900')}
        color={useColorModeValue('gray.700', 'gray.200')}>
      <Flex flexWrap="wrap" justifyContent="space-around" >
        {products.map((product,i)=>{
          return (
            <ProductSimple
            key={i}
            image={product.image}
            title={product.title}
            price={product.price}/>
          )
        })}
      </Flex>
        </Box>
    </Stack>
    </Box>
     </Box>
   </Flex>
   <Footer/>
   </Box>
     
     </Box>
  )
}



function ProductSimple({key , image, title , price}) {
  return (
    <Center py={12}>
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
    </Center>
  );
}
