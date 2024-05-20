import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { Container, Text, VStack, HStack, Button, Input, FormControl, FormLabel, Box, Heading } from "@chakra-ui/react";
import { FaHome, FaInfoCircle, FaDollarSign, FaDownload, FaShoppingCart, FaQuestionCircle, FaSignInAlt, FaUserPlus } from "react-icons/fa";

const LandingPage = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="flex-start" alignItems="center" pt={4}>
      <HStack spacing={4} mb={8}>
        <Button as={Link} to="/" leftIcon={<FaHome />}>
          Home
        </Button>
        <Button as={Link} to="/about" leftIcon={<FaInfoCircle />}>
          About
        </Button>
        <Button as={Link} to="/rates" leftIcon={<FaDollarSign />}>
          Rates
        </Button>
        <Button as={Link} to="/download" leftIcon={<FaDownload />}>
          Download
        </Button>
        <Button as={Link} to="/buy-credits" leftIcon={<FaShoppingCart />}>
          Buy Credits
        </Button>
        <Button as={Link} to="/help" leftIcon={<FaQuestionCircle />}>
          Help
        </Button>
        <Button as={Link} to="/login" leftIcon={<FaSignInAlt />}>
          Sign In
        </Button>
        <Button as={Link} to="/register" leftIcon={<FaUserPlus />}>
          Register
        </Button>
      </HStack>
      <Heading as="h1" size="2xl" textAlign="center">
        Welcome to Bijli SMS
      </Heading>
    </Container>
  );
};

const SignUpPage = () => {
  return (
    <Container centerContent maxW="container.sm" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <Box p={8} borderWidth={1} borderRadius={8} boxShadow="lg">
        <VStack spacing={4}>
          <Heading as="h2" size="lg">
            Register
          </Heading>
          <FormControl id="username">
            <FormLabel>Username</FormLabel>
            <Input type="text" />
          </FormControl>
          <FormControl id="email">
            <FormLabel>Email</FormLabel>
            <Input type="email" />
          </FormControl>
          <FormControl id="password">
            <FormLabel>Password</FormLabel>
            <Input type="password" />
          </FormControl>
          <Button colorScheme="blue" width="full">
            Sign Up
          </Button>
        </VStack>
      </Box>
    </Container>
  );
};

const LoginPage = () => {
  return (
    <Container centerContent maxW="container.sm" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <Box p={8} borderWidth={1} borderRadius={8} boxShadow="lg">
        <VStack spacing={4}>
          <Heading as="h2" size="lg">
            Sign In
          </Heading>
          <FormControl id="email">
            <FormLabel>Email</FormLabel>
            <Input type="email" />
          </FormControl>
          <FormControl id="password">
            <FormLabel>Password</FormLabel>
            <Input type="password" />
          </FormControl>
          <Button colorScheme="blue" width="full">
            Sign In
          </Button>
        </VStack>
      </Box>
    </Container>
  );
};

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<Text>About Page</Text>} />
        <Route path="/rates" element={<Text>Rates Page</Text>} />
        <Route path="/download" element={<Text>Download Page</Text>} />
        <Route path="/buy-credits" element={<Text>Buy Credits Page</Text>} />
        <Route path="/help" element={<Text>Help Page</Text>} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<SignUpPage />} />
      </Routes>
    </Router>
  );
};

export { App };
