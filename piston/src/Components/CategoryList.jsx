
import { Center , Box } from '@chakra-ui/react';
import React from 'react'
import { useNavigate } from 'react-router-dom';
import styled from "styled-components";

const Categorydiv = styled.div`
width: 300px;
height: 550px;
margin:15px;
border-redius:3px;
`

const Subdiv = styled.div`
display:flex;
gap:20px;
width:85%;
margin:auto;
margin-top:20px;
box-shadow: rgba(0, 0, 0, 0.09) 0px 3px 12px;
background:pink;
`

export const CategoryList = () => {

  const navigate = useNavigate();
  return (
    <Center>
    <Categorydiv>
    <Center>TOP CATEGORIES</Center>
    <Subdiv onClick={()=>{navigate("/tshirt")}} >
      <Box ml={5}>
        <img src="https://th.bing.com/th/id/OIP.d08L2Q26Q4ar_2zRzEO7fwHaHa?w=184&h=184&c=7&r=0&o=5&pid=1.7"  style={{width:"40px" , height:"40px" , border:"2px solid black" , borderRadius:"50%" , marginTop:"10px" }} />
      </Box>
      <Center>
        <h5>T-Shirts</h5>
      </Center>
    </Subdiv>

    <Subdiv onClick={()=>{navigate("/shoes")}} >
      <Box ml="5" >
        <img src="https://th.bing.com/th/id/OIP.QmiojEwTAQzK4Vc-279gHgHaHa?pid=ImgDet&rs=1"  style={{width:"40px" ,border:"2px solid black" , height:"40px" , borderRadius:"50%" , marginTop:"10px" }} />
      </Box>
      <Center>
        <h5>Shoes</h5>
      </Center>
    </Subdiv>

    <Subdiv onClick={()=>{navigate("/jwellary")}} >
      <Box ml="5" >
        <img src="https://th.bing.com/th/id/OIP.NaMbQWEpKZPoJuIR_Y7BNwHaHa?pid=ImgDet&rs=1"  style={{width:"40px" , height:"40px" , border:"2px solid black" ,borderRadius:"50%" , marginTop:"10px" }} />
      </Box>
      <Center>
        <h5>Jewellery</h5>
      </Center>
    </Subdiv>

    <Subdiv onClick={()=>{navigate("/jackets")}} >
      <Box ml="5" >
        <img src="https://th.bing.com/th/id/OIP.y5wghfDbL5hl09-kkMBZsAHaLR?w=185&h=282&c=7&r=0&o=5&pid=1.7"  style={{width:"40px" ,border:"2px solid black" , height:"40px" , borderRadius:"50%" , marginTop:"10px" }} />
      </Box>
      <Center>
        <h5>Jackets</h5>
      </Center>
    </Subdiv>

    <Subdiv onClick={()=>{navigate("/electronics")}} >
      <Box ml="5" >
        <img src="https://th.bing.com/th/id/OIP.AJgw3uoFxAMuXAQMFbYgnwHaHa?pid=ImgDet&rs=1"  style={{width:"40px" ,border:"2px solid black" , height:"40px" , borderRadius:"50%" , marginTop:"10px" }} />
      </Box>
      <Center>
        <h5>Electronics</h5>
      </Center>
    </Subdiv>
    
    </Categorydiv>
    </Center>
  )
}
