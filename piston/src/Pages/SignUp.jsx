import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
} from '@chakra-ui/react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import Navbar from "../Components/Navbar";
import { Register } from "../Redux/SignupRedux/action";

export const SignUp = () => {

  const dispatch = useDispatch();
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [description, setDesc] = useState("");
  const [mobile, setMobile] = useState("");
  const [name, setName] = useState("");

  const { isAuthention } = useSelector((store) => store.sign);
  const navigate = useNavigate();
  if (isAuthention) {
    return <Navigate to="/login" />
  }
  const handleSubmit = () => {
    const payload = {
      name,
      email,
      password,
      username,
      mobile,
      description
    }

    dispatch(Register(payload))
  }


  return (
    <>
      <Flex
        minH={'100vh'}
        align={'center'}
        justify={'center'}>
        <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
          <Stack align={'center'}>
            <Heading fontSize={'4xl'} textAlign={'center'}>
              Sign up
            </Heading>
          </Stack>
          <Box
            rounded={'lg'}

            boxShadow={'lg'}
            p={8}>
            <Stack spacing={4}>
              <FormControl id="firstName" isRequired>
                <FormLabel>Enter Name</FormLabel>
                <Input type="text" onChange={(e) => setName(e.target.value)} />
              </FormControl>
              <FormControl id="email" isRequired>
                <FormLabel>Email address</FormLabel>
                <Input type="email" onChange={(e) => setEmail(e.target.value)} />
              </FormControl>
          //---
              <FormControl id="descriptiom" isRequired>
                <FormLabel>Description</FormLabel>
                <Input type="text" onChange={(e) => setDesc(e.target.value)} />
              </FormControl>
              <FormControl id="username" isRequired>
                <FormLabel>Enter Username</FormLabel>
                <Input type="text" onChange={(e) => setUsername(e.target.value)} />
              </FormControl>
              <FormControl id="password" isRequired>
                <FormLabel>Password</FormLabel>
                <InputGroup>
                  <Input type={"password"} onChange={(e) => setPassword(e.target.value)} />
                </InputGroup>
              </FormControl>
          //---
              <FormControl id="mobile" isRequired>
                <FormLabel>Enter Mobile</FormLabel>
                <Input type="number" onChange={(e) => setMobile(e.target.value)} />
              </FormControl>
          //---
              <Stack spacing={10} pt={2}>
                <Button
                  loadingText="Submitting"
                  size="lg"
                  bg={'blue.400'}
                  color={'white'}
                  _hover={{
                    bg: 'blue.500',
                  }} onClick={handleSubmit}>
                  Sign up
                </Button>
              </Stack>
              <Stack pt={6}>
                <Text align={'center'}>
                  Already a user? <Link to='/login' color={'blue.400'}>Login</Link>
                </Text>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    </>
  )


}
