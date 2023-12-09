import { Flex, Box, Text } from "@chakra-ui/react";
import { LinkComp } from "@components/Link";

export const NavBar = () => {
  return (
    <Flex
      position="absolute"
      top="0"
      left="0"
      right="0"
      zIndex="10"
      as="header"
      justify="space-between"
      wrap="wrap"
      padding="1rem"
      bg="transparent"
      color="white"
      mx="auto"
      maxWidth="container.xl"
    >
      <Flex align="center">
        <Text fontSize="xl" fontWeight="bold">
          RollCall
        </Text>
      </Flex>

      <Flex align="center" justify="space-between">
        <Box p="2">
          <LinkComp linkText="Home" destination="/" />
        </Box>
        <Box p="2">
          <LinkComp linkText="About" destination="/about" />
        </Box>
        <Box p="2">
          <LinkComp linkText="Features" destination="/features" />
        </Box>
        <Box p="2">
          <LinkComp linkText="Testimonials" destination="/testimonials" />
        </Box>
        <Box p="2">
          <LinkComp linkText="Contact" destination="/contact" />
        </Box>
      </Flex>

      <Flex>
        <Box p="2" mr="6">
          <LinkComp linkText="Sign in" destination="/login" />
        </Box>
        <Box
          p="2"
          sx={{
            background: "linear-gradient(45deg, #007BFF, #0056b3)",
            boxShadow: "0 4px 14px 0 rgba(0, 123, 255, 0.39)",
            _hover: {
              bg: "#0056b3",
            },
          }}
          borderRadius="md"
        >
          <LinkComp linkText="Join as admin" destination="/login" />
        </Box>
      </Flex>
    </Flex>
  );
};
