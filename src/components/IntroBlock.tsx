import { HStack, Heading, VStack, Text, Image } from "@chakra-ui/react";
import ParkerPicture from "../assets/parkerImage.png";

const IntroBlock = () => {
  return (
    <>
      <HStack spacing={10}>
        <VStack boxSize="60%" alignItems="start">
          <Heading as="h1" fontSize="5xl" fontWeight="bold" bgGradient="linear(to-l, #00F5A0, #00D9F5)" bgClip="text">
            Hey there! I'm Parker.
          </Heading>{" "}
          <Text >
            I'm a recent coding bootcamp grad, seeking a career as a full-stack developer. The coding bootcamp I completed was through the University of Washington (September 2022 - March 2023). Check
            out the portfolio below.
          </Text>
          <Text>I live on Camano Island, WA, with my wife (Joanna) and dog (Bruno). I love hockey (go Kraken!), biking, cooking/bbqing, video games, and board games.</Text>
        </VStack>
        <Image boxSize="300px" borderRadius={230} border="9px solid " borderColor="#00F5A0" src={ParkerPicture} />
      </HStack>
    </>
  );
};

export default IntroBlock;
