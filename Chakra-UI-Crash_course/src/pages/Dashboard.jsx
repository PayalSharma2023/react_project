import { Box, Container, filter, Heading, SimpleGrid, Text } from "@chakra-ui/react";
import { color } from "framer-motion";

export default function Dashboard() {
  return(
    <SimpleGrid columns={4} p="10px" spacing={10} minChildWidth="250px">
      <Box bg="white" h="200px" border="1px solid">
        <Text color={{base: 'pink', md: 'blue', lg:'green'}}>Hello</Text>
      </Box>
      {/* <Box bg="white" h="200px" border="1px solid"></Box>
      <Box bg="white" h="200px" border="1px solid"></Box>
      <Box bg="white" h="200px" border="1px solid"></Box>

      <Box bg="white" h="200px" border="1px solid"></Box>
      <Box bg="white" h="200px" border="1px solid"></Box>
      <Box bg="white" h="200px" border="1px solid"></Box>
      <Box bg="white" h="200px" border="1px solid"></Box>

      <Box bg="white" h="200px" border="1px solid"></Box>
      <Box bg="white" h="200px" border="1px solid"></Box>
      <Box bg="white" h="200px" border="1px solid"></Box>
      <Box bg="white" h="200px" border="1px solid"></Box>

      <Box bg="white" h="200px" border="1px solid"></Box>
      <Box bg="white" h="200px" border="1px solid"></Box>
      <Box bg="white" h="200px" border="1px solid"></Box>
      <Box bg="white" h="200px" border="1px solid"></Box> */}
    </SimpleGrid>
  )
}
