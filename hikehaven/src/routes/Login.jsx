import React, { useContext } from 'react'
import {FormControl, FormLabel, FormHelperText, Input, Box, Button} from "@chakra-ui/react"
import { AppContext } from '../context/AppContext';

function Login() {
    const {toggleAuth, loading} = useContext(AppContext)
  return (
    <Box w={"100%"} m="auto" position={"absolute"} mt={"300px"}>
      <FormControl w={"40%"} m="auto">
        <FormLabel>Email address</FormLabel>
        <Input type="email" />
        <FormLabel mt={3}>Password</FormLabel>
        <Input type="password" />
        <Button mt={5} type='submit' isLoading={loading} onClick={toggleAuth}>Login</Button>
      </FormControl>
    </Box>
  );
}

export default Login