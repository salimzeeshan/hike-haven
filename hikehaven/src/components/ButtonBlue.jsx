import React from 'react'
import {ArrowForwardIcon} from "@chakra-ui/icons"
import {Button} from "@chakra-ui/react"

function ButtonBlue({title}) {
  return (
    <Button
            color={"white"}
            mb={4}
            px={"25px"}
            py={"23px"}
            bgColor={"#6C6CFF"}
            borderRadius={20}
            rightIcon={<ArrowForwardIcon />}>
            {title}
    </Button>
  )
}

export default ButtonBlue