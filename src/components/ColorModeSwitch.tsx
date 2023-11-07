import { HStack, Switch, Text, useColorMode } from "@chakra-ui/react";

interface Props {
  setCurrentColor: (currentColor: string) => void;
  currentColor: string;
}

const ColorModeSwitch = ({ setCurrentColor, currentColor }: Props) => {
  const { toggleColorMode, colorMode } = useColorMode();

  colorMode === "dark" ? setCurrentColor("dark") : setCurrentColor("light");

  return (
    <HStack>
      <Switch colorScheme="green" isChecked={colorMode === "dark"} onChange={toggleColorMode} />
      <Text whiteSpace="nowrap">Dark Mode</Text>
    </HStack>
  );
};

export default ColorModeSwitch;
