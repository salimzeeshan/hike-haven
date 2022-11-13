import { Flex, Image, Menu, Box, MenuButton, Text } from "@chakra-ui/react";
import { AppContext } from "../context/AppContext";
import React, { useContext } from 'react'
import ButtonBlue from "./ButtonBlue";
import {Link} from "react-router-dom"
import Logout from "../routes/Logout";

function Navbar() {
  const { isAuth, token } = useContext(AppContext)

  console.log(token)

  return (
    <Flex
      alignItems={"center"}
      px={"30px"}
      justifyContent={"space-between"}
      zIndex={999999999}
      position={"fixed"}
      bgColor={"white"}
      w={"100%"}>
      <Flex>
        <Link to="/">
          <Image
            py={"15px"}
            mr={5}
            w={"160px"}
            src={
              "https://media.discordapp.net/attachments/897156357810159709/1039845047459397702/logo.png"
            }
          />
        </Link>
        <Menu>
          <MenuButton mr={5}>Products</MenuButton>
          <MenuButton mr={5}>Use cases</MenuButton>
          <MenuButton mr={5}>Features</MenuButton>
          <MenuButton mr={5}>Resources</MenuButton>
        </Menu>
      </Flex>
      <Flex alignItems={"center"}>
        <Menu>
          <Box mr={5}>
            <Link to="/pricing">Pricing</Link>
          </Box>
          <MenuButton mr={5}>Contact sales</MenuButton>
          {isAuth ? (
            <Logout />
          ) : (
            <Flex alignItems={"center"}>
              <Link to="/login" mr={5}>
                Login
              </Link>
              <Box ml={5} mt={"15px"}>
                <ButtonBlue title={"Sign up"} />
              </Box>
            </Flex>
          )}
        </Menu>
      </Flex>
    </Flex>
  );
}

export default Navbar