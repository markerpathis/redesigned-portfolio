import { HStack, Text, Image, Box } from "@chakra-ui/react";
import ColorModeSwitch from "./ColorModeSwitch";
import logoLight from "../assets/nameLogoLight.png";
import logoDark from "../assets/nameLogoDark.png";
import { useState } from "react";

const NavBar = () => {
  const [currentColor, setCurrentColor] = useState("");

  return (
    <HStack padding="10px" justifyContent="space-between">
      <Box>{currentColor === "dark" ? <Image src={logoLight} /> : <Image src={logoDark} />}</Box>
      <Box paddingRight={5}>
        <ColorModeSwitch currentColor={currentColor} setCurrentColor={setCurrentColor} />
      </Box>
    </HStack>
  );
};

export default NavBar;
