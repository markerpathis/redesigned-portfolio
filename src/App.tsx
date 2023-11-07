import { VStack, Text, Box, Flex } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/image";

import HeadingMain from "./components/HeadingMain";
import ParkerPicture from "./assets/parkerImage.png";
import IntroText from "./content/intro";
import HeadingSecondary from "./components/HeadingSecondary";
import SkillsText from "./content/Skills";
import AboutText from "./content/about";

function App() {
  return (
    <>
      <Box w="100%" paddingY="50px">
        <Flex justifyContent="center" alignItems="center">
          <Image boxSize="25%" borderRadius={8} src={ParkerPicture} />

          <VStack boxSize="50%" alignItems="start" paddingLeft={5}>
            <HeadingMain />
            <Text>{IntroText}</Text>
            <Text>{AboutText}</Text>

            <HeadingSecondary>Skills</HeadingSecondary>
            <Text>{SkillsText}</Text>
          </VStack>
        </Flex>
      </Box>
    </>
  );
}

export default App;
