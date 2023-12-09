import * as React from "react";
import { Box, Flex, Heading, Text, Button, Image } from "@chakra-ui/react";

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
      paddingY="4"
    >
      <Box flexBasis={{ base: "100%", md: "55%" }} p={5}>
        <Heading as="h1" size="2xl" lineHeight="1.3" mb="4">
          Streamline Your Attendance Management with RollCall
        </Heading>
        <Text fontSize="xl" mb="8">
          RollCall isn't just an app; it's a revolution in attendance
          management. Embrace the simplicity, enhance your efficiency, and
          transform the way you mark attendance with RollCall.
        </Text>
        <Button
          size="lg"
          sx={{
            background:
              "linear-gradient(-180deg, #BCC5CE 0%, #929EAD 98%), radial-gradient(at top left, rgba(255,255,255,0.30) 0%, rgba(0,0,0,0.30) 100%)",
            backgroundBlendMode: "screen",
          }}
        >
          Join as admin
        </Button>
      </Box>
    </Flex>
  );
};
