import { HStack, Image, Box } from "@chakra-ui/react";
import ColorModeSwitch from "./ColorModeSwitch";
import logoLight from "../assets/nameLogoLight.png";
import logoDark from "../assets/nameLogoDark.png";

interface Props {
  onColorModeSelect: (colorMode: string) => void;
  colorMode: string;
}
const NavBar = ({ onColorModeSelect, colorMode }: Props) => {
  return (
    <HStack padding="10px" justifyContent="space-between">
      <Box>{colorMode === "dark" ? <Image src={logoLight} /> : <Image src={logoDark} />}</Box>
      <Box paddingRight={5}>
        <ColorModeSwitch onColorModeSelect={onColorModeSelect} />
      </Box>
    </HStack>
  );
};

export default NavBar;
