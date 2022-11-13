import {
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  MenuGroup,
  MenuDivider,
} from "@chakra-ui/react";
import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'

function Logout() {
  const { token, logout } = useContext(AppContext)
  

  return (
    <Menu>
      <MenuButton>{token}</MenuButton>
      <MenuList>
        <MenuGroup title="Profile">
          <MenuItem>My account</MenuItem>
          <MenuItem>Settings</MenuItem>
        </MenuGroup>
        <MenuDivider />
        <MenuGroup>
          <MenuItem onClick={logout}>Logout</MenuItem>
        </MenuGroup>
      </MenuList>
    </Menu>
  );
}

export default Logout