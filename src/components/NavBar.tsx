import { HStack, Box, Link } from "@chakra-ui/react";
import ColorModeSwitch from "./ColorModeSwitch";

interface Props {
  onColorModeSelect: (colorMode: string) => void;
  colorMode: string;
}
const NavBar = ({ onColorModeSelect }: Props) => {
  return (
    <HStack padding="40px" justifyContent={{ sm: "center", md: "flex-end" }} spacing={{ sm: 3, md: 10, lg: 20 }}>
      <Link href="#about">About</Link>
      <Link href="#skills">Skills</Link>
      <Link href="#projects">Projects</Link>
      <Link href="#contact">Contact</Link>
      <Box paddingRight={5}>
        <ColorModeSwitch onColorModeSelect={onColorModeSelect} />
      </Box>
    </HStack>
  );
};

export default NavBar;
