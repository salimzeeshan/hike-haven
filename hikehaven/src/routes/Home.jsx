import {
  Flex,
  Image,
  Text,
  Box,
  Link,
  Stack,
  Checkbox,
  Button,
  Tabs,
  Tab,
  Grid,
  GridItem,
  TabList,
  AspectRatio,
  List,
  ListItem,
} from "@chakra-ui/react";
import {ArrowForwardIcon} from "@chakra-ui/icons"
import React, { useState } from 'react'
import ButtonBlue from '../components/ButtonBlue';

const tabData = [
  {
    video:
      "https://dapulse-res.cloudinary.com/video/upload/q_auto,f_auto,cs_copy/Generator_featured%20images/Home%20Page%20-%202022%20Rebrand/tabs/final-videos-tabs/7_status.mp4",
    title: "Boards",
    desc: "Everything starts with a visual board — the core of monday.com Work OS. Tailor it your way and manage anything from projects to departments.",
    icon: "https://dapulse-res.cloudinary.com/image/upload/e_colorize,co_rgb:6161FF/Generator_featured%20images/Home%20Page%20-%202022%20Rebrand/tabs/board_icon.svg",
  },
  {
    video:
      "https://dapulse-res.cloudinary.com/video/upload/q_auto,f_auto,cs_copy/Generator_featured%20images/Home%20Page%20-%202022%20Rebrand/tabs/final-videos-tabs/1_Views.mp4",
    title: "Views",
    desc: "Visualize and plan your work more efficiently with multiple views: Kanban board, calendar, timeline, Gantt chart, and more.",
    icon: "https://dapulse-res.cloudinary.com/image/upload/e_colorize,co_rgb:6161FF/Generator_featured%20images/Home%20Page%20-%202022%20Rebrand/tabs/views_icon.svg",
  },
  {
    video:
      "https://dapulse-res.cloudinary.com/video/upload/q_auto,f_auto,cs_copy/Generator_featured%20images/Home%20Page%20-%202022%20Rebrand/tabs/final-videos-tabs/2_Dashboards.mp4",
    title: "Dashboards",
    desc: "Get the insights you need to make decisions with confidence. Keep track of progress, timelines, and budgets with custom dashboards.",
    icon: "https://dapulse-res.cloudinary.com/image/upload/e_colorize,co_rgb:6161FF/Generator_featured%20images/Home%20Page%20-%202022%20Rebrand/tabs/dashboard_icon.svg",
  },
  {
    video:
      "https://dapulse-res.cloudinary.com/video/upload/q_auto,f_auto,cs_copy/Generator_featured%20images/Home%20Page%20-%202022%20Rebrand/tabs/final-videos-tabs/4_Integrations.mp4",
    title: "Integrations",
    desc: "Connect monday.com with all your favorite tools and get more work done. Integrate Slack, Dropbox, Adobe Creative Cloud, and more.",
    icon: "https://dapulse-res.cloudinary.com/image/upload/e_colorize,co_rgb:6161FF/Generator_featured%20images/Home%20Page%20-%202022%20Rebrand/tabs/integrations_icon.svg",
  },
  {
    video:
      "https://dapulse-res.cloudinary.com/video/upload/q_auto,f_auto,cs_copy/Generator_featured%20images/Home%20Page%20-%202022%20Rebrand/tabs/final-videos-tabs/3_Automations.mp4",
    title: "Automations",
    desc: "Streamline processes to focus on the work that matters. Choose from a variety of automation recipes or create your own in minutes.",
    icon: "https://dapulse-res.cloudinary.com/image/upload/e_colorize,co_rgb:6161FF/Generator_featured%20images/Home%20Page%20-%202022%20Rebrand/tabs/automations_icon.svg",
  },
  {
    video:
      "https://dapulse-res.cloudinary.com/video/upload/q_auto,f_auto,cs_copy/Generator_featured%20images/Home%20Page%20-%202022%20Rebrand/tabs/final-videos-tabs/5_Apps.mp4",
    title: "Apps",
    desc: "Expand the capabilities of your Work OS with monday apps. Enhance your workflows with custom views, widgets, integrations, and more.",
    icon: "https://dapulse-res.cloudinary.com/image/upload/e_colorize,co_rgb:6161FF/Generator_featured%20images/Home%20Page%20-%202022%20Rebrand/tabs/apps_icon.svg",
  },
  {
    video:
      "https://dapulse-res.cloudinary.com/video/upload/q_auto,f_auto,cs_copy/Generator_featured%20images/Home%20Page%20-%202022%20Rebrand/tabs/final-videos-tabs/6_Docs.mp4",
    title: "Docs",
    desc: "Transform text into action items, in just a few clicks. Connect, collaborate, and execute ideas and workflows in real-time from any doc.",
    icon: "https://dapulse-res.cloudinary.com/image/upload/e_colorize,co_rgb:6161FF/Generator_featured%20images/Home%20Page%20-%202022%20Rebrand/tabs/docs_icon.svg",
  },
];

function Home() {
  const [currentTab, setCurrentTab] = useState(tabData[0])

  const handleTabData = index => {
    setCurrentTab(tabData[index])
  }

  return (
    <Box position={"absolute"} top={"70px"}>
      <Box bgColor={"#0F1048"} overflow={"hidden"}>
        <Flex
          position={"sticky"}
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
                border={"1px solid green"}
                borderRadius={10}
                w={"130px"}
                h={"130px"}>
                <Checkbox colorScheme="green"></Checkbox>
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
                border={"1px solid pink"}
                borderRadius={10}
                w={"130px"}
                h={"130px"}>
                <Checkbox colorScheme="pink"></Checkbox>
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
                border={"1px solid orange"}
                borderRadius={10}
                w={"130px"}
                h={"130px"}>
                <Checkbox colorScheme="orange"></Checkbox>
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
                border={"1px solid cyan"}
                borderRadius={10}
                w={"130px"}
                h={"130px"}>
                <Checkbox colorScheme="cyan"></Checkbox>
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
                border={"1px solid lightblue"}
                borderRadius={10}
                w={"130px"}
                h={"130px"}>
                <Checkbox colorScheme="lightblue"></Checkbox>
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
                border={"1px solid teal"}
                borderRadius={10}
                w={"130px"}
                h={"130px"}>
                <Checkbox colorScheme="teal"></Checkbox>
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
                border={"1px solid purple"}
                borderRadius={10}
                w={"130px"}
                h={"130px"}>
                <Checkbox colorScheme="purple"></Checkbox>
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
          mt={"180px"}
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
            <ButtonBlue title={"Get started"} />
          </Box>
        </Flex>
      </Flex>
      <Box overflow={"hidden"}>
        <Flex
          transform="rotate(11deg) scale(2)"
          mt={"1100px"}
          h={"1750px"}
          bgColor={"#0F1048"}></Flex>
        <Flex
          top={"2200px"}
          position={"absolute"}
          h={"max-content"}
          px={"200px"}
          color={"white"}
          justifyContent={"space-between"}
          w={"100%"}>
          <Box w={"60%"}>
            <Text fontSize={"5xl"}>
              Streamline your work for{" "}
              <Text as={"b"}>maximum productivity</Text>
            </Text>
            <Text fontSize={"2xl"}>
              Centralize all your work, processes, tools, and files into one
              Work OS. Connect teams, bridge silos, and maintain one source of
              truth across your organization.
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
              Collaborate effectively organization-wide to get a clear picture
              of all your work. Stay in the loop with easy-to-use automations
              and real-time notifications.
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
                  “ Since adopting monday.com, our global marketing department
                  has seen a 40% improvement in cross-team collaboration.”
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
              dashboards. Make confident decisions and easily scale workflows
              for your evolving needs.
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
            top={"120px"}
            w={"350px"}
            h={"250px"}
            src="https://dapulse-res.cloudinary.com/image/upload/f_auto,q_auto/Generator_featured%20images/Home%20Page%20-%202022%20Rebrand/parallax/first_board.png"
          />
        </Flex>
      </Box>
      <Box
        transform="rotate(11deg) scale(2)"
        mt={"-330px"}
        h={"550px"}
        bgColor={"white"}></Box>
      <Box textAlign={"center"} w={"100%"} position={"absolute"} top={"4250px"}>
        <Text fontSize={"5xl"}>
          <Text color={"333333"} as={"b"}>
            Everything
          </Text>{" "}
          you need for{" "}
          <Text as={"b"} color={"333333"}>
            any workflow
          </Text>
        </Text>
        <Text mt={4} fontSize={"xl"}>
          Easily build your ideal workflow with monday.com building blocks.
        </Text>
        <Tabs
          onChange={(index) => handleTabData(index)}
          m={"auto"}
          mt={16}
          w={"max-content"}
          size="md"
          variant="enclosed">
          <TabList>
            <Tab p={5}>
              <Box>
                <Image
                  pb={2}
                  m={"auto"}
                  w={"25px"}
                  src="https://dapulse-res.cloudinary.com/image/upload/e_colorize,co_rgb:0F1048/Generator_featured%20images/Home%20Page%20-%202022%20Rebrand/tabs/board_icon.svg"
                />
                <Text>Boards</Text>
              </Box>
            </Tab>
            <Tab p={5}>
              <Box>
                <Image
                  pb={2}
                  m={"auto"}
                  w={"25px"}
                  src="https://dapulse-res.cloudinary.com/image/upload/e_colorize,co_rgb:0F1048/Generator_featured%20images/Home%20Page%20-%202022%20Rebrand/tabs/views_icon.svg"
                />
                <Text>Views</Text>
              </Box>
            </Tab>
            <Tab p={5}>
              <Box>
                <Image
                  pb={2}
                  m={"auto"}
                  w={"25px"}
                  src="https://dapulse-res.cloudinary.com/image/upload/e_colorize,co_rgb:0F1048/Generator_featured%20images/Home%20Page%20-%202022%20Rebrand/tabs/dashboard_icon.svg"
                />
                <Text>Dashboard</Text>
              </Box>
            </Tab>
            <Tab p={5}>
              <Box>
                <Image
                  pb={2}
                  m={"auto"}
                  w={"25px"}
                  src="https://dapulse-res.cloudinary.com/image/upload/e_colorize,co_rgb:0F1048/Generator_featured%20images/Home%20Page%20-%202022%20Rebrand/tabs/integrations_icon.svg"
                />
                <Text>Integrations</Text>
              </Box>
            </Tab>
            <Tab p={5}>
              <Box>
                <Image
                  pb={2}
                  m={"auto"}
                  w={"25px"}
                  src="https://dapulse-res.cloudinary.com/image/upload/e_colorize,co_rgb:0F1048/Generator_featured%20images/Home%20Page%20-%202022%20Rebrand/tabs/automations_icon.svg"
                />
                <Text>Automations</Text>
              </Box>
            </Tab>
            <Tab p={5}>
              <Box>
                <Image
                  pb={2}
                  m={"auto"}
                  w={"25px"}
                  src="https://dapulse-res.cloudinary.com/image/upload/e_colorize,co_rgb:0F1048/Generator_featured%20images/Home%20Page%20-%202022%20Rebrand/tabs/apps_icon.svg"
                />
                <Text>Apps</Text>
              </Box>
            </Tab>
            <Tab p={5}>
              <Box>
                <Image
                  pb={2}
                  m={"auto"}
                  w={"25px"}
                  src="https://dapulse-res.cloudinary.com/image/upload/e_colorize,co_rgb:0F1048/Generator_featured%20images/Home%20Page%20-%202022%20Rebrand/tabs/docs_icon.svg"
                />
                <Text>Docs</Text>
              </Box>
            </Tab>
          </TabList>
        </Tabs>
        <Flex m={"auto"} w={"80%"} justifyContent={"space-between"} mt={16}>
          <Box w={"60%"}>
            <AspectRatio ratio={1.48 / 1}>
              <video autoPlay src={currentTab.video} />
            </AspectRatio>
          </Box>
          <Flex
            flexDirection={"column"}
            justifyContent={"center"}
            alignItems={"center"}
            textAlign={"left"}
            w={"40%"}>
            <Box w={"75%"}>
              <Flex alignItems={"center"}>
                <Image
                  mr={3}
                  mt={"4px"}
                  w={"23px"}
                  h={"23px"}
                  src={currentTab.icon}
                />
                <Text color={"#6261FE"} as={"b"} fontSize={"3xl"}>
                  {currentTab.title}
                </Text>
              </Flex>
              <Text>{currentTab.desc}</Text>
            </Box>
          </Flex>
        </Flex>
      </Box>
      <Flex justifyContent={"space-between"} w={"80%"} m={"auto"} mt={"400px"}>
        <Box w={"45%"}>
          <Image
            w={"100%"}
            src="https://dapulse-res.cloudinary.com/image/upload/f_auto,q_auto/Generator_featured%20images/Home%20Page%20-%202022%20Rebrand/customer-support/support_globe.png"
          />
        </Box>
        <Box w={"47%"}>
          <Text fontSize={"4xl"}>
            <Text as={"b"}>Supporting</Text> your growth every step of the way
          </Text>
          <Text mt={4} fontSize={"md"}>
            Our support superheroes are a click away to help you get the most
            out of monday.com, so you can focus on working without limits.
          </Text>
          <Flex mt={12}>
            <Flex>
              <Box mr={2}>
                <Image
                  mt={2}
                  w={"60px"}
                  src={
                    "https://dapulse-res.cloudinary.com/image/upload/Generator_featured%20images/Home%20Page%20-%202022%20Rebrand/customer-support/phone.png"
                  }
                />
              </Box>
              <Box>
                <Text fontSize={"2xl"} as={"b"}>
                  24/7
                </Text>
                <Text>support anytime, anywhere</Text>
              </Box>
            </Flex>
            <Flex>
              <Box mr={2}>
                <Image
                  mt={2}
                  w={"60px"}
                  src={
                    "https://dapulse-res.cloudinary.com/image/upload/Generator_featured%20images/Home%20Page%20-%202022%20Rebrand/customer-support/heart.png"
                  }
                />
              </Box>
              <Box>
                <Text fontSize={"2xl"} as={"b"}>
                  Voted #1
                </Text>
                <Text>Most Loved by customers on G2</Text>
              </Box>
            </Flex>
            <Flex>
              <Box mr={2}>
                <Image
                  mt={2}
                  w={"60px"}
                  src={
                    "https://dapulse-res.cloudinary.com/image/upload/Generator_featured%20images/Home%20Page%20-%202022%20Rebrand/customer-support/fast.png"
                  }
                />
              </Box>
              <Box>
                <Text fontSize={"2xl"} as={"b"}>
                  2 hour
                </Text>
                <Text>average response time</Text>
              </Box>
            </Flex>
          </Flex>
          <Flex mt={16}>
            <Box mr={6}>
              <ButtonBlue title="Get in touch" />
            </Box>
            <Link
              mt={"9px"}
              color={"#6C6CFF"}
              href="https://monday.com/helpcenter">
              Visit our support center <ArrowForwardIcon />
            </Link>
          </Flex>
        </Box>
      </Flex>
      <Box mb={"80px"} mt={"120px"}>
        <Box mb={"100px"} textAlign={"center"}>
          <Image
            m={"auto"}
            src="https://dapulse-res.cloudinary.com/image/upload/Generator_featured%20images/Home%20Page%20-%202022%20Rebrand/review-cards/stars.png"
          />
          <Text mt={4} fontSize={"4xl"}>
            An <Text as={"b"}>award-winning</Text> platform.{" "}
            <Text as={"b"}>Loved</Text> by customers.
          </Text>
          <Text mt={2} fontSize={"xl"}>
            Based on 10,000+ customer reviews.
          </Text>
        </Box>
        <Box overflow={"hidden"}>
          <Grid
            zIndex={99999}
            textAlign={"center"}
            m={"auto"}
            gap={4}
            w={"80%"}
            templateColumns={"repeat(4, 1fr)"}
            templateRows="350px">
            <GridItem boxShadow="lg" borderRadius={"10px"} p={4}>
              <Flex h={"150px"}>
                <Image
                  m={"auto"}
                  w={"110px"}
                  src="https://dapulse-res.cloudinary.com/image/upload/Generator_featured%20images/Home%20Page%20-%202022%20Rebrand/review-cards/trust.png"
                />
              </Flex>
              <Box h={"90px"}>
                <Text as={"b"} fontSize={"xl"}>
                  Voted best feature set, relationship and value
                </Text>
              </Box>
              <Box h={"70px"}>
                <Text fontSize={"lg"}>
                  “This is the best no-code platform I've ever seen.”
                </Text>
              </Box>
            </GridItem>
            <GridItem boxShadow="lg" borderRadius={"10px"} p={4}>
              <Flex h={"150px"}>
                <Image
                  m={"auto"}
                  w={"210px"}
                  src="https://dapulse-res.cloudinary.com/image/upload/Generator_featured%20images/Home%20Page%20-%202022%20Rebrand/review-cards/forrester.png"
                />
              </Flex>
              <Box h={"90px"}>
                <Text as={"b"} fontSize={"xl"}>
                  345% uplift in ROI
                </Text>
              </Box>
              <Box h={"70px"}>
                <Text fontSize={"lg"}>The Total Economic Impact™ Report</Text>
              </Box>
            </GridItem>
            <GridItem boxShadow="lg" borderRadius={"10px"} p={4}>
              <Flex h={"150px"}>
                <Image
                  m={"auto"}
                  w={"110px"}
                  src="https://dapulse-res.cloudinary.com/image/upload/Generator_featured%20images/Home%20Page%20-%202022%20Rebrand/review-cards/capterra.png"
                />
              </Flex>
              <Box h={"90px"}>
                <Text as={"b"} fontSize={"xl"}>
                  Shortlisted in over 8 software categories
                </Text>
              </Box>
              <Box h={"70px"}>
                <Text fontSize={"lg"}>
                  “The perfect organizer and team builder.”
                </Text>
              </Box>
            </GridItem>
            <GridItem boxShadow="lg" borderRadius={"10px"} p={4}>
              <Flex alignItems={"center"} h={"150px"}>
                <Image
                  m={"auto"}
                  w={"110px"}
                  src="https://dapulse-res.cloudinary.com/image/upload/Generator_featured%20images/Home%20Page%20-%202022%20Rebrand/review-cards/g2.png"
                />
              </Flex>
              <Box h={"90px"}>
                <Text as={"b"} fontSize={"xl"}>
                  Market leader across 18 categories
                </Text>
              </Box>
              <Box h={"70px"}>
                <Text fontSize={"lg"}>
                  "Flexible product with near endless possibilities."
                </Text>
              </Box>
            </GridItem>
          </Grid>
          <Box mt={"60px"}>
            <Text fontSize={"4xl"} textAlign={"center"}>
              Deliver your best work with <Text as={"b"}>monday.com</Text>
            </Text>
            <Text fontSize={"xl"} mt={2} mb={6} textAlign={"center"}>
              No credit card needed ✦ Unlimited time on Free plan
            </Text>
            <Flex w={"100%"} justifyContent={"center"} m={"auto"}>
              <ButtonBlue title="Get Started" />
            </Flex>
          </Box>
        </Box>
      </Box>
      <Flex bgColor={"#FAF9F6"} justifyContent={"space-between"} py={"40px"} px={"30px"} m={"auto"}>
        <List spacing={4}>
          <ListItem>
            <Image
              w={"150px"}
              src={
                "https://media.discordapp.net/attachments/897156357810159709/1039845047459397702/logo.png"
              }
            />
          </ListItem>
          <ListItem color={"#333333"}>Pricing</ListItem>
          <ListItem color={"#333333"}>Contact us</ListItem>
          <ListItem color={"#333333"}>Templates</ListItem>
          <ListItem color={"#333333"}>SMB</ListItem>
          <ListItem color={"#333333"}>Enterprise</ListItem>
          <ListItem color={"#333333"}>Nonprofits</ListItem>
          <ListItem color={"#333333"}>Apps marketplace</ListItem>
          <ListItem color={"#333333"}>24/7 support</ListItem>
        </List>
        <List spacing={4}>
          <ListItem>
            <Text as={"b"}>Features</Text>
          </ListItem>
          <ListItem color={"#333333"}>Docs</ListItem>
          <ListItem color={"#333333"}>Integrations</ListItem>
          <ListItem color={"#333333"}>Automations</ListItem>
          <ListItem color={"#333333"}>Files</ListItem>
          <ListItem color={"#333333"}>Dashboards</ListItem>
          <ListItem color={"#333333"}>Kanban</ListItem>
          <ListItem color={"#333333"}>Gantt</ListItem>
        </List>
        <List spacing={4}>
          <ListItem>
            <Text as={"b"}>monday products</Text>
          </ListItem>
          <ListItem color={"#333333"}>monday work management</ListItem>
          <ListItem color={"#333333"}>monday sales CRM</ListItem>
          <ListItem color={"#333333"}>monday marketer</ListItem>
          <ListItem color={"#333333"}>monday projects</ListItem>
          <ListItem color={"#333333"}>monday dev</ListItem>
          <ListItem>
            <Text as={"b"}>More by monday.com</Text>
          </ListItem>
          <ListItem color={"#333333"}>Canvas</ListItem>
          <ListItem color={"#333333"}>WorkForms</ListItem>
        </List>
        <List spacing={4}>
          <ListItem>
            <Text as={"b"}>Use cases</Text>
          </ListItem>
          <ListItem color={"#333333"}>Marketing</ListItem>
          <ListItem color={"#333333"}>Project management</ListItem>
          <ListItem color={"#333333"}>Sales</ListItem>
          <ListItem color={"#333333"}>Developers</ListItem>
          <ListItem color={"#333333"}>HR</ListItem>
          <ListItem color={"#333333"}>IT</ListItem>
          <ListItem color={"#333333"}>Operations</ListItem>
          <ListItem color={"#333333"}>Construction</ListItem>
          <ListItem color={"#333333"}>Education</ListItem>
        </List>
        <List spacing={4}>
          <ListItem>
            <Text as={"b"}>Company</Text>
          </ListItem>
          <ListItem color={"#333333"}>About us</ListItem>
          <ListItem color={"#333333"}>Careers - We're hiring!</ListItem>
          <ListItem color={"#333333"}>monday-U</ListItem>
          <ListItem color={"#333333"}>Press</ListItem>
          <ListItem color={"#333333"}>Customer stories</ListItem>
          <ListItem color={"#333333"}>Become a partner</ListItem>
          <ListItem color={"#333333"}>Sustainability & ESG</ListItem>
          <ListItem color={"#333333"}>Affiliates</ListItem>
          <ListItem color={"#333333"}>Digital Lift</ListItem>
          <ListItem color={"#333333"}>Investor relations</ListItem>
        </List>
        <List spacing={4}>
          <ListItem>
            <Text as={"b"}>Resources</Text>
          </ListItem>
          <ListItem color={"#333333"}>Help Center</ListItem>
          <ListItem color={"#333333"}>Community</ListItem>
          <ListItem color={"#333333"}>Blog</ListItem>
          <ListItem color={"#333333"}>Press</ListItem>
          <ListItem color={"#333333"}>Webinars</ListItem>
          <ListItem color={"#333333"}>Startup for startup</ListItem>
          <ListItem color={"#333333"}>Global events</ListItem>
          <ListItem color={"#333333"}>App development</ListItem>
          <ListItem color={"#333333"}>Find a partner</ListItem>
          <ListItem color={"#333333"}>Compare</ListItem>
        </List>
      </Flex>
    </Box>
  );
}

export default Home