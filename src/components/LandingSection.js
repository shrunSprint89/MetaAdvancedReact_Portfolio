import React from "react";
import { Avatar, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const greeting = "Hello, I am Pete!";
const bio1 = "A frontend developer";
const bio2 = "specialised in React";

// Implement the UI for the LandingSection component according to the instructions.
// Use a combination of Avatar, Heading and VStack components.
const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
  >
    <VStack spacing={3}>
      <Avatar size='xl' src='https://i.pravatar.cc/150?img=7' name='User Name' />
      <Heading as='h4' size='md'>Hello, I am Pete!</Heading>
      <Heading w='xl' as='h2' size='2xl' textAlign='center'>A frontend developer specialised in React</Heading>
    </VStack>

  </FullScreenSection>
);

export default LandingSection;
