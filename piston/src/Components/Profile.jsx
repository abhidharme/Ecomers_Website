import React from 'react'
import { useSelector } from 'react-redux';
import { useEffect, useState } from "react";
import { Text } from '@chakra-ui/react';

export const Profile = () => {



  const { token, username } = useSelector((state) => state.login);
  const [profile, setProfile] = useState({});


  useEffect(() => {
    fetch(`https://masai-api-mocker.herokuapp.com/user/${username}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
      }
    })
      .then((res) => res.json())
      .then((res) => setProfile(res))
      .catch((err) => console.log(err));
  }, []);

  //console.log(profile)

  return (
    <div>
      {Object.keys(profile).length != 0 ? <Text>{profile.name}</Text> : <Text>Welcome Guest</Text>}
      <Text>{profile.email}</Text>
    </div>
  )
}
