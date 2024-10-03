import { Box, Container, filter, Heading, Text } from "@chakra-ui/react";
import { color } from "framer-motion";

export default function Dashboard() {

  const boxStyles = {
    p: "10px",
    bg: "purple.400",
    color: "white",
    m: "10px",
    textAlign: "center",
    filter: "blur(2px)",
    ":hover":{
      color: "black",
      bg: "blue.200"
    }
  }

  return (
    <Container as="section" maxWidth="2xl" py="20px">
      <Heading my="30px" p="10px">Chakra UI Components</Heading>
      <Text marginLeft="30px">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem nulla quidem tempora aliquid veritatis quibusdam consequuntur beatae excepturi ab quasi voluptatem deleniti ipsum, nostrum est fugiat. Officiis reiciendis impedit iure eaque natus, harum maxime.
      </Text>
      <Text ml="30px" color="blue.300" fontWeight="bold">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem nulla quidem tempora aliquid veritatis quibusdam consequuntur beatae excepturi ab quasi voluptatem deleniti ipsum, nostrum est fugiat. Officiis reiciendis impedit iure eaque natus, harum maxime.
      </Text>
      <Box my="30px" p="20px" bg="orange">
        <Text color="white">This is a Box</Text>
      </Box>
      <Box sx={boxStyles}>
        Hello, Ninjas!
      </Box>
    </Container>
  )
}
