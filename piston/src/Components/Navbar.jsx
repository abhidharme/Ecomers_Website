import {
  Box,
  Flex,
  Avatar,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useColorModeValue,
  Stack,
  useColorMode,
  Center,
  Link,
  Icon,
  Image
} from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { CartCounter } from './CartCounter';
import { BsCart4 } from "react-icons/bs"
import { Link as RouteLink , useNavigate} from 'react-router-dom';
import { Profile } from './Profile';
import { useDispatch } from 'react-redux';
import { logout } from '../Redux/LoginRedux/action';

export default function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();
  //const { isOpen, onOpen, onClose } = useDisclosure();
   const dispatch = useDispatch();
  const navi = useNavigate();

  return (
    <>
      <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <Box onClick={()=>navi('/')}>
          <Image
          objectFit={'cover'}
          rounded={'lg'}
           src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKgHIi3kFm58QXqi4E1JZScbG9RSkXGgs5uGb9iu1OXC3bnKbLCU3hWafR9zIZkiQ0_dA&usqp=CAU' w="100px" h="60px" />
          </Box>

          <Flex alignItems={'center'}>
            <Stack direction={'row'} spacing={7}>
            
              <Button>
                <Link as={RouteLink} to="/cart">
                  <Box position="relative" padding="0 0.5rem 0 0">
                    <CartCounter />
                    <Icon as={BsCart4} boxSize="2rem" />
                  </Box>
                </Link>
              </Button>

              <Button onClick={toggleColorMode}>
                {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
              </Button>

              <Menu>
                <MenuButton
                  as={Button}
                  rounded={'full'}
                  variant={'link'}
                  cursor={'pointer'}
                  minW={0}>
                  <Avatar
                    size={'sm'}
                    src={'https://avatars.dicebear.com/api/male/username.svg'}
                  />
                </MenuButton>
                <MenuList alignItems={'center'}>
                  <br />
                  <Center>
                    <Avatar
                      size={'2xl'}
                      src={'https://avatars.dicebear.com/api/male/username.svg'}
                    />
                  </Center>
                  <br />
                  <Center>
                    <p><Profile/></p>
                  </Center>
                  <br />
                  <MenuDivider />
                  <MenuItem>Your Orders</MenuItem>
                  <MenuItem>Account Settings</MenuItem>
                  <MenuItem onClick={()=>{dispatch(logout());navi('/login')}}>Logout</MenuItem>
                </MenuList>
              </Menu>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}