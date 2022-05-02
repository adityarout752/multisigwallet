import React from "react";
import "./App.css"
import { Text,Box, Button, Flex, Image, Link, Spacer } from "@chakra-ui/react";

const NavBar = () => {



    return(
        <Flex className="navbar" justify="space-between" align={"center"} padding="30px">
          
        <Text  as='i' fontSize='40px' textStyle={"bold"} color='tomato'>Multi-Sign-Wallet</Text>
       
        <Text  as='i' fontSize='20px' color='tomato'>Create Transcation</Text> 
        <Text>adh</Text>
        <Button  borderRadius={"5px"} width="200px"  colorScheme='blue' as='i' fontSize='20px' color='white'>Connect Wallet</Button>
        </Flex>
    )
}

export default NavBar