import Slider from "../src/components/Slider";
import { Box, Text, Center } from "@chakra-ui/react";

function App() {
  return (
    <Center w="100vw" h="100vh">
      <Box
        p="2px"
        h="80%"
        borderRadius="24px"
        w={{ base: "80%", lg: "50%" }}
        backgroundImage="linear-gradient(#00cdfa,#705cf6 50%,#df56d2)"
      >
        <Center
          h="full"
          bg="#fff"
          flexDir="column"
          textAlign="center"
          borderRadius="24px"
          p={{ base: "48px 10px 64px", lg: "48px 32px 64px" }}
        >
          <Text mb="20px" fontSize="24px" fontWeight="700">
            Long-form
          </Text>
          <Text
            mb={2}
            w="80%"
            color="#705cf6"
            fontSize="16px"
            fontWeight="bold"
          >
            For bloggers, freelancers & businesses
          </Text>
          <Text
            px={2}
            w="70%"
            color="#705cf6"
            fontSize="14px"
            minHeight="65px"
            fontWeight="500"
          >
            Awesome tools to help you write blog posts, books, and more.
          </Text>
          <Slider />
        </Center>
      </Box>
    </Center>
  );
}

export default App;
