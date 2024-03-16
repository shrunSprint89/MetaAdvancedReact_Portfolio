import { Heading, HStack, Image, Text, VStack, Link, Box } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  return (
    <VStack height='fit-content' align='start' borderRadius='2xl' color='black' bg='white' spacing={3}>
      <Image borderRadius='2xl' src={imageSrc} alt={description}/>
      <Box paddingX='5' paddingBottom="5">
        <Heading paddingBottom='2'  as='h4' size='md'>{title}</Heading>
        <Text paddingBottom='2' fontSize='sm'>{description}</Text>
        <Link paddingBottom='2' fontSize='sm' fontWeight='bold' href='https://chakra-ui.com' isExternal>
          See more <FontAwesomeIcon icon={ faArrowRight } size="1x" />
        </Link>
      </Box>      
    </VStack>    
  );
};

export default Card;
