import { HStack, Text } from "@chakra-ui/react";
import { AiFillGithub } from "react-icons/ai";

const GithubButton = () => {
  return (
    <HStack
      bg="grey"
      p={4}
      py={2}
      rounded="md"
      _hover={{ opacity: 0.8 }}
      _active={{ transform: "scale(0.99)", opacity: 0.7 }}
      cursor="pointer"
      transitionDuration="200ms"
      pos="absolute"
      top={0}
      right={4}
      onClick={() =>
        window.open("https://poiesis.education", "_blank", "noopener")
      }
    >
      <AiFillGithub color="white" />
      <Text fontWeight={"bold"} color={"#1c1c1c"}>
        Visit our website!
      </Text>
    </HStack>
  );
};

export default GithubButton;
