import { HStack, Switch, Text, useColorMode } from "@chakra-ui/react";

interface Props {
  onColorModeSelect: (colorMode: string) => void;
}

const ColorModeSwitch = ({ onColorModeSelect }: Props) => {
  const { toggleColorMode, colorMode } = useColorMode();

  colorMode === "dark" ? onColorModeSelect("dark") : onColorModeSelect("light");

  return (
    <HStack>
      <Switch colorScheme="green" isChecked={colorMode === "dark"} onChange={toggleColorMode} />
      <Text whiteSpace="nowrap">Dark Mode</Text>
    </HStack>
  );
};

export default ColorModeSwitch;
