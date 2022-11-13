import { Flex, Image, Text, Box, Link, Stack, Checkbox, Button, Grid, GridItem } from '@chakra-ui/react'
import {ArrowForwardIcon} from "@chakra-ui/icons"
import React from 'react'
import ButtonBlue from '../components/ButtonBlue';

function Home() {
  return (
    <Box>
      <Box bgColor={"#0F1048"} overflow={"hidden"}>
        <Flex
          bgColor={"#F0F3FF"}
          alignItems={"center"}
          justifyContent={"space-between"}
          w={"100%"}
          h={"75px"}>
          <Image
            w={"200px"}
            h={"100%"}
            src={
              "https://dapulse-res.cloudinary.com/image/upload/f_auto,q_auto/remote_mondaycom_static/uploads/DanielleHassan/banner/hotdog_color.png"
            }
          />
          <Flex w={"60%"}>
            <Text fontSize={"18px"} mr={4}>
              Discover how global enterprises turn work into revenue with
              monday.com Work OS.
            </Text>
            <Link mt={0.5} href={"https://monday.com/enterprise/"}>
              Explore now <ArrowForwardIcon />
            </Link>
          </Flex>
          <Image
            w={"200px"}
            h={"100%"}
            src={
              "https://dapulse-res.cloudinary.com/image/upload/f_auto,q_auto/remote_mondaycom_static/uploads/DanielleHassan/banner/hotdog.png"
            }
          />
        </Flex>
        <Box>
          <Box color={"white"} textAlign={"center"} w={"50%"} m={"auto"}>
            <Text mt={12} lineHeight={"70px"} fontSize={"7xl"}>
              A platform built for a new way of working
            </Text>
            <Text fontSize={"xl"} mt={5}>
              What would you like to manage with monday.com Work OS?
            </Text>
          </Box>
          <Flex paddingTop={10} justifyContent={"space-around"} m={"auto"}>
            <Stack color={"white"} spacing={5} direction="row">
              <Box
                p={2}
                border={"1px solid red"}
                borderRadius={10}
                w={"130px"}
                h={"130px"}>
                <Checkbox colorScheme="red"></Checkbox>
                <Flex
                  textAlign={"center"}
                  w={"100%"}
                  alignItems={"center"}
                  flexDirection="column">
                  <Image
                    mb={1}
                    w={"38px"}
                    src="https://dapulse-res.cloudinary.com/image/upload/f_auto,q_auto/Generator_featured%20images/Home%20Page%20-%202022%20Rebrand/first_fold/icons/design_icon.png"
                  />
                  <Text as={"b"} fontSize={"sm"}>
                    Creative & design
                  </Text>
                </Flex>
              </Box>
              <Box
                p={2}
                border={"1px solid red"}
                borderRadius={10}
                w={"130px"}
                h={"130px"}>
                <Checkbox colorScheme="red"></Checkbox>
                <Flex
                  textAlign={"center"}
                  w={"100%"}
                  alignItems={"center"}
                  flexDirection="column">
                  <Image
                    mb={1}
                    w={"38px"}
                    src="https://dapulse-res.cloudinary.com/image/upload/f_auto,q_auto/Generator_featured%20images/Home%20Page%20-%202022%20Rebrand/first_fold/icons/dev_icon.png"
                  />
                  <Text as={"b"} fontSize={"sm"}>
                    Software development
                  </Text>
                </Flex>
              </Box>
              <Box
                p={2}
                border={"1px solid red"}
                borderRadius={10}
                w={"130px"}
                h={"130px"}>
                <Checkbox colorScheme="red"></Checkbox>
                <Flex
                  textAlign={"center"}
                  w={"100%"}
                  alignItems={"center"}
                  flexDirection="column">
                  <Image
                    mb={1}
                    w={"38px"}
                    src="https://dapulse-res.cloudinary.com/image/upload/f_auto,q_auto/Generator_featured%20images/Home%20Page%20-%202022%20Rebrand/first_fold/icons/marketing_icon.png"
                  />
                  <Text as={"b"} fontSize={"sm"}>
                    Marketing
                  </Text>
                </Flex>
              </Box>
              <Box
                p={2}
                border={"1px solid red"}
                borderRadius={10}
                w={"130px"}
                h={"130px"}>
                <Checkbox colorScheme="red"></Checkbox>
                <Flex
                  textAlign={"center"}
                  w={"100%"}
                  alignItems={"center"}
                  flexDirection="column">
                  <Image
                    mb={1}
                    w={"38px"}
                    src="https://dapulse-res.cloudinary.com/image/upload/f_auto,q_auto/Generator_featured%20images/Home%20Page%20-%202022%20Rebrand/first_fold/icons/pmo_icon.png"
                  />
                  <Text as={"b"} fontSize={"sm"}>
                    Project management
                  </Text>
                </Flex>
              </Box>
              <Box
                p={2}
                border={"1px solid red"}
                borderRadius={10}
                w={"130px"}
                h={"130px"}>
                <Checkbox colorScheme="red"></Checkbox>
                <Flex
                  textAlign={"center"}
                  w={"100%"}
                  alignItems={"center"}
                  flexDirection="column">
                  <Image
                    mb={1}
                    w={"38px"}
                    src="https://dapulse-res.cloudinary.com/image/upload/f_auto,q_auto/Generator_featured%20images/Home%20Page%20-%202022%20Rebrand/first_fold/icons/crm_icon.png"
                  />
                  <Text as={"b"} fontSize={"sm"}>
                    Sales & CRM
                  </Text>
                </Flex>
              </Box>
              <Box
                p={2}
                border={"1px solid red"}
                borderRadius={10}
                w={"130px"}
                h={"130px"}>
                <Checkbox colorScheme="red"></Checkbox>
                <Flex
                  textAlign={"center"}
                  w={"100%"}
                  alignItems={"center"}
                  flexDirection="column">
                  <Image
                    mb={1}
                    w={"38px"}
                    src="https://dapulse-res.cloudinary.com/image/upload/f_auto,q_auto/Generator_featured%20images/Home%20Page%20-%202022%20Rebrand/first_fold/icons/task_icon.png"
                  />
                  <Text as={"b"} fontSize={"sm"}>
                    Task management
                  </Text>
                </Flex>
              </Box>
              <Box
                p={2}
                border={"1px solid red"}
                borderRadius={10}
                w={"130px"}
                h={"130px"}>
                <Checkbox colorScheme="red"></Checkbox>
                <Flex
                  textAlign={"center"}
                  w={"100%"}
                  alignItems={"center"}
                  flexDirection="column">
                  <Image
                    mb={1}
                    w={"38px"}
                    src="https://dapulse-res.cloudinary.com/image/upload/f_auto,q_auto/Generator_featured%20images/Home%20Page%20-%202022%20Rebrand/first_fold/icons/hr_icon.png"
                  />
                  <Text as={"b"} fontSize={"sm"}>
                    HR
                  </Text>
                </Flex>
              </Box>
              <Box
                p={2}
                border={"1px solid red"}
                borderRadius={10}
                w={"130px"}
                h={"130px"}>
                <Checkbox colorScheme="red"></Checkbox>
                <Flex
                  textAlign={"center"}
                  w={"100%"}
                  alignItems={"center"}
                  flexDirection="column">
                  <Image
                    mb={1}
                    w={"38px"}
                    src="https://dapulse-res.cloudinary.com/image/upload/f_auto,q_auto/Generator_featured%20images/Home%20Page%20-%202022%20Rebrand/first_fold/icons/operations_icon.png"
                  />
                  <Text as={"b"} fontSize={"sm"}>
                    Operations
                  </Text>
                </Flex>
              </Box>
              <Box
                p={2}
                border={"1px solid red"}
                borderRadius={10}
                w={"130px"}
                h={"130px"}>
                <Checkbox colorScheme="red"></Checkbox>
                <Flex
                  textAlign={"center"}
                  w={"100%"}
                  alignItems={"center"}
                  flexDirection="column">
                  <Image
                    mb={1}
                    w={"38px"}
                    src="https://dapulse-res.cloudinary.com/image/upload/f_auto,q_auto/Generator_featured%20images/Home%20Page%20-%202022%20Rebrand/first_fold/icons/workflows_icon.png"
                  />
                  <Text as={"b"} fontSize={"sm"}>
                    More workflows
                  </Text>
                </Flex>
              </Box>
            </Stack>
          </Flex>
          <Box
            pt={10}
            color={"white"}
            w={"max-content"}
            textAlign="center"
            m={"auto"}>
            <Button
              mb={4}
              px={"25px"}
              py={"23px"}
              bgGradient="linear(to-r, #4F34FF, #B1B0FF)"
              borderRadius={20}
              rightIcon={<ArrowForwardIcon />}>
              Get started
            </Button>
            <Text fontSize={"sm"}>
              No credit card needed ✦ Unlimited time on Free plan
            </Text>
          </Box>
          <Image src="https://dapulse-res.cloudinary.com/image/upload/f_auto,q_auto/Generator_featured%20images/Home%20Page%20-%202022%20Rebrand/first_fold/image.png" />
        </Box>
        );
        <Box
          mt={16}
          h={"550px"}
          bgColor={"white"}
          transform="rotate(11deg) scale(2)"></Box>
      </Box>
      <Flex
        fontSize={"xl"}
        alignItems={"center"}
        flexDirection={"column"}
        w={"100%"}
        position={"absolute"}
        top={"1200px"}>
        <Text textAlign={"center"} as={"b"}>
          Trusted by 152,000+ customers worldwide
        </Text>
        <Flex
          mt={16}
          justifyContent={"space-around"}
          alignItems="center"
          flexWrap="wrap"
          w={"50%"}
          gap={5}
          templateColumns={"repeat(5, 1fr)"}>
          <Image
            w={"120px"}
            src="https://dapulse-res.cloudinary.com/image/upload/f_auto,q_auto/remote_mondaycom_static/img/customers/logos-v2/hulu.png"
          />
          <Image
            w={"120px"}
            src="https://dapulse-res.cloudinary.com/image/upload/f_auto,q_auto/remote_mondaycom_static/img/customers/logos-v2/bd.png"
          />
          <Image
            w={"120px"}
            src="https://dapulse-res.cloudinary.com/image/upload/f_auto,q_auto/remote_mondaycom_static/img/customers/logos-v2/canva.png"
          />
          <Image
            w={"70px"}
            src="https://dapulse-res.cloudinary.com/image/upload/f_auto,q_auto/remote_mondaycom_static/img/customers/logos-v2/nhl.png"
          />
          <Image
            w={"120px"}
            src="https://dapulse-res.cloudinary.com/image/upload/f_auto,q_auto/remote_mondaycom_static/img/customers/logos-v2/coca_cola.png"
          />
          <Image
            w={"120px"}
            src="https://dapulse-res.cloudinary.com/image/upload/f_auto,q_auto/remote_mondaycom_static/img/customers/logos-v2/hubspot.png"
          />
          <Image
            w={"80px"}
            src="https://dapulse-res.cloudinary.com/image/upload/f_auto,q_auto/remote_mondaycom_static/img/customers/logos-v2/Electronic_Arts.png"
          />
          <Image
            w={"120px"}
            src="https://dapulse-res.cloudinary.com/image/upload/f_auto,q_auto/remote_mondaycom_static/img/customers/logos-v2/nautica.png"
          />
          <Image
            w={"120px"}
            src="https://dapulse-res.cloudinary.com/image/upload/f_auto,q_auto/remote_mondaycom_static/img/customers/logos-v2/universal.png"
          />
        </Flex>
        <Flex px={10} mt={40}>
          <Box w={"50%"}>
            <Text fontSize={"4xl"}>
              The Work OS that lets you shape workflows,{" "}
              <Text as={"b"}>your way</Text>
            </Text>
          </Box>
          <Box w={"50%"}>
            <Text fontSize={"xl"} mb={6}>
              Boost your team’s alignment, efficiency, and productivity by
              customizing any workflow to fit your needs.
            </Text>
            <ButtonBlue />
          </Box>
        </Flex>
      </Flex>
      <Flex
        transform="rotate(11deg) scale(2)"
        mt={"600px"}
        h={"550px"}
        bgColor={"#0F1048"}></Flex>
      <Flex
        h={"max-content"}
        mt={"-680px"}
        px={"200px"}
        color={"white"}
        justifyContent={"space-between"}
        w={"100%"}>
        <Box w={"60%"}>
          <Text fontSize={"5xl"}>
            Streamline your work for <Text as={"b"}>maximum productivity</Text>
          </Text>
          <Text fontSize={"2xl"}>
            Centralize all your work, processes, tools, and files into one Work
            OS. Connect teams, bridge silos, and maintain one source of truth
            across your organization.
          </Text>
          <Flex mt={120} alignItems={"center"}>
            <Box mr={"20px"}>
              <Image
                w={"130px"}
                src="https://dapulse-res.cloudinary.com/image/upload/r_400/f_auto,q_auto/remote_mondaycom_static/uploads/BarBen/jane.jpeg"
              />
            </Box>
            <Box>
              <Text mb={2} fontSize={"md"}>
                “ We use monday.com for a plethora of use cases, the
                opportunities this platform provides are limitless.”
              </Text>
              <Text fontSize={"md"} as={"b"}>
                Jane Tham | VP of Collaboration Technologies
              </Text>
              <Text fontSize={"md"}>Universal Music Group</Text>
            </Box>
          </Flex>
          <Text mt={120} fontSize={"5xl"}>
            Bring teams together to
            <Text as={"b"}> drive business impact</Text>
          </Text>
          <Text fontSize={"2xl"}>
            Collaborate effectively organization-wide to get a clear picture of
            all your work. Stay in the loop with easy-to-use automations and
            real-time notifications.
          </Text>
          <Flex mt={120} alignItems={"center"}>
            <Box mr={"20px"}>
              <Image
                w={"130px"}
                src="https://dapulse-res.cloudinary.com/image/upload/r_400/f_auto,q_auto/remote_mondaycom_static/uploads/BarBen/sarah.jpeg"
              />
            </Box>
            <Box>
              <Text mb={2} fontSize={"md"}>
                “ Since adopting monday.com, our global marketing department has
                seen a 40% improvement in cross-team collaboration.”
              </Text>
              <Text fontSize={"md"} as={"b"}>
                Sarah Pharr | AVP Marketing
              </Text>
              <Text fontSize={"md"}>Genpact</Text>
            </Box>
          </Flex>
          <Text mt={120} fontSize={"5xl"}>
            Stay on track to
            <Text as={"b"}>
              <br />
              reach your goals, faster
            </Text>
          </Text>
          <Text fontSize={"2xl"}>
            Get a high-level overview of your organization with customizable
            dashboards. Make confident decisions and easily scale workflows for
            your evolving needs.
          </Text>
          <Flex mt={120} alignItems={"center"}>
            <Box mr={"20px"}>
              <Image
                w={"130px"}
                src="https://dapulse-res.cloudinary.com/image/upload/r_400/f_auto,q_auto/remote_mondaycom_static/uploads/BarBen/baptiste.jpeg"
              />
            </Box>
            <Box>
              <Text mb={2} fontSize={"md"}>
                “ monday.com allows banks to be synchronized between the
                top-level management figures and local KPIs.”
              </Text>
              <Text fontSize={"md"} as={"b"}>
                Baptiste Ancey | Head of Innovation
              </Text>
              <Text fontSize={"md"}>Indosuez Wealth Management</Text>
            </Box>
          </Flex>
        </Box>
        <Image
          position={"sticky"}
          top={"100px"}
          w={"350px"}
          h={"250px"}
          src="https://dapulse-res.cloudinary.com/image/upload/f_auto,q_auto/Generator_featured%20images/Home%20Page%20-%202022%20Rebrand/parallax/first_board.png"
        />
      </Flex>
    </Box>
  );
}

export default Home