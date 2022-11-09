import { Flex, Image, Menu, MenuItem, MenuButton, MenuList } from "@chakra-ui/react";
import { SlArrowUp } from "react-icons/sl";

import React from 'react'

function Navbar() {
  return (
    <Flex w={"100%"}>
      <Image
        py={"15px"}
        px={"30px"}
        w={"220px"}
        src={
          "https://media.discordapp.net/attachments/897156357810159709/1039845047459397702/logo.png"
        }
      />
      <Menu preventOverflow={true}>
        <MenuButton as={"Button"} rightIcon={<SlArrowUp />}>
          Products
        </MenuButton>
        <MenuList w={"max-content"}>
            <MenuItem>
              <Image w={"250px"} src="https://dapulse-res.cloudinary.com/image/upload/Generator_featured%20images/Home%20Page%20-%202022%20Rebrand/minisites/header%20logos/crm/desktop_open_monday_crm_logo.png" />
            </MenuItem>
            <MenuItem>
                <Image w={"250px"} src="https://dapulse-res.cloudinary.com/image/upload/Generator_featured%20images/Home%20Page%20-%202022%20Rebrand/minisites/header%20logos/work_management/desktop_open_monday_wm_logo.png" />
            </MenuItem>
            <MenuItem>
                <Image w={"250px"} src="https://dapulse-res.cloudinary.com/image/upload/Generator_featured%20images/Home%20Page%20-%202022%20Rebrand/minisites/header%20logos/dev/desktop_open_monday_dev_logo.png" />
            </MenuItem>
        </MenuList>
      </Menu>
    </Flex>
  );
}

export default Navbar