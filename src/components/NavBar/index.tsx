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
      <Text fontSize="xl" fontWeight="bold">
        RollCall
      </Text>

      <Flex align="center" justify="space-between">
        <Box p="2">
          <LinkComp linkText="Home" destination="/" />
        </Box>
        <Box p="2">
          <LinkComp linkText="About" destination="/about" />
        </Box>
        <Box p="2">
          <LinkComp linkText="Contact" destination="/contact" />
        </Box>
        <Box p="2">
          <LinkComp linkText="Schedule Demo" destination="/demo" />
        </Box>
      </Flex>

      <Flex>
        <Box p="2">
          <LinkComp linkText="Sign in" destination="/login" />
        </Box>
        <Box
          p="2"
          sx={{
            background:
              "linear-gradient(-180deg, #BCC5CE 0%, #929EAD 98%), radial-gradient(at top left, rgba(255,255,255,0.30) 0%, rgba(0,0,0,0.30) 100%)",
            backgroundBlendMode: "screen",
          }}
          borderRadius="md"
        >
          <LinkComp linkText="Join as admin" destination="/login" />
        </Box>
      </Flex>
    </Flex>
  );
};
