import { useState } from "react";
import { VStack, Box, Heading, Center } from "@chakra-ui/layout";
import NavBar from "./components/NavBar";
import ProjectGrid from "./components/ProjectGrid";
import IntroBlock from "./components/IntroBlock";
import SkillsBlock from "./components/SkillsBlock";

function App() {
  const [colorMode, setColorMode] = useState("");

  return (
    <>
      <NavBar colorMode={colorMode} onColorModeSelect={(colorMode) => setColorMode(colorMode)} />
      <Box w="100%" paddingY="50px" paddingX="15%">
        {/* INTRO AND PHOTO */}
        <Center>
          <IntroBlock colorMode={colorMode} />
        </Center>

        {/* SKILLS */}
        <Center paddingTop={20}>
          <VStack>
            <Heading as="h1" fontSize="4xl" paddingBottom={4}>
              Skills
            </Heading>
            <SkillsBlock />
          </VStack>
        </Center>

        {/* PROJECTS */}
        <Center paddingTop={20}>
          <VStack>
            <Heading as="h1" fontSize="4xl" paddingBottom={4}>
              Projects
            </Heading>
            <Box paddingX={10}>
              <ProjectGrid />
            </Box>
          </VStack>
        </Center>
      </Box>
    </>
  );
}

export default App;
