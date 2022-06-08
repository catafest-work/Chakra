import React from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
  Container,
  Input,
  Button,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Logo } from './Logo';


function App() {
  return (
    <ChakraProvider theme={theme}>
      {/* <Box textAlign="center" fontSize="xl">
        <Grid minH="100vh" p={3}>
          <ColorModeSwitcher justifySelf="flex-end" />
          <VStack spacing={8}>
            <Logo h="40vmin" pointerEvents="none" />
            <Text>
              Edit <Code fontSize="xl">src/App.js</Code> and save to reload.
            </Text>
            <Link
              color="teal.500"
              href="https://chakra-ui.com"
              fontSize="2xl"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn Chakra
            </Link>
          </VStack>
        </Grid>
      </Box> */}
      <Container>
        <Box bg="" borderWidth="1px" borderRadius="lg" p={4} mt={3} >
          <Text fontSize="2xl" align="center">Create Account</Text>
          <Text fontSize="md" align="center" pb={4} >Already have an account? <Link color='red'>Log in </Link></Text>
          <VStack spacing={2} align="stretch" pb={3} >
            <Input placeholder="Username" />
            <Input placeholder="Email" />
            <Input placeholder="Password" />
            <Input placeholder="Confirm Password" />
          </VStack>
          <Button colorScheme="teal" variant="solid" isFullWidth="true">
            Create Account
          </Button>
        </Box>
      </Container>
    </ChakraProvider>
  );
}

export default App;
