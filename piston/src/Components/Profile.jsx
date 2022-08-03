import React from 'react'
import { useSelector } from 'react-redux';
import { useEffect , useState } from "react";
import axios from "axios";
import { Link, useNavigate } from 'react-router-dom'
import { Text } from '@chakra-ui/react';

export const Profile = () => {

    

  const { token , username } = useSelector((state)=>state.login);
  const [profile , setProfile] = useState({});


  useEffect(()=> {
    fetch(`https://masai-api-mocker.herokuapp.com/user/${username}`, {
        method: "GET",
        headers: {
            "Content-Type" : "application/json",
            Authorization: `Bearer ${token}`
        }
    })
    .then((res)=> res.json())
    .then((res)=> setProfile(res))
    .catch((err) => console.log(err));
},[]);

console.log(profile)

  return (
    <div>
    <Text>{profile.name}</Text>
    <Text>{profile.email}</Text>
    </div>
  )
}
