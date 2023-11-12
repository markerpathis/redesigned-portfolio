import { Box } from "@chakra-ui/react";

interface Props {
  colorMode: string;
  height: string;
  minheight: string;
}

const GradientSideBar = ({ colorMode, height, minheight }: Props) => {
  let color1 = "#00F5A0";
  let color2 = "#00D9F5";

  colorMode === "dark" ? ((color1 = "#00F5A0"), (color2 = "#00D9F5")) : ((color1 = "#00B877"), (color2 = "#00A2B8"));

  const gradient = "linear(to-l, " + color1 + ", " + color2 + ")";

  return <Box minW="2px" h={height} minH={minheight} bgGradient={gradient} marginRight={3} />;
};

export default GradientSideBar;
