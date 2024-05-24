import { Box, Container, Flex, Heading, Text, VStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <Container maxW="container.xl" p={4}>
      <Flex as="nav" bg="brand.800" color="white" p={4} justifyContent="space-between" alignItems="center">
        <Heading as="h1" size="lg">
          My Blog
        </Heading>
        <Flex>
          <Link to="/" style={{ marginRight: "1rem" }}>Home</Link>
          <Link to="/about">About</Link>
        </Flex>
      </Flex>
      <Flex mt={4}>
        <Box flex="3" p={4}>
          <VStack spacing={4} align="stretch">
            <Box p={5} shadow="md" borderWidth="1px">
              <Heading fontSize="xl">Blog Post Title 1</Heading>
              <Text mt={4}>This is a summary of the blog post content...</Text>
            </Box>
            <Box p={5} shadow="md" borderWidth="1px">
              <Heading fontSize="xl">Blog Post Title 2</Heading>
              <Text mt={4}>This is a summary of the blog post content...</Text>
            </Box>
          </VStack>
        </Box>
        <Box flex="1" p={4} bg="gray.100">
          <Heading size="md" mb={4}>Sidebar</Heading>
          <Text>Additional widgets or information can go here.</Text>
        </Box>
      </Flex>
    </Container>
  );
};

export default Index;