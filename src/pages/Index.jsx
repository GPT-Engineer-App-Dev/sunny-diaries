import { Box, Container, Flex, Heading, Text, VStack, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

import { useEffect, useState } from "react";

const Index = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const storedPosts = JSON.parse(localStorage.getItem("posts")) || [];
    setPosts(storedPosts);
  }, []);
  return (
    <Container maxW="container.xl" p={4}>
      <Flex as="nav" bg="brand.800" color="white" p={4} justifyContent="space-between" alignItems="center">
        <Heading as="h1" size="lg">
          My Blog
        </Heading>
        <Flex>
          <Link to="/" style={{ marginRight: "1rem" }}>Home</Link>
          <Link to="/about" style={{ marginRight: "1rem" }}>About</Link>
          <Link to="/add-post">Add Post</Link>
        </Flex>
      </Flex>
      <Flex mt={4}>
        <Box flex="3" p={4}>
          <VStack spacing={4} align="stretch">
            {posts.map((post, index) => (
              <Box key={index} p={5} shadow="md" borderWidth="1px">
                <Heading fontSize="xl">{post.title}</Heading>
                <Text mt={4}>{post.content}</Text>
                {post.image && <img src={URL.createObjectURL(post.image)} alt={post.title} style={{ marginTop: "1rem", maxWidth: "100%" }} />}
              </Box>
            ))}
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