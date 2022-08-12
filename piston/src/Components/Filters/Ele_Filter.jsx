import React, {  useState, useEffect } from 'react';
import {
  Box,
  Text,
  Checkbox,
  CheckboxGroup,
  VStack
} from '@chakra-ui/react';
import {
  Menu,
  MenuButton,
  MenuList,
  MenuOptionGroup,
  MenuDivider,
  Button
} from '@chakra-ui/react'
import { useSearchParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { fetchProdCategory } from '../../Redux/Products_Category/action';

export default function Ele_Filter() {

  const [searchParams, setsearchParams] = useSearchParams()
  const [genderValues, setGenderValues] = useState(searchParams.getAll('gender') || []);
  const [colorValues, setColorValues] = useState(searchParams.getAll('color') || []);


  const GenderHandler = (values) => {
    setGenderValues(values)
  }

  const ColorHandler = (values) => {
    setColorValues(values)
  }


  const dispatch = useDispatch()

  useEffect(() => {
    if (searchParams) {
      setsearchParams({ color: colorValues, gender: genderValues }, { replace: true })
    }
    let params = {
      category: "electrnics",
      gender: searchParams.getAll("gender"),
      color: searchParams.getAll("color")
    }
    dispatch(fetchProdCategory(params))
  }, [setsearchParams, dispatch, searchParams, colorValues, genderValues])




  return (
    <Box>
      <Box display={{ base: 'none', md: "block" }} p="1rem 2rem" >
        <Text fontSize="2xl" >Filters</Text>
        <Text>Gender</Text>
        <br></br>
        <CheckboxGroup colorScheme='green'
          defaultValue={genderValues}
          onChange={GenderHandler}>
          <VStack alignItems={"baseline"}>
            <Checkbox value="men">Men's</Checkbox>
            <Checkbox value="female">Women's</Checkbox>
            <Checkbox value="Both">Men's/Women's</Checkbox>
          </VStack>
        </CheckboxGroup>
      </Box>
      <Box display={{ base: 'none', md: "block" }} p="1rem 2rem">
        <Text>Color</Text>
        <br></br>
        <CheckboxGroup colorScheme='green'
          defaultValue={colorValues}
          onChange={ColorHandler}>
          <VStack alignItems={"baseline"}>
            <Checkbox value="Black">black</Checkbox>
            <Checkbox value="Blue">blue</Checkbox>
            <Checkbox value='Golden'>golden</Checkbox>
            <Checkbox value='Silver'>silver</Checkbox>
          </VStack>
        </CheckboxGroup>
      </Box>

      <Box display={{ base: 'block', md: "none" }} p="0rem 2rem">
        <Menu closeOnSelect={false}>
          <MenuButton as={Button} colorScheme='blue'>
            Filters
          </MenuButton>
          <MenuList minWidth='240px'>
            <MenuDivider />
            <MenuOptionGroup title='Gender' type='checkbox'>
              <CheckboxGroup colorScheme='green'
                defaultValue={genderValues}
                onChange={GenderHandler}>
                <VStack alignItems={"baseline"}>
                  <Checkbox value="men">Men's</Checkbox>
                  <Checkbox value="female">Women's</Checkbox>
                  <Checkbox value="Both">Men's/Women's</Checkbox>
                </VStack>
              </CheckboxGroup>
            </MenuOptionGroup>
            <MenuDivider />
            <MenuOptionGroup title='Color' type='checkbox'>
              <CheckboxGroup colorScheme='green'
                defaultValue={colorValues}
                onChange={ColorHandler}>
                <VStack alignItems={"baseline"}>
                  <Checkbox value="Black">black</Checkbox>
                  <Checkbox value="Blue">blue</Checkbox>
                  <Checkbox value='Golden'>golden</Checkbox>
                  <Checkbox value='Silver'>Silver</Checkbox>
                </VStack>
              </CheckboxGroup>
            </MenuOptionGroup>
          </MenuList>

        </Menu>
      </Box>
    </Box>
  );
}



