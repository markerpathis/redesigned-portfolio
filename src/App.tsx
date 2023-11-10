import { VStack, Text, Box, Flex, HStack, Heading, Center } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/image";
import HeadingMain from "./components/HeadingMain";
import ParkerPicture from "./assets/parkerImage.png";
import IntroText from "./content/intro";
import HeadingSecondary from "./components/HeadingSecondary";
import SkillsText from "./content/Skills";
import AboutText from "./content/about";
import NavBar from "./components/NavBar";
import ProjectGrid from "./components/ProjectGrid";

function App() {
  return (
    <>
      <NavBar />
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
        
        <Center paddingTop={8}>
          <VStack>
            <Heading as="h1" fontSize="4xl" paddingBottom={4}>
              Portfolio
            </Heading>
            <ProjectGrid />
          </VStack>
        </Center>
      </Box>
    </>
  );
}

export default App;
