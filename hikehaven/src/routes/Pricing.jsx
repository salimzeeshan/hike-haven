import React from 'react'
import ButtonBlue from '../components/ButtonBlue';
import {Box, Heading, Text, Flex, Divider, List, ListItem, Image} from "@chakra-ui/react"

function Pricing() {
  return (
    <Box
      w={"100%"}
      justifyContent={"center"}
      position={"absolute"}
      mt={"130px"}>
      <Box textAlign={"center"}>
        <Heading as={"b"} fontSize={"4xl"}>
          Supercharge your teamwork. Start{" "}
          <span style={{ color: "#5559DF" }}>free.</span>
        </Heading>
        <Text fontSize={"xl"} mt={4}>
          Unlimited boards and workflows. No credit card needed.
        </Text>
        <Box mt={6}>
          <ButtonBlue title={"Get Started"} />
        </Box>
      </Box>
      <Flex
        px={"30px"}
        justifyContent={"space-around"}
        gap={4}
        mt={"20px"}
        mb={"100px"}>
        <Box border={"1px solid #3333"} borderRadius={"5px"} w={"20%"} p="20px">
          <Box>
            <Text fontSize={"2xl"} as="b">
              Individual
            </Text>
            <Flex alignItems={"center"}>
              <Text mr={2} fontSize={"5xl"}>
                $0
              </Text>
              <Text>
                free <br /> forever
              </Text>
            </Flex>
            <Box mt={"25px"} mb={"15px"}>
              <Text as={"b"}>Up to 2 seats</Text>
            </Box>
            <ButtonBlue title={"Try for free"} />
            <Box mt={"20px"} h={"130px"}>
              <Text>For individuals looking to keep track of their work</Text>
            </Box>
            <Divider my={"20px"} orientation="horizontal" />
            <List spacing={3}>
              <ListItem>
                <Text fontSize={"xl"} as={"b"}>
                  Individual plan includes:
                </Text>
              </ListItem>
              <ListItem>Up to 3 boards</ListItem>
              <ListItem>Unlimited docs</ListItem>
              <ListItem>200+ templates</ListItem>
              <ListItem>Over 20 column types</ListItem>
              <ListItem>Up to 2 team members</ListItem>
              <ListItem>iOS and Android app</ListItem>
            </List>
          </Box>
        </Box>
        <Box border={"1px solid #3333"} borderRadius={"5px"} w={"20%"} p="20px">
          <Box>
            <Text fontSize={"2xl"} as="b">
              Individual
            </Text>
            <Flex alignItems={"center"}>
              <Text color={"#A25CDC"} mr={2} fontSize={"5xl"}>
                $8
              </Text>
              <Text>
                seat / <br /> month
              </Text>
            </Flex>
            <Box mt={"25px"} mb={"15px"}>
              <Text as={"b"}>Total $24 / month</Text>
            </Box>
            <ButtonBlue title={"Try for free"} />
            <Box mt={"20px"} h={"130px"}>
              <Text>Manage all your teams' work in one place</Text>
            </Box>
            <Divider my={"20px"} orientation="horizontal" />
            <List spacing={3}>
              <ListItem>
                <Text fontSize={"xl"} as={"b"}>
                  Includes Individual, plus:
                </Text>
              </ListItem>
              <ListItem>Unlimited free viewers</ListItem>
              <ListItem>Unlimited items</ListItem>
              <ListItem>5 GB file storage</ListItem>
              <ListItem>Prioritised customer support</ListItem>
              <ListItem>Create a dashboard based on 1 board</ListItem>
            </List>
          </Box>
        </Box>
        <Box border={"1px solid #3333"} borderRadius={"5px"} w={"20%"} p="20px">
          <Box>
            <Text fontSize={"2xl"} as="b">
              Standard
            </Text>
            <Flex alignItems={"center"}>
              <Text color={"#0285FF"} mr={2} fontSize={"5xl"}>
                $10
              </Text>
              <Text>
                seat /<br /> month
              </Text>
            </Flex>
            <Box mt={"25px"} mb={"15px"}>
              <Text as={"b"}>Total $30 / month</Text>
            </Box>
            <ButtonBlue title={"Try for free"} />
            <Box mt={"20px"} h={"130px"}>
              <Text>Collaborate and optimize your team processes</Text>
            </Box>
            <Divider my={"20px"} orientation="horizontal" />
            <List spacing={3}>
              <ListItem>
                <Text fontSize={"xl"} as={"b"}>
                  Includes Basic, plus:
                </Text>
              </ListItem>
              <ListItem>Timeline & Gantt views</ListItem>
              <ListItem>Calendar view</ListItem>
              <ListItem>Guest access</ListItem>
              <ListItem>Automations (250 actions per month)</ListItem>
              <ListItem>Integrations (250 actions per month)</ListItem>
              <ListItem>
                Create a dashboard that combines up to 5 boards
              </ListItem>
            </List>
          </Box>
        </Box>
        <Box border={"1px solid #3333"} borderRadius={"5px"} w={"20%"} p="20px">
          <Box>
            <Text fontSize={"2xl"} as="b">
              Pro
            </Text>
            <Flex alignItems={"center"}>
              <Text color={"#00A25B"} mr={2} fontSize={"5xl"}>
                $16
              </Text>
              <Text>
                seat / <br /> month
              </Text>
            </Flex>
            <Box mt={"25px"} mb={"15px"}>
              <Text as={"b"}>Total $48 / month</Text>
            </Box>
            <ButtonBlue title={"Try for free"} />
            <Box mt={"20px"} h={"130px"}>
              <Text>Streamline and run your teams' complex workflows</Text>
            </Box>
            <Divider my={"20px"} orientation="horizontal" />
            <List spacing={3}>
              <ListItem>
                <Text fontSize={"xl"} as={"b"}>
                  Includes Standard, plus:
                </Text>
              </ListItem>
              <ListItem>Private boards and docs</ListItem>
              <ListItem>Chart view</ListItem>
              <ListItem>Time tracking</ListItem>
              <ListItem>Formula column</ListItem>
              <ListItem>Dependency column</ListItem>
              <ListItem>Automations (25,000 actions per month)</ListItem>
              <ListItem>Integrations (25,000 actions per month)</ListItem>
              <ListItem>
                Create a dashboard that combines up to 10 boards
              </ListItem>
            </List>
          </Box>
        </Box>
      </Flex>
      <Flex mb={"40px"} flexDirection={"column"} alignItems="center">
        <Text fontSize={"4xl"} textAlign={"center"}>
          Over 152,000 customers worldwide rely on monday.com
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
      </Flex>
      <Box textAlign={"center"} mt={"80px"} mb="80px">
        <Text as={"b"} fontSize={"4xl"}>Start using monday.com today</Text>
        <Text mb={"20px"} fontSize={"2xl"}>Try it now for free / No credit card needed</Text>
        <ButtonBlue title={"Get Started"} />
      </Box>
      <Flex
        bgColor={"#FAF9F6"}
        justifyContent={"space-between"}
        py={"40px"}
        px={"30px"}
        m={"auto"}
        w="100%">
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

export default Pricing