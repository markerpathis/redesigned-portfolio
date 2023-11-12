import { useState } from "react";
import { VStack, Box, Heading, Center, Container } from "@chakra-ui/layout";
import NavBar from "./components/NavBar";
import ProjectGrid from "./components/ProjectGrid";
import IntroBlock from "./components/IntroBlock";
import SkillsBlock from "./components/SkillsBlock";
import ContactBlock from "./components/ContactBlock";

function App() {
  const [colorMode, setColorMode] = useState("");

  return (
    <>
      <NavBar colorMode={colorMode} onColorModeSelect={(colorMode) => setColorMode(colorMode)} />
      <Container maxW="1500px">
        <Box paddingY="50px" paddingX="15%">
          {/* INTRO AND PHOTO */}
          <Center id="about">
            <IntroBlock colorMode={colorMode} />
          </Center>

          {/* SKILLS */}
          <VStack paddingTop={20} w="full">
            <Heading as="h1" fontSize="4xl" paddingBottom={4} id="skills">
              Skills
            </Heading>
            <SkillsBlock colorMode={colorMode} />
          </VStack>

          {/* PROJECTS */}
          {/* <Center paddingTop={20}> */}
          <VStack paddingTop={20} w="full">
            <Heading as="h1" fontSize="4xl" paddingBottom={4} id="projects">
              Projects
            </Heading>
            <Box>
              <ProjectGrid />
            </Box>
          </VStack>
          {/* </Center> */}

          {/* Contact */}
          <Center paddingTop={20}>
            <VStack>
              <Heading as="h1" fontSize="4xl" paddingBottom={4} id="contact">
                Contact
              </Heading>
              <ContactBlock colorMode={colorMode} />
            </VStack>
          </Center>
        </Box>
      </Container>
    </>
  );
}

export default App;
