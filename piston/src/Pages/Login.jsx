import React from "react"
import { useDispatch , useSelector } from "react-redux";
import { useNavigate , Navigate} from "react-router-dom";
import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Stack,
    Link,
    Button,
    Heading,
    Text,
    useColorModeValue,
  } from '@chakra-ui/react';
import { loginUser } from "../Redux/LoginRedux/action";


export const Login = ()=> {

const [username , setUsername] = React.useState("");
const [password , setPassword]  = React.useState("");
const dispatch = useDispatch();

const {isAuthenticated,token} = useSelector((state) => state.login);
const navigate = useNavigate();

const handleSubmit = ()=>{
    const cred = {
        username,
        password
    }
   dispatch(loginUser(cred))
};

if(isAuthenticated){
    return <Navigate to="/"/>
}

    return(
        <>
        <Box></Box>
        <Box>
        <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}>
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'}>Sign in to your account</Heading>
        </Stack>
        <Box
          rounded={'lg'}
          boxShadow={'lg'}
          p={8}>
          <Stack spacing={4}>
            <FormControl id="username">
              <FormLabel>User Name</FormLabel>
              <Input type="text"  onChange={(e)=>setUsername(e.target.value)}/>
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input type="password" onChange={(e)=> setPassword(e.target.value)} />
            </FormControl>
            <br></br>
            <Stack spacing={10}>
              <Button
                bg={'blue.400'}
                color={'white'}
                _hover={{
                  bg: 'blue.500',
                }}
                onClick={handleSubmit}
                >
                Sign in
              </Button>
            </Stack>
            <Text align={'center'}>
            New user? <Link href="/signup" color={'blue.400'}>Sign-Up</Link>
          </Text>
          </Stack>
        </Box>
      </Stack>
    </Flex>
        </Box>
        </>
    )
}