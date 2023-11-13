import { Box } from "@chakra-ui/react";

interface Props {
  colorMode: string;
  height: string;
  minheight: string;
}

const GradientSideBar = ({ colorMode, height, minheight }: Props) => {
  // updated to solid red for both the light and dark modes, but kept gradient setup in case this wants to be used in the future
  let color1 = "#EA082A";
  let color2 = "#EA082A";

  colorMode === "dark" ? ((color1 = "#EA082A"), (color2 = "#EA082A")) : ((color1 = "#EA082A"), (color2 = "#EA082A"));

  const gradient = "linear(to-l, " + color1 + ", " + color2 + ")";

  return <Box minW="2px" h={height} minH={minheight} bgGradient={gradient} marginRight={3} />;
};

export default GradientSideBar;
