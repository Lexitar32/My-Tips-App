import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import { LinkComp } from "@components/Link";

export const HeroSection = () => {
  return (
    <Flex
      as="section"
      align="center"
      justify="center"
      textAlign="center"
      wrap="wrap"
      h="100vh"
      bgImage="url('../../src/assets/attendance-bg.png')"
      bgPosition="center"
      bgRepeat="no-repeat"
      color="white"
      paddingX="6"
    >
      <Box flexBasis={{ base: "100%", md: "60%" }} p={5}>
        <Heading
          as="h2"
          size="2xl"
          lineHeight="1.3"
          mb="4"
          fontWeight="extrabold"
        >
          Streamline Your Attendance Management with RollCall
        </Heading>
        <Text fontSize="17px" mb="8">
          RollCall isn't just an app; it's a revolution in attendance
          management. Embrace the simplicity, enhance your efficiency, and
          transform the way you mark attendance with RollCall.
        </Text>
        <Box
          as="button"
          p="2"
          sx={{
            background: "linear-gradient(45deg, #007BFF, #0056b3)",
            boxShadow: "0 4px 14px 0 rgba(0, 123, 255, 0.39)",
            _hover: {
              bg: "#0056b3",
            },
          }}
          color="white"
          height="48px"
          width={{ base: "100%", sm: "auto" }}
          minWidth="120px"
          paddingX="4"
          display="inline-flex"
          alignItems="center"
          justifyContent="center"
          boxShadow="sm"
          borderRadius="md"
        >
          <LinkComp linkText="Join as admin" destination="/login" />
        </Box>
      </Box>
    </Flex>
  );
};
