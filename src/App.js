import app from "./app.module.scss";
import Slider from "../src/components/Slider";
import { Text } from "@chakra-ui/react";

function App() {
  return (
    <div className={app.container}>
      <div className={app.background}>
        <div className={app.wrapper}>
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
        </div>
      </div>
    </div>
  );
}

export default App;
